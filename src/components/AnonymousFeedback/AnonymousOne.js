import React from "react";
import "../Buttons/SubmissionButton";
import SurveyTitles from "../SurveyTitles/SurveyTitles";
import SubmissionButton from "../Buttons/SubmissionButton";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Getting the QuestionNumbers,Question,Options,Labels

const AnonymousOne = () => {
  return (
    <div>
      <SurveyTitles SubjectName="Anonymous Feedback" SubjectFaculty="" />

      <Row className="justify-content-md-center mt-5">
        <Col>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h4>Things you want to tell us Anonymously</h4>
              </Accordion.Header>
              <Accordion.Body>
                <textarea
                  name=""
                  id=""
                  cols="50"
                  rows="10"
                  className="ps-3"
                ></textarea>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      <SubmissionButton />
    </div>
  );
};

export default AnonymousOne;
