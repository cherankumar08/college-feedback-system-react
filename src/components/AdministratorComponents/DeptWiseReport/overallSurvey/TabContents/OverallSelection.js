import React, { useState } from "react";
import OverallSurvey from "../Charts/OverallSurvey";

const OverallSelection = () => {
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
          <option value="Component1">Overall 1</option>
          <option value="Component2">Overall 2</option>
          <option value="Component3">Overall 3</option>
          <option value="Component4">Overall 4</option>
          <option value="Component5">Overall 5</option>
        </select>
      </div>
      {selectedComponent === "Component1" && (
        <OverallSurvey
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
        <OverallSurvey
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
        <OverallSurvey
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
        <OverallSurvey
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
        <OverallSurvey
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

export default OverallSelection;
