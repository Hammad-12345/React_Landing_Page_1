import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="shadow">
        <div className="container pt-5 ">
          <div className="row" style={{ rowGap: "35px" }}>
            <div className="col-lg-3 col-md-6  d-flex flex-column pt-3 pb-3">
              <h3 className="text-uppercase">Foodie</h3>
              <ul className="list-group flex-row fs-3">
                <li className="list-group-item border-0 ps-2 pe-2 text-primary">
                  <AiOutlineTwitter />
                </li>
                <li
                  className="list-group-item border-0 ps-2 pe-2"
                  style={{ color: "#0077B5" }}
                >
                  <AiFillLinkedin />
                </li>
                <li className="list-group-item border-0 ps-2 pe-2 text-danger">
                  <AiFillYoutube />
                </li>
                <li
                  className="list-group-item border-0 ps-2 pe-2"
                  style={{ color: "blue" }}
                >
                  <FaFacebookF />
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-lg-center">
              <ul className="list-group fw-bold">
                <li className="list-group-item border-0 ">Quality</li>
                <li className="list-group-item border-0 ">Help</li>
                <li className="list-group-item border-0 ">Share</li>
                <li className="list-group-item border-0 ">Carrers</li>
                <li className="list-group-item border-0 ">Work</li>
                <li className="list-group-item border-0 ">Testimonials</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <ul className="list-group fw-bold">
                <li className="list-group-item border-0 ">244-5333-7783</li>
                <li className="list-group-item border-0 ">hello@food.com</li>
                <li className="list-group-item border-0 ">press@food.com</li>
                <li className="list-group-item border-0 ">contact@food.com</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 fw-bold">
              <ul className="list-group">
                <li className="list-group-item border-0 ">
                  Terms & Conditions
                </li>
                <li className="list-group-item border-0 ">Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
