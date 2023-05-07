import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"></link>

function Register() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const [name, setname] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
    <div className="bg">
      <div className="formbody">
        <form onSubmit={submithandler}>
          <h3>Register Here</h3>
       <div className="inputboxr">
          <input
          className="input"
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          />
</div>




          <div className="inputboxr">

          <input
          className="input"
            type="email"
            placeholder="Enter email"
            name="email"     
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />  
           </div>



<div className="inputboxr">

          <input className="input"
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            // pattern="[0-9a-fA-F]{4,10}"
            required
          /> </div>




<div className="inputboxr">

          <input
          className="input"
            type="password"
            placeholder="Confirm password"
            name="cpassword"
            value={cpassword}
            onChange={(e) =>{setcpassword(e.target.value);
               }}
            required
          />
           </div>

           <div className="logbut">
          <button type="submit" className="but">Register</button>
          <div className="or">
          <p>OR</p>
          </div>
          <div className="signup">
          <Link to="/login">Login</Link>
          </div>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default Register;
