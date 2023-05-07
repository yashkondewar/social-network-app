import React from "react";
import Avatar from "@mui/material/Avatar";
import Input from "@mui/material/Input";
import user from "./img/user.jpg";
import "./css/QuoraBox.css";
function QuoraBox() {
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar src={user} />
        <Input
         style={{
          color:"white"
        }}
          className="Input"
          type="text"
          placeholder="What is your question?"
        />
      </div>
    </div>
  );
}

export default QuoraBox;
