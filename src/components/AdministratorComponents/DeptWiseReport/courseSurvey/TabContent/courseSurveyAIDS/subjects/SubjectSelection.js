import React, { useState } from "react";
import CourseReportAIDSGraphSubjectOne from "./CourseReportAIDSGraphSubjectOne";
import CourseReportAIDSGraphSubjectTwo from "./CourseReportAIDSGraphSubjectTwo";
import CourseReportAIDSGraphSubjectThree from "./CourseReportAIDSGraphSubjectThree";
import CourseReportAIDSGraphSubjectFour from "./CourseReportAIDSGraphSubjectFour";
import CourseReportAIDSGraphSubjectFive from "./CourseReportAIDSGraphSubjectFive";

const SubjectSelection = () => {
  const [selectedComponent, setSelectedComponent] = useState("Component1");

  const handleChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <select
          value={selectedComponent}
          onChange={handleChange}
          className="form-control col-5"
        >
          <option disabled>Select a Component</option>
          <option value="Component1">Subject 1</option>
          <option value="Component2">Subject 2</option>
          <option value="Component3">Subject 3</option>
          <option value="Component4">Subject 4</option>
          <option value="Component5">Subject 5</option>
        </select>
      </div>
      {selectedComponent === "Component1" && (
        <CourseReportAIDSGraphSubjectOne />
      )}
      {selectedComponent === "Component2" && (
        <CourseReportAIDSGraphSubjectTwo />
      )}
      {selectedComponent === "Component3" && (
        <CourseReportAIDSGraphSubjectThree />
      )}
      {selectedComponent === "Component4" && (
        <CourseReportAIDSGraphSubjectFour />
      )}
      {selectedComponent === "Component5" && (
        <CourseReportAIDSGraphSubjectFive />
      )}
    </div>
  );
};

export default SubjectSelection;
