import React from "react";
import bannerimage from "../images/bannerimg.png";
import { BsArrowRightShort } from "react-icons/bs";

const Banner = () => {
  return (
    <>
      <div className="container mb-lg-5 mb-4 pt-lg-3  pt-5">
        <div
          className="row align-items-center justify-content-center"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="col-lg-6 ">
            <h1 className="display-4">
              Your Favourite Food Delivered Hot & Fresh
            </h1>
            <p className="fs-5">
              Healthy switcher chef do all the prep work, like peeding, chooping
              & marinating, so you can cook a fresh food
            </p>
            <button
              className="btn btn-warning text-light ps-4 pe-4"
              style={{ borderRadius: "20px" }}
            >
              Order Now <BsArrowRightShort className="fs-4" />
            </button>
          </div>
          <div className="col-lg-6 col-md-11 col-12">
            <img src={bannerimage} className="w-100" alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
