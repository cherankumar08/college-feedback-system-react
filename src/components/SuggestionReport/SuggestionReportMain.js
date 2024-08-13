import React from "react";
import MainHead from "../AdministratorComponents/MainHead";
import SuggestionReportTable from "./SuggestionReportTable";

const SuggestionReportMain = () => {
  return (
    <div>
      <MainHead topic="Survey on Suggestion and Improvement Reports" />
      <SuggestionReportTable />
    </div>
  );
};

export default SuggestionReportMain;
