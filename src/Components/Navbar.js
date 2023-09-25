import React from "react";
import { NavLink } from "react-router-dom";
import Contactus from "./Contactus";

const Navbar = ({filterHandler}) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg  mynavbar">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <div className="container">
                  <NavLink className="navbar-brand" to={"/Home"}>
                    <img className="logo"
                      src="./Assets/rk-logo-4.jpg"
                      alt=""
                      width="65rem"
                      height="50rem"
                    ></img>
                  </NavLink>
                </div>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to={"/Men"} onClick={() => filterHandler("men's clothing")}>
                  Men{" "}
                </NavLink>
              </li>
              <li class="nav-item ">
                <NavLink className="nav-link" to={"/Women"}  onClick={() => filterHandler("women's clothing")} >
                  Women{" "}
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink className="nav-link" to={"/Kids"}  onClick={() => filterHandler("jewelery")}>
                  Jewelery{" "}
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink className="nav-link" to={"/Wishlist"} onClick={() => filterHandler("electronics")}>
                 
                  Electronics
                </NavLink>
              </li>
            </ul>
           
            <ul class="navbar-nav  mb-2 mb-lg-0">
            <li class="nav-item ">
                <NavLink className="nav-link" to={"/Contactus"}>
                Contact Us
                </NavLink>
              </li>


              <li class="nav-item ">
                <NavLink className="nav-link" to={"/profile"}>
                  <div className="mydiv">
                    
                    <img
                      src="./Assets/profile.png"
                      alt=""
                      width="35rem"
                      height="35rem"
                    ></img>{" "}
                    Profile{" "}
                  </div>
                </NavLink>
              </li>

              

              <li class="nav-item">
                <NavLink className="nav-link" to={"/Bag"}>
                  <img
                    src="./Assets/bag.jpeg"
                    alt=""
                    width="35rem"
                    height="35rem"
                  ></img>
                  Bag{" "}
                </NavLink>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
