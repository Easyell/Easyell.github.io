
import React from 'react'
import ReactDOM from 'react-dom'

import NavBar from '../../components/NavBar/index.jsx'

require('./style.scss')
class Home extends React.Component {
  render() {
    return (
      <div id="homeContainer">
        <NavBar current={0} ></NavBar>
        <div className="common_block main_container">
          <div className="container" >
            <img src="/image/home_main_text.png" className="main_text"></img>
            <img src="/image/home_smile.png" className="home_smile"></img>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Home />,
  document.querySelector('#topContainer')
);
