import React from "react";
import SurveyTitles from "../../../SurveyTitles/SurveyTitles";
import TabsOverall from "./TabContents/TabsOverall";

const OverallDeptWise = (props) => {
  return (
    <div>
      <SurveyTitles
        SubjectName={props.SubName}
        SubjectFaculty={props.deptName}
      />
      <TabsOverall />
    </div>
  );
};

export default OverallDeptWise;
