import React, { useState } from "react";
import cursorpointer from "../images/CursorPointer.png";
import pickmeals from "../images/PickMeals.png";
import truckdelivery from "../images/TruckDelivery.png";

const Howitwork = () => {
  const [howitwork] = useState([
    {
      Icon: pickmeals,
      heading: "Pick Meals",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      Icon: cursorpointer,
      heading: "Choose How Often",
      paragraph: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      Icon: truckdelivery,
      heading: "Fast Deliveries",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ]);
  return (
    <>
      <div
        className="d-flex flex-column pt-5 mb-5"
        style={{ fontFamily: "Poppins", gap: "35px" }}
      >
        <div className="d-flex flex-column align-items-center text-center">
          <h4 className="fs-5 text-warning">Work</h4>
          <h1 className="text-capitalize mb-3">How it works</h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt{" "}
          </p>
          <p className="mb-0">magna non et elit. Dolor turpis molestie dui</p>
          <p>magnis facilisis at fringilla quam.</p>
        </div>
        <div className="container ">
          <div
            className="row justify-content-around ps-sm-0 pe-sm-0 ps-2 pe-2"
            style={{ rowGap: "30px" }}
          >
            {howitwork.map((element) => (
              <>
                <div
                  className="col-lg-3 col-md-5 col-12 shadow-lg rounded d-flex flex-column align-items-center justify-content-md-between justify-content-around how_it_work_box "
                  style={{ minHeight: "330px" }}
                >
                  <img
                    src={element.Icon}
                    // className="w-50"
                    style={{ width: "100px" }}
                    alt=""
                    srcset=""
                  />
                  <h4 className="text-center">{element.heading}</h4>
                  <p className="text-center">{element.paragraph}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Howitwork;
