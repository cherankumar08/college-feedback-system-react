import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SurveyTitle from "../../../../SurveyTitle";
import SurveyTitles from "../../../../SurveyTitles/SurveyTitles";
import Button from "react-bootstrap/Button";
import TableLab from "./TableLab";
import TableServices from "./TableServices";
import TableLibrary from "./TableLibrary";

function CampusFacilitiesTables() {
  return (
    <>
      <SurveyTitle SurveyTitle="Library" />
      <TableLibrary />

      <SurveyTitle SurveyTitle="Laboratory" />

      <TableLab />

      <SurveyTitle SurveyTitle="Support Services" />

      <TableServices />
    </>
  );
}

export default CampusFacilitiesTables;
