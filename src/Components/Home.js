import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import Productcard from "./Productcard";


const Home = ({ data, filterHandler }) => {

  const{additem}=useCart();

  return (
    <>
      {/* Carousel Start */}
      <div className="containers ">
        <h1>Welcome to RK store</h1>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
           
          </div>
          <div className="carousel-inner">
            <div className="carousel-item  active iscarousel">
              <Link to={"/Men"}>
                <img
                  src="./Assets/men.jpeg"
                  className="d-block w-100"
                  alt="..."
                />
              </Link>
              <div className="carousel-caption d-none d-md-block mycarousel">
                <h5>Men Clothing</h5>
                <p>Select your latest trend in Men Clothing.</p>
              </div>
            </div>
            <div className="carousel-item iscarousel">
              
              <Link to={"/Women"}>
                <img
                  src="./Assets/carousel2.jpeg"
                  className="d-block w-100"
                  alt="..."
                />
              </Link>
              <div className="carousel-caption d-none d-md-block mycarousel">
                <h5>Women Clothing</h5>
                <p>Select your latest trend in Women Clothing.</p>
              </div>
            </div>
            <div className="carousel-item iscarousel">
              <Link to={"/Kids"}>
                <img
                  src="./Assets/jewelery.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </Link>
              <div className="carousel-caption d-none d-md-block mycarousel">
                <h5>Jewellery</h5>
                <p>Select your latest trend in Jewellery.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* carousel end */}

      {/* card start */}

      <div className="thecard">
        <div className="container-fluid mycard1 ">
        <h1>Products</h1>
          
          <div className="row ">
            
            
           
            {data.map((cval,index) => {
              return (
                <>
                <Productcard 
                id = {cval.id} 
                title={cval.title}
                image={cval.image}
                price={cval.price}
                item={cval}
                />
                </>
              );
            })}
          </div>
        </div>
      </div>
      {/* card end */}
    </>
  );
};

export default Home;
