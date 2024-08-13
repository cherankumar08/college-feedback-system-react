import React, { useState } from "react";
import InstructorSurvey from "../Charts/InstructorSurvey";

const InstructorSelection = () => {
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
          <option value="Component1">Instructor 1</option>
          <option value="Component2">Instructor 2</option>
          <option value="Component3">Instructor 3</option>
          <option value="Component4">Instructor 4</option>
          <option value="Component5">Instructor 5</option>
        </select>
      </div>
      {selectedComponent === "Component1" && (
        <InstructorSurvey
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
        <InstructorSurvey
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
        <InstructorSurvey
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
        <InstructorSurvey
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
        <InstructorSurvey
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

export default InstructorSelection;
