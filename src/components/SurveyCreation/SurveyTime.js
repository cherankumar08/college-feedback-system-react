import React from "react";

const SurveyTime = () => {
  const currentDate = new Date().toISOString().split("T")[0]; // Get today's date in ISO format

  return (
    <div className="ms-5 d-flex justify-content-center">
      <div className="d-flex flex-column align-items-center justify-content-center my-3 col-5">
        <h5 htmlFor="" className="required label-date">
          Select the Start Time
        </h5>
        <div className="d-flex flex-column col-12">
          <input
            type="date"
            className="form-control col-5 ms-5 form-control date-width mx-3 select-type"
            min={currentDate} // Set min attribute to today's date
          />
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center my-3 col-5 ">
        <h5 htmlFor="" className="required label-date">
          Select the End Time
        </h5>
        <div className="d-flex flex-column col-12">
          <input
            type="date"
            className="form-control col-5 ms-5 form-control mx-3 date-width select-type"
            min={currentDate} // Set min attribute to today's date
          />
        </div>
      </div>
    </div>
  );
};

export default SurveyTime;
