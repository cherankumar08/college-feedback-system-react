import React from "react";
import ServicesFeedbackTable from "./ServicesFeedbackTable";
import MainHead from "../MainHead";

const ServicesFeedbackMain = () => {
  return (
    <div>
      <MainHead topic="Campus Services Survey Report" />
      <ServicesFeedbackTable />
    </div>
  );
};

export default ServicesFeedbackMain;
