import React from "react";
import { useState } from "react";
import Footer from "./Footer";

const Profile = (props) => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const handleSubmit = (e) => {
    e.preventdefault();
    // console.log(email);
  };

  return (
    <>
      <div id="box2">
        <form className="form1" onSubmit={handleSubmit}>
          <label htmlFor="email" className="button1">
            Email
          </label>
          <br />
          <input
            className="button1"
            onchange={(e) => setemail(e.target.value)}
            type="email"
            id="email"
            placeholder="youremail.com"
          ></input>{" "}
          <br />
          <label htmlFor="pass" className="button1">
            Password
          </label>
          <br />
          <input
            className="button1"
            onchange={(e) => setpass(e.target.value)}
            type="password"
            id="pass"
            placeholder="********"
          ></input>
          <br />
          <br />
          <button className="btn btn-primary  m-1" type="submit">
            Login
          </button>
          <button
            className="btn btn-primary  "
            type="submit"
            onClick={() => props.onformswitch("register")}
          >
            Don't have an account ? Register here
          </button>
        </form>
      </div>
      <div className="thediv">
      
      </div>
    </>
  );
};

export default Profile;
