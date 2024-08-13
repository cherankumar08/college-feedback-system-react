import React, { useState } from "react";

const SelectSurveyType = ({ topic, subSurvey }) => {
  const [selectedSurveyTopic, setselectedSurveyTopic] = useState("");
  const [selectedSubSurvey, setselectedSubSurvey] = useState("");

  const handletopicChange = (e) => {
    const selectedSurveyTopic = e.target.value;
    setselectedSurveyTopic(selectedSurveyTopic);
    setselectedSubSurvey("");
  };

  const handleSubSurveyChange = (e) => {
    setselectedSubSurvey(e.target.value);
  };

  return (
    <div className="mx-5">
      <h2>Please select the Survey Type</h2>
      <div className="d-flex justify-content-center my-3 col-12 ">
        <div className="border-check d-flex flex-column p-3">
          <h5 htmlFor="" className="required">
            Select the Main Survey Type
          </h5>
          <div className="d-flex flex-column">
            <select
              onChange={handletopicChange}
              value={selectedSurveyTopic}
              className="form-control col-12 mx-3 select-type"
            >
              <option value="" disabled>
                Select Survey Type
              </option>
              {topic.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="d-flex flex-column border-check p-3">
          <h5 htmlFor="" className="required">
            Select the Sub Survey Type
          </h5>
          <div className="d-flex flex-column col-12">
            <select
              value={selectedSubSurvey}
              disabled={
                selectedSurveyTopic === "" ||
                subSurvey[selectedSurveyTopic].length === 0
              }
              onChange={handleSubSurveyChange}
              className="form-control col-12 mx-3 select-type"
            >
              <option value="" disabled>
                Select Sub-Survey Type
              </option>
              {subSurvey[selectedSurveyTopic] &&
                subSurvey[selectedSurveyTopic].map((subSurvey) => (
                  <option key={subSurvey} value={subSurvey}>
                    {subSurvey}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectSurveyType;
