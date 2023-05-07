import React from "react";
import QuoraHeader from "./QuoraHeader";
import "./css/Quora.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";
const Quora = () => {
  return (
    <div className="quora">
      <QuoraHeader />
      <div className="quora__contents">
        <div className="quora__content">
          <Sidebar />
          <Feed />
          <div className="widget" style={{display:"block"}}>
          <Widget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quora;
