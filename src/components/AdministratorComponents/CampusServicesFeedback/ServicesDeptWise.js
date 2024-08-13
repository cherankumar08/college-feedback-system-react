import React from "react";
import SurveyTitles from "../../SurveyTitles/SurveyTitles";
import TabsServices from "./TabContents/TabsServices";

const ServicesDeptWise = (props) => {
  return (
    <div>
      <SurveyTitles
        SubjectName={props.SubName}
        SubjectFaculty={props.deptName}
      />
      <TabsServices />
    </div>
  );
};

export default ServicesDeptWise;
