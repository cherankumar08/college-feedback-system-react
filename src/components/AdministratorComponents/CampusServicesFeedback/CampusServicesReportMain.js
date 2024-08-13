import React from "react";
import CampusFacilitiesTable from "./CampusFacilitiesReportTable";
import MainHead from "../MainHead";
import CampusServicesReportTable from "./CampusServicesReportTable"

const CampusFacilitiesReportMain = () => {
    
  return (
    <div>
      <MainHead topic="Campus Facilities Survey Report" />
      <CampusServicesReportTable/>
    </div>
  );
};

export default CampusFacilitiesReportMain;






