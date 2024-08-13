import React from "react";
import InstructorSurevyReportTable from "./InstructorSurevyReportTable";
import MainHead from "../MainHead";
import DynamicReportTable from "../../../Table/DynamicReportTable";

const InstructorSurveyReportMain = () => {
  return (
    <div>
      <MainHead topic="Instructor Survey Reports" />
      <InstructorSurevyReportTable />
    </div>
  );
};

export default InstructorSurveyReportMain;
