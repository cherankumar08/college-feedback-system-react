import React from "react";
import SurveyTitles from "../../../SurveyTitles/SurveyTitles";
import TabContentForAIDS from "./TabContent/TabContentForAIDS";
import SubjectSelection from "./TabContent/courseSurveyAIDS/subjects/SubjectSelection";

const CourseSurveyAIDS = () => {
  return (
    <div>
      <SurveyTitles
        SubjectName="Course Survey Report"
        SubjectFaculty="Artificial Intelligence And Data Science"
      />
      <TabContentForAIDS />
    </div>
  );
};

export default CourseSurveyAIDS;
