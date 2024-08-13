import React from "react";
import CreateSurvey from "./CreateSurvey";
import SurveyTitles from "../SurveyTitles/SurveyTitles";
import SelectSurevyType from "./SelectSurevyType";
import SelectSurveyFor from "./SelectSurveyFor";

const SurveyCreationFaculty = () => {
  const topic = [
    "Campus Facilities",
    "Campus Services",
    "Extracurricular Activites",
    "Survey on Suggestion and Improvement",
  ];
  const subSurvey = {
    "Campus Facilities": ["Library", "Laboratory", "Support Services"],
    "Campus Services": [
      "Academics",
      "Transportation",
      "Security And Services",
      "IT facilities",
      "Recreational",
    ],
    "Extracurricular Activites": ["Events", "Clubs", "Support Activities"],
    "Survey on Suggestion and Improvement": [
      "Infrastructre Development",
      "Academic Development",
    ],
  };

  return (
    <div>
      <div className="my-5">
        <SurveyTitles SubjectFaculty="Faculty" SubjectName="Survey Creation" />
      </div>
      <div className="shadow-effect mx-5">
        <SelectSurevyType topic={topic} subSurvey={subSurvey} />
        {/* <SelectSurveyFor section={section} dept={dept} /> */}
      </div>
      <CreateSurvey />
    </div>
  );
};

export default SurveyCreationFaculty;
