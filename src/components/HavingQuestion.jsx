import React from "react";

const HavingQuestion = () => {
  return (
    <>
      <div className="container mb-5 pt-5 pb-5">
        <div className="row justify-content-center" style={{ rowGap: "55px" }}>
          <div className="col-lg-8 col-12 d-flex flex-column align-items-center text-capitalize text-center">
            <h3 className="fs-1">Having Question in Mind?</h3>
            <h3 className="fs-1">Let us help you</h3>
          </div>
          <div className="col-lg-7 col-12  p-0">
            <div className="position-relative ">
              <input
                type="text"
                className="form-control ps-4 pe-4 shadow-lg"
                style={{ borderRadius: "40px", height: "80px" }}
                placeholder="yourmail@gmail.com"
              />
              <button
                className="position-absolute  end-0 btn btn-warning text-light ps-sm-5 pe-sm-5 pt-2 pb-2 me-3 "
                style={{
                  borderRadius: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HavingQuestion;
