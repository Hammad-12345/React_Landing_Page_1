import React, { useState } from "react";
import Navbar from "./Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import "./Header.css";

const Header = () => {
  const [OpenSmallNav, updatesmallnavbar] = useState(false);
  const OpenNavSmallDevice = () => {
    if (OpenSmallNav) {
      updatesmallnavbar(false);
    } else {
      updatesmallnavbar(true);
    }
  };
  const mountedStyle = "inAnimation 0.5s ease-in forwards";
  const unmountedStyle = "outAnimation 1s ease-out forwards";
  return (
    <>
      <div
        className="container"
        style={{ position: "relative", zIndex: 1, marginBottom: "45px" }}
      >
        <div
          className="row pt-lg-4 pb-lg-4 pt-2 pb-2 align-items-center "
          style={{ position: "relative" }}
        >
          <div
            className="col-2 text-uppercase text-warning  fw-bold "
            style={{ fontSize: "26px", fontFamily: "Reem Kufi" }}
          >
            Foodies
          </div>

          <div className="col-6 d-lg-block d-none  ps-0 pe-0">
            {" "}
            <Navbar />
          </div>

          <div
            className="col-4   d-none  d-lg-flex align-items-center  justify-content-end  "
            style={{ fontFamily: "Poppins", gap: 15 }}
          >
            <AiOutlineShoppingCart className="fs-4 " />
            <button className="ps-4 pe-4 btn btn-light ">Booking Now</button>
          </div>

          <div className="col-10 d-lg-none d-flex justify-content-end">
            <BsList className="fs-2" onClick={OpenNavSmallDevice} />
          </div>

          {OpenSmallNav ? (
            <>
              <div
                className="d-lg-none"
                style={{
                  position: "absolute",
                  bottom: "-200px",
                  backgroundColor: "white",
                  transform: "scaleY(0)",
                  transformOrigin: "0 0",
                  animation: OpenSmallNav
                    ? `${mountedStyle}`
                    : `${unmountedStyle}`,
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    gap: 35,
                    fontFamily: "Poppins",
                    // border: "1px solid black",
                    // height: "100%",
                    marginBottom: "0px",
                  }}
                  className="d-flex justify-content-center flex-column fw-bold align-items-center"
                >
                  <li>Home</li>
                  <li>About</li>
                  <li>Testimonials</li>
                  <li>Contact</li>
                </ul>
              </div>
            </>
          ) : null}
        </div>
      </div>

      <div
        style={{
          width: "650px",
          height: "550px",
          position: "absolute",
          top: "0px",
          right: "0px",
          borderRadius: "420px 0px 0px 375px",
          backgroundColor: "orange",
        }}
      >
        {" "}
      </div>
    </>
  );
};

export default Header;
