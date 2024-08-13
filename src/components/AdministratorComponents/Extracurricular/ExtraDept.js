import React from "react";
import SurveyTitles from "../../SurveyTitles/SurveyTitles";
import TabsExtra from "./TabContents/TabsExtra";
import SurveyTitle from "../../SurveyTitle";

const ExtraDept = (props) => {
  return (
    <div>
      {/* <SurveyTitles
        SubjectName={props.SubName}
        SubjectFaculty={props.deptName}
      /> */}
      <SurveyTitle SurveyTitle="Extracurricular Activities Reports" />
      <TabsExtra />
    </div>
  );
};

export default ExtraDept;
