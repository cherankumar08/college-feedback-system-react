import React, { useState } from "react";
import InstructorSurvey from "../../DeptWiseReport/instructorSurvey/Charts/InstructorSurvey";
import CampusFacilitiesChart from "../Charts/CampusFacilitiesChart"

const FacilitiesSelection = () => {
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
          <option value="Component1">Facilities 1</option>
          <option value="Component2">Facilities 2</option>
          <option value="Component3">Facilities 3</option>
          <option value="Component4">Facilities 4</option>
          <option value="Component5">Facilities 5</option>
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

export default FacilitiesSelection;
