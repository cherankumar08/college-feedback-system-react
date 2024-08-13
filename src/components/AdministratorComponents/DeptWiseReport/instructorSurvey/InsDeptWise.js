import React from "react";
import SurveyTitles from "../../../SurveyTitles/SurveyTitles";
import InstructorTable from "./TabContents/InstructorTable";
import TabsInstructor from "./TabContents/TabsInstructor";

const InsDeptWise = (props) => {
  return (
    <div>
      <SurveyTitles
        SubjectName={props.SubName}
        SubjectFaculty={props.deptName}
      />
      <TabsInstructor />
    </div>
  );
};

export default InsDeptWise;
