import React from "react";
import Aboutimg from "../images/About.png";
import AboutBackground from "../images/About_Background.png";

const About = () => {
  return (
    <>
      <div className="container-fluid mb-5  pt-lg-2" id="Aboutus">
        <div
          className="row align-items-center justify-content-lg-start justify-content-center"
          style={{ gap: 35, position: "relative" }}
        >
          <div className="col-lg-5 col-md-8 col-sm-7 col-10 ">
            <img src={Aboutimg} className="w-100" alt="" />
          </div>
          <div
            className="col-lg-5 col-md-10 col-sm-9"
            style={{ fontFamily: "Poppins" }}
          >
            <h5 className="text-warning">About</h5>
            <h1 className="display-5">
              Food is an important part of a balanced diet
            </h1>
            <p className="fs-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit blanditiis vel temporibus ea, sit minima deserunt?
              Harum debitis necessitatibus beatae iure ipsam. Optio autem veniam
              cupiditate ipsum adipisci pariatur quis.
            </p>
            <p className="fs-6">
              Harum debitis necessitatibus beatae iure ipsam. Optio autem veniam
              cupiditate ipsum adipisci pariatur quis.
            </p>
            <button
              className="btn btn-warning text-light ps-4 pe-4"
              style={{ borderRadius: "20px" }}
            >
              Learn More
            </button>
          </div>
          <div
            className="col-2 ps-0"
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              zIndex: "-1",
            }}
          >
            <img
              src={AboutBackground}
              className="w-100"
              style={{ height: "550px" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
