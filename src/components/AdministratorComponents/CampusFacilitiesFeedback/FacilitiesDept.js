import React from "react";
import SurveyTitles from "../../SurveyTitles/SurveyTitles";
import TabsFacilities from "./TabContents/TabsFacilities";

const FacilitiesDept = (props) => {
  return (
    <div>
      <SurveyTitles
        SubjectName={props.SubName}
        SubjectFaculty={props.deptName}
      />
      <TabsFacilities />
    </div>
  );
};

export default FacilitiesDept;
