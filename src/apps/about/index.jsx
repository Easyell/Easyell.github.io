
import React from 'react'
import ReactDOM from 'react-dom'

import NavBar from '../../components/NavBar/index.jsx'
import AboutItem from '../../components/AboutItem/index.jsx'

require('./style.scss')
class About extends React.Component {
  buildAboutList() {
    const {abouts} = this.props
    let list = []
    abouts.forEach(item => {
      list.push(
        <AboutItem title={item.title} texts={item.texts} ></AboutItem>
      )
    })
    return (
      <div className="about_list">
        {list}
      </div>
    )
  }
  render() {
    return (
      <div id="homeContainer">
        <NavBar current={1} ></NavBar>
        <div className="common_block main_container">
          <div className="container" >
            <img src="/image/my_face.png" className="my_face"></img>
            {this.buildAboutList()}
          </div>
        </div>
      </div>
    )
  }
}

About.defaultProps = {
  abouts: [
    {
      title: "ABOUT",
      texts: ["江依艺", "1993.12.14"]
    }, {
      title: "EDUCATION",
      texts: ["本科", "南京理工大学设计与艺术学院"]
    }, {
      title: "CONTACT",
      texts: ["Tell: 18258282903", "Email: 32745072@qq.com"]
    }, {
      title: "WORK",
      texts: ["2016.04 - 2016.12", "杭州自心有限公司"]
    }
  ]
}

ReactDOM.render(
  <About />,
  document.querySelector('#topContainer')
);
