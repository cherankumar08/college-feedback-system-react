import React from "react";
import SurveyTitles from "../../../SurveyTitles/SurveyTitles";
import TabContentForAIDS from "./TabContent/TabContentForAIDS";
import SubjectSelection from "./TabContent/courseSurveyAIDS/subjects/SubjectSelection";

const DeptSubReport = (props) => {
  return (
    <div>
      <SurveyTitles
        SubjectName={props.SubName}
        SubjectFaculty={props.deptName}
      />
      <TabContentForAIDS />
    </div>
  );
};

export default DeptSubReport;
