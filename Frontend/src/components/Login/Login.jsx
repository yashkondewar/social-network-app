import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="bg">
        <div className="formbody">
        <form classname="formlogin" onSubmit={submithandler}>
          <h3>Login Here</h3>
         
         
         
          <div className="inputbox">
            <div className="label">
            <label for="username">Username</label>
            </div>
            
            
            <input
              type="text"
              placeholder="Email or Phone"
              id="username"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }} required/>
            </div>
          
          
          <div className="inputbox">
            <div className="label">
            <label for="password">Password</label>
            </div>
            
            
            <input className="input"
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }} required
            />
          </div>


          <div className="logbut">
          <button type="submit" className="but">Login</button>
          <div className="or">
          <p>OR</p>
          </div>
          <div className="signup">
          <Link to="/register">Signup</Link>
          </div>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default Login;
