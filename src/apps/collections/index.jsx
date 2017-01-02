
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
        <div className="container" >
          <CollectionList />
        </div>
        <div id="foot">
          <p>
            All content designed by jiangyiyi at 2016<br />
            No reproduction without express promission<br />
            Developed by guoshencheng
          </p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <About />,
  document.querySelector('#topContainer')
);
