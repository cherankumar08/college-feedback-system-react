import React, { useState } from "react";
import OverallSurvey from "../../overallSurvey/Charts/OverallSurvey";

const SuggestionSelection = () => {
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
          <option value="Component1">Suggestion 1</option>
          <option value="Component2">Suggestion 2</option>
          <option value="Component3">Suggestion 3</option>
          <option value="Component4">Suggestion 4</option>
          <option value="Component5">Suggestion 5</option>
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

export default SuggestionSelection;
