import React from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'
require('./style.scss')



class NavBar extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this)
  }
  buildTitles() {
    const {titles, current} = this.props
    var list = []
    titles.forEach((title, index)=> {
      let classString = index == current ? "link_icon selected" : "link_icon"
      list.push(
        <a className={classString} href={title.href}>{title.text}</a>
      )
      list.push(
        <span>/</span>
      )
    })
    return list
  }
  render() {
    return (
      <div id='NavBar'>
        <img className="dice_icon" src="/image/dice_icon.png"></img>
        <div className="links_container">
          {this.buildTitles()}
        </div>
      </div>
    )
  }
}

NavBar.defaultProps = {
  titles:[
    {
      href: '/',
      text: "HOME"
    },
    {
      href: '/about.html',
      text: "ABOUT"
    },
    {
      href: '/collections.html',
      text: "COLLECTIONS"
    },
  ]
}

module.exports = NavBar
