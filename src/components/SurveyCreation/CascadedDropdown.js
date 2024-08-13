import React, { useState } from "react";

const SurveyOptions = {
  Student: {
    "Course Survey Feedback": [
      "Computer Networks",
      "Distributed Systems",
      "Internet Programming",
      "Compiler Design",
      "Mobile Computing",
    ],
    "Instructor Survey Feedback": [
      "Instructor-1",
      "Instructor-2",
      "Instructor-3",
      "Instructor-4",
      "Instructor-5",
    ],
    "Campus Facilities Feedback Survey": [
      "Library",
      "Laboratory",
      "Support Services",
    ],
    "Campus Services Feedback Survey": [
      "Academics",
      "Transportation",
      "Security And Services",
      "IT facilities",
      "Recreational",
    ],
    "extracurricular Activities Feedback Survey": [
      "Events",
      "Clubs",
      "Support Activities",
    ],
    "Overall Experiences Feedback Survey": ["Overall", "Campus"],
    "Anonymous Feedback Survey": ["Anonymous"],
  },
  Faculty: {
    "Campus Facilities Feedback Survey": [
      "Library",
      "Laboratory",
      "Support Services",
    ],
    "Campus Services Feedback Survey": [
      "Academics",
      "Transportation",
      "Security And Services",
      "IT facilities",
      "Recreational",
    ],
    "extracurricular Activities Feedback Survey": [
      "Events",
      "Clubs",
      "Support Activities",
    ],
    "Overall Experiences Feedback Survey": ["Overall", "Campus"],
  },
  Staffs: {
    "Campus Facilities Feedback Survey": [
      "Library",
      "Laboratory",
      "Support Services",
    ],
    "Campus Services Feedback Survey": [
      "Academics",
      "Transportation",
      "Security And Services",
      "IT facilities",
      "Recreational",
    ],
    "extracurricular Activities Feedback Survey": [
      "Events",
      "Clubs",
      "Support Activities",
    ],
    "Overall Experiences Feedback Survey": ["Overall", "Campus"],
  },
};

function CascadingDropdown() {
  const [userType, setUserType] = useState("");
  const [mainSurvey, setMainSurvey] = useState("");
  const [subSurvey, setSubSurvey] = useState("");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setMainSurvey("");
    setSubSurvey("");
  };

  const handleMainSurveyChange = (e) => {
    setMainSurvey(e.target.value);
    setSubSurvey("");
  };

  return (
    <div className="d-flex justify-content-center flex-sm-column m-5">
      <div className="col col-2 mt-5 me-5 col-sm-12">
        <label htmlFor="SelectUser" className="fw-bold">
          Select the User
        </label>
        <select
          className="form-select"
          id="SelectUser"
          value={userType}
          onChange={handleUserTypeChange}
        >
          <option value="">Select the User Type</option>
          {Object.keys(SurveyOptions).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="col col-2 mt-5 me-5 col-sm-12">
        <label htmlFor="SelectSurvey" className="fw-bold">
          Select the Survey Type
        </label>
        <select
          className="form-select"
          id="SelectSurvey"
          value={mainSurvey}
          onChange={handleMainSurveyChange}
          disabled={!userType}
        >
          <option value="">Survey Type</option>
          {userType &&
            SurveyOptions[userType] &&
            Object.keys(SurveyOptions[userType]).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
      </div>
      <div className="col col-2 mt-5 me-5 col-sm-12">
        <label htmlFor="SelectSubSurvey" className="fw-bold">
          Sub-Survey Type
        </label>
        <select
          className="form-select"
          id="SelectSubSurvey"
          value={subSurvey}
          disabled={!mainSurvey}
        >
          <option value="">Sub Type</option>
          {mainSurvey &&
            SurveyOptions[userType][mainSurvey] &&
            SurveyOptions[userType][mainSurvey].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default CascadingDropdown;
