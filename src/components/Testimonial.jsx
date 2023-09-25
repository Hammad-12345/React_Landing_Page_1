import React from "react";
import TestimonialImage from "../images/Ellipse1.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <>
      <div className="container mb-5 pt-5 pb-5">
        <div className="row" style={{ rowGap: "25px" }}>
          <div className="col-12 d-flex flex-column align-items-center text-center">
            <h5 className="text-warning">Testimonial</h5>
            <h2 className="text-capitalize mb-4">What they are saying</h2>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur. Non tincidunt{" "}
            </p>
            <p className="mb-0">magna non et elit. Dolor turpis molestie dui</p>
            <p>magnis facilisis at fringilla quam.</p>
          </div>
          <div className="col-12 ">
            <div className="row justify-content-center ps-sm-0 pe-sm-0 ps-2 pe-2">
              <div
                className="col-lg-6 col-md-8  pt-3 pb-3 rounded shadow-lg d-flex flex-column align-items-center"
                style={{ gap: "15px" }}
              >
                <img src={TestimonialImage} alt="" />
                <div className="d-flex flex-column align-items-center text-center">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt{" "}
                  </p>
                  <p className="mb-0">
                    magna non et elit. Dolor turpis molestie dui
                  </p>
                  <p>magnis facilisis at fringilla quam.</p>
                </div>

                <div
                  className="d-flex text-warning fs-5"
                  style={{ gap: "5px" }}
                >
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <h4>John Doe</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
