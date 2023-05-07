import React from 'react'
import Sidebar from '../Sidebar.js'
import Widget from '../Widget.js'
import QuoraHeader from '../QuoraHeader.js'
import "../css/Quora.css";
import Feed from "../Feed.js"


function Sports() {
  return (
    <div className="quora">
    <QuoraHeader/>
    <div className="quora__contents">
      <div className="quora__content">
        <Sidebar />
        <Feed/>
        <Widget/>
      </div>
    </div>
  </div> )
}

export default Sports