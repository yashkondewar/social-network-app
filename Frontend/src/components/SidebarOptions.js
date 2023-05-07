import React from "react";
import "./css/SidebarOptions.css";
// import Button from "@mui/material/Button";
import Tech from "./img/Technology.jpg";
import lifestyle from "./img/lifestyle.jpg";
import food from "./img/food.jpg";
import echo from "./img/economics.jpg";
import politics from "./img/politics.jpg";
import sport from "./img/sport.jpg";
import { Link } from "react-router-dom";
// import Widget from "./Widget";

function SidebarOptions() {
  return (
    <>
      <div className="sidebarOptions">
        <Link to="/technology" style={{ textDecoration: "none" }}>
          <div className="sidebarOption">
            <img src={Tech} alt="" />
            <p>Technology</p>
          </div>
        </Link>

        <Link to="/lifestyle" style={{ textDecoration: "none" }}>
          <div className="sidebarOption">
            <img src={lifestyle} alt="" />
            <p>Lifestyle</p>
          </div>
        </Link>

        <Link to="/politics" style={{ textDecoration: "none" }}>
          <div className="sidebarOption">
            <img src={politics} alt="" />
            <p>Politics</p>
          </div>
        </Link>
        <Link to="/food" style={{ textDecoration: "none" }}>
          <div className="sidebarOption">
            <img src={food} alt="" />
            <p>Food</p>
          </div>
        </Link>

        <Link to="/economics" style={{ textDecoration: "none" }}>
          <div className="sidebarOption">
            <img src={echo} alt="" />
            <p>Economics</p>
          </div>
        </Link>

        <Link to="/sports" style={{ textDecoration: "none" }}>
          <div className="sidebarOption">
            <img src={sport} alt="" />
            <p>Sports</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SidebarOptions;
