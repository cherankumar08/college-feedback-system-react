import React from "react";
import MainHead from "../MainHead";
import ExtracurricularFeedbackTable from "./ExtracurricularFeedbackTable"

const ExtracurricularFeedbackMain = () => {
  return (
    <div>
      <MainHead topic="Extracurricular Feedback Report" />
      <ExtracurricularFeedbackTable />
    </div>
  );
};

export default ExtracurricularFeedbackMain;
