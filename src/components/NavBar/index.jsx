import React from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'
require('./style.scss')


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this)
  }
  render() {
    const {title, link} = this.props
    return (
      <div id='NavBar'>
        <img className="dice_icon" src="/image/dice_icon.png"></img>
        <div className="links_container">
          <a className="link_icon" href='http://www.jianshu.com/users/b690ec0d04ef' >
            HOME
          </a>
          <span>/</span>
          <a className="link_icon" href='https://github.com/guoshencheng' >
            ABOUT
          </a>
          <span>/</span>
          <a className="link_icon" href='http://www.weibo.com/u/2876174214' >
            COLLECTIONS
          </a>
          <span>/</span>
        </div>
      </div>
    )
  }
}

module.exports = NavBar
