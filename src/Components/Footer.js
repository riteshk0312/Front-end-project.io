import React from "react";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";




const Footer = () => {
  return (
    <>
      <div className="footer">
        <footer className="bg-dark">
          <div className="footer container-fluid">
            <div className="row mt-2">
              <div className="col-md-2 footer-cols ">
                <br />
                <h5 className="ms-5  footer footer1">About US</h5>
                <hr className="text-light" />
                <Link className="p-1 rounded ps-5 footer1" href="#">
                  Our Journey
                </Link>
                <br />
                <Link className="p-1 rounded ps-5 footer1" href="#">
                  Contact US
                </Link>
                <br />
                <Link className="p-1 rounded ps-5 footer1" href="#">
                  Our Journey
                </Link>
              </div>
              <div className="fdiv col-md-2 footer-col ">
                <br />
                <h5 className="text-center footer1">Customer Care</h5>
                <hr className="text-light" />
                <Link className="p-1 rounded p-5 footer1 " href="#">Track Order</Link><br />
                <Link className="p-1 rounded p-3 footer1" href="#">Shipping Policy</Link><br />
                <Link className="p-1 rounded p-3 footer1 " href="#">Terms & Conditions</Link><br />
                <Link className="p-1 rounded p-3  footer1" href="#">Terms Of Service</Link><br />
                <Link className="p-1 rounded p-5 footer1 " href="#">Refund Policy</Link>
              </div>
              <div className="col-md-2 footer-cols">
                <br />
                <h5 className="ms-5 footer1">Offer & Reward</h5>
                <hr className="text-light" />
                <Link className="p-1 rounded footer1" href="#">
                   Rewards Club
                </Link>
                <br />
              </div>
              <div className="col-md-2 footer-cols">
                <br />
                <h5 className="ms-5 footer1">Get In Touch</h5>
                <hr className="text-light " />
                <pre className="rounded footer1">
                  call: +91 8010384221 <br />
                  Email: riteshkashinathkalyanshetti03@gmail.com
                </pre>
              </div>

              <div className="col-md-2 footer-cols">
                <br />
                <h5 className="text-center footer1">Subsribe</h5>
                <hr className="text-light" />
                <input  type="text" placeholder="Email" value="" id="email" />
                <br />
                <br />
                <button className="btn btn-success footer1" type="submit">
                  Subsribe
                </button>
                <br />
              </div>
              <div className="col-md-2 footer-cols">
                <br />
                <h5 className="ms-5 footer1">Ratings</h5>
                <hr className="text-light" />
                <Ratings/>
                
              </div>
            </div>
          </div>
          <br />
          <br />
        </footer>
      </div>
    </>
  );
};

export default Footer;
