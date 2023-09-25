import React from "react";

const Navbar = () => {
  return (
    <ul
      style={{
        listStyle: "none",
        gap: 35,
        fontFamily: "Poppins",
        // border: "1px solid black",
        // height: "100%",
        marginBottom: "0px",
      }}
      className="d-flex justify-content-center fw-bold align-items-center"
    >
      <li>Home</li>
      <li>About</li>
      <li>Testimonials</li>
      <li>Contact</li>
    </ul>
  );
};

export default Navbar;
