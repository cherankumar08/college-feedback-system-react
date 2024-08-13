import React from "react";
import SurveyTitles from "../../../SurveyTitles/SurveyTitles";
import TabsSuggestion from "./TabContents/TabsSuggestion";

const SuggestionDeptWise = (props) => {
  return (
    <div>
      <SurveyTitles
        SubjectName={props.SubName}
        SubjectFaculty={props.deptName}
      />
      <TabsSuggestion />
    </div>
  );
};

export default SuggestionDeptWise;
