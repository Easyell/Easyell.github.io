import React from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'
require('./style.scss')



class AboutItem extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this)
  }
  buildTexts() {
    const {texts} = this.props
    let list = []
    texts.forEach(text => {
      list.push(
        <p className="about_text">{text}</p>
      )
    })
    return list
  }
  render() {
    const {title} = this.props
    return (
      <div id='AboutItem'>
        <p className="about_title">{title}</p>
        {this.buildTexts()}
      </div>
    )
  }
}

AboutItem.defaultProps = {
  texts:[
    "这是一个文字",
    "这是一个文字",
    "这是一个文字",
  ]
}

module.exports = AboutItem
