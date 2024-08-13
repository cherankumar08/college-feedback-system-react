import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AlertModals from "./AlertModals";
import CampusFacilitiesTables from "../editTables/CampusFacilitiesTables";
import addServicesQnToServer from "../../../../../Slice/staffServicesSlice";
import { useDispatch } from "react-redux";

const CampusFacilitiesFeedback = () => {
  const [showAlert, setShowAlert] = useState(false);

  const dispatch = useDispatch();

  // Setting the Libarry States
  const [LibQn1, setLibQn1] = useState("");
  const [LibQn2, setLibQn2] = useState("");
  const [LibQn3, setLibQn3] = useState("");
  const [LibQn4, setLibQn4] = useState("");
  const [LibQn5, setLibQn5] = useState("");

  //   Laboratory States
  const [LabQn1, setLab] = useState("");
  const [LabQn2, setLabQn2] = useState("");
  const [LabQn3, setLabQn3] = useState("");
  const [LabQn4, setLabQn4] = useState("");
  const [LabQn5, setLabQn5] = useState("");

  //   Support Services States
  const [SupQn1, setSupQn1] = useState("");
  const [SupQn2, setSupQn2] = useState("");
  const [SupQn3, setSupQn3] = useState("");
  const [SupQn4, setSupQn4] = useState("");
  const [SupQn5, setSupQn5] = useState("");

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  //   For the Publish Library
  const Publish = (e) => {
    e.preventDefault();
    // console.log(LibQn1, LibQn2, LibQn3, LibQn4, LibQn5);
    dispatch(addServicesQnToServer(LibQn1,LibQn2,LibQn3,LibQn4,LibQn5 ))
  };
  const PublishLab = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (
      LabQn1 === "" ||
      LabQn2 === "" ||
      LabQn3 === "" ||
      LabQn4 === "" ||
      LabQn5 === ""
    ) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  };

  const PublishServices = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  };

  return (
    <div>
      <Row className="justify-content-md-center justify-content-center">
        <Col xs lg="9">
          <Accordion defaultActiveKey="0">
            {/* Library */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h5>Library</h5>
              </Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Question 1</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the Question"
                      value={LibQn1}
                      onChange={(e) => setLibQn1(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Question 2</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the Question"
                      value={LibQn2}
                      onChange={(e) => setLibQn2(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Question 3</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the Question"
                      value={LibQn3}
                      onChange={(e) => setLibQn3(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Question 4</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the Question"
                      value={LibQn4}
                      onChange={(e) => setLibQn4(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Question 5</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the Question"
                      value={LibQn5}
                      onChange={(e) => setLibQn5(e.target.value)}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="button" // Change type to "button"
                    onClick={(e) => Publish(e)} // Pass event object "e" to Publish
                  >
                    Publish
                  </Button>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            {/* <AlertModals show={showAlert} onClose={handleCloseAlert} /> */}
            {/* Laboratory */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h5>Laboratory</h5>
              </Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Question 1</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the Question"
                      value={LabQn1}
                      onChange={(e) => setLab(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Question 2</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the Question"
                      value={LabQn2}
                      onChange={(e) => setLabQn2(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Question 3</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the Question"
                      value={LabQn3}
                      onChange={(e) => setLabQn3(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Question 4</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the Question"
                      value={LabQn4}
                      onChange={(e) => setLabQn4(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Question 5</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the Question"
                      value={LabQn5}
                      onChange={(e) => setLabQn5(e.target.value)}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => PublishLab(e)}
                  >
                    Publish
                  </Button>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            {/* <AlertModals show={showAlert} onClose={handleCloseAlert} /> */}
            {/* Support Services */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h5>Support Services</h5>
              </Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Question 1</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the Question"
                      value={SupQn1}
                      onChange={(e) => setSupQn1(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Question 2</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the Question"
                      value={SupQn2}
                      onChange={(e) => setSupQn2(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Question 3</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the Question"
                      value={SupQn3}
                      onChange={(e) => setSupQn3(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Question 4</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the Question"
                      value={SupQn4}
                      onChange={(e) => setSupQn4(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Question 5</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the Question"
                      value={SupQn5}
                      onChange={(e) => setSupQn5(e.target.value)}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => PublishServices(e)}
                  >
                    Publish
                  </Button>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            {/* <AlertModals show={showAlert} onClose={handleCloseAlert} /> */}
          </Accordion>
        </Col>
      </Row>

      <CampusFacilitiesTables />

      {/* Alert Modal */}
    </div>
  );
};

export default CampusFacilitiesFeedback;
