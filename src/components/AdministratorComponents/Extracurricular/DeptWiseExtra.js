import React from "react";
import SurveyTitles from "../../SurveyTitles/SurveyTitles";
import ExtraDept from "./ExtraDept";

const DeptWiseExtra = (props) => {
  return (
    <div>
      <SurveyTitles
        SubjectName={props.SubName}
        SubjectFaculty={props.deptName}
      />
      <ExtraDept />
    </div>
  );
};

export default DeptWiseExtra;
