import React from "react";
import SurveyTitle from "../../../SurveyTitle";
import { Container } from "react-bootstrap";
import CampusFacilitiesFeedback from "./Accordians/CampusFacilitiesFeedback";

const StaffSurveyCreation = () => {
  return (
    <Container className="">
      <SurveyTitle SurveyTitle="Staff Survey Creation" />
      <CampusFacilitiesFeedback />
    </Container>
  );
};

export default StaffSurveyCreation;
