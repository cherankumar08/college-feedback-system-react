import React, { useState } from "react";
import InstructorSurvey from "../../DeptWiseReport/instructorSurvey/Charts/InstructorSurvey";
import CampusFacilitiesChart from "../../CampusFacilitiesFeedback/Charts/CampusFacilitiesChart";

const ExtraSelection = () => {
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
          <option value="Component1">Extracurricular 1</option>
          <option value="Component2">Extracurricular 2</option>
          <option value="Component3">Extracurricular 3</option>
          <option value="Component4">Extracurricular 4</option>
          <option value="Component5">Extracurricular 5</option>
        </select>
      </div>
      {selectedComponent === "Component1" && (
        <CampusFacilitiesChart
          labels={[
            "Question-1",
            "Question-2",
            "Question-3",
            "Question-4",
            "Question-5",
          ]}
          data={[65, 59, 80, 81, 56]}
        />
      )}
      {selectedComponent === "Component2" && (
        <CampusFacilitiesChart
          labels={[
            "Question-1",
            "Question-2",
            "Question-3",
            "Question-4",
            "Question-5",
          ]}
          data={[65, 59, 80, 81, 56]}
        />
      )}
      {selectedComponent === "Component3" && (
        <CampusFacilitiesChart
          labels={[
            "Question-1",
            "Question-2",
            "Question-3",
            "Question-4",
            "Question-5",
          ]}
          data={[65, 59, 80, 81, 56]}
        />
      )}
      {selectedComponent === "Component4" && (
        <CampusFacilitiesChart
          labels={[
            "Question-1",
            "Question-2",
            "Question-3",
            "Question-4",
            "Question-5",
          ]}
          data={[65, 59, 80, 81, 56]}
        />
      )}
      {selectedComponent === "Component5" && (
        <CampusFacilitiesChart
          labels={[
            "Question-1",
            "Question-2",
            "Question-3",
            "Question-4",
            "Question-5",
          ]}
          data={[65, 59, 80, 81, 56]}
        />
      )}
    </div>
  );
};

export default ExtraSelection;
