
import React from 'react'
import ReactDOM from 'react-dom'

import NavBar from '../../components/NavBar/index.jsx'
import CollectionList from '../../components/CollectionList/index.jsx'

require('./style.scss')
class About extends React.Component {
  render() {
    return (
      <div id="homeContainer">
        <NavBar current={2} ></NavBar>
        <div className="common_block main_container">
          <div className="container" >
            <CollectionList />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <About />,
  document.querySelector('#topContainer')
);
