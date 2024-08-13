import React, { useState } from "react";

const SelectSurveyFor = ({ dept, section }) => {
  const [selectDept, setselectDept] = useState("");
  const [selectSection, setselectSection] = useState("");

  const handledeptChange = (e) => {
    const selectDept = e.target.value;
    setselectDept(selectDept);
    setselectSection("");
  };

  const handlesectionChange = (e) => {
    setselectSection(e.target.value);
  };

  return (
    <div className="mx-5">
      {/* <h2>Please select the Survey Type</h2> */}
      <div className="d-flex justify-content-center my-3 col-12 ">
        <div className="border-check d-flex flex-column p-3">
          <h5 htmlFor="" className="required">
            Select the Department
          </h5>
          <div className="d-flex flex-column">
            <select
              onChange={handledeptChange}
              value={selectDept}
              className="form-control col-12 mx-3 select-type"
            >
              <option value="" disabled>
                Select the Department
              </option>
              {dept.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="d-flex flex-column border-check p-3">
          <h5 htmlFor="" className="required">
            Select the Section
          </h5>
          <div className="d-flex flex-column col-12">
            <select
              value={selectSection}
              disabled={selectDept === "" || section[selectDept].length === 0}
              onChange={handlesectionChange}
              className="form-control col-12 mx-3 select-type"
            >
              <option value="" disabled>
                Select The Section
              </option>
              {section[selectDept] &&
                section[selectDept].map((section) => (
                  <option key={section} value={section}>
                    {section}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectSurveyFor;
