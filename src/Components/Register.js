import React from "react";
import { useState } from "react";
import Footer from "./Footer";

const Register = (props) => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [name, setname] = useState("");

  const handleSubmit = (e) => {
    e.preventdefault();
    console.log(email);
  };

  return (
    
    <>
    <div id="box1"></div>

<div id="box2">

      <form className="form1" onSubmit={handleSubmit}>
        <label htmlFor="name"  className="button1">
          Full name
        </label><br/>


        <input
          
          className="button1"
          onchange={(e) => setname(e.target.value)}
          type="name"
          id="name"
          placeholder="Name"
        ></input><br/>

        <label for="email" className="button1">
          Email
        </label><br/>

        <input
          
          className="button1"
          onchange={(e) => setemail(e.target.value)}
          type="email"
          id="email"
          placeholder="youremail.com"
        ></input><br/>

        <label for="pass" className="button1">
          Password
        </label><br/>

        <input
          
          className="button1"
          onchange={(e) => setpass(e.target.value)}
          type="password"
          id="pass"
          placeholder="********"
        ></input><br/>

        <button className="btn btn-primary  m-1 " type="submit">
          Register
        </button>
        <button
       
       type="submit"
       onClick={() => props.onformswitch("profile")}
       className="btn  btn-primary padding-right"
     >
       Already have an account?Login here
     </button><br/>
      </form>
      {/* <button
       
        type="submit"
        onClick={() => props.onformswitch("profile")}
        className="button2"
      >
        Already have an account?Login here
      </button> */}

      </div>
      <div className="thediv">
      
      </div>
    </>
  );
};

export default Register;
