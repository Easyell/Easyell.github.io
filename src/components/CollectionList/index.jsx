import React from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'
require('./style.scss')

class CollectionItem extends React.Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }
  render() {
    const {href, image, text, desc, title} = this.props
    return (
      <a href={href} className="collection_item">
        <img src={image}></img>
        <div className="collection_item_mask">
          <p className="collection_item_desc">{desc}</p>
          <p className="collection_item_title">{title}</p>
          <img src="/image/cover_plus.png"></img>
        </div>
      </a>
    )
  }
}

class CollectionList extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this)
  }
  buildItems() {
    const {collections} = this.props
    let list = []
    collections.forEach(collection => {
      list.push(
        <CollectionItem image={collection.image} href={collection.href} title={collection.title} desc={collection.desc} ></CollectionItem>
      )
    })
    return list
  }
  render() {
    return (
      <div id='CollectionList'>
        {this.buildItems()}
      </div>
    )
  }
}

CollectionList.defaultProps = {
  collections:[
    {
      href: '/collections/renyanzhi.html',
      image: "/image/renyanzhi_cover.png",
      desc: "book design .editorial .",
      title: "人言志"
    },
    {
      href: '/collections/biye.html',
      image: "/image/biye_cover.png",
      desc: "illustation .book design .editorial",
      title: "MAMA食谱日记"
    },
    {
      href: '/collections/newsletter.html',
      image: "/image/newsletter_cover.png",
      desc: "book design .editorial",
      title: "NEWSLETTER 筑境手册"
    },
    {
      href: '/collections/activity.html',
      image: "/image/renyan_activity_cover.png",
      desc: "banner",
      title: "招贴&活动页"
    },
  ]
}

module.exports = CollectionList
