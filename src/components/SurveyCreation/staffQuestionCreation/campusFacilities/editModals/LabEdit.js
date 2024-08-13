import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const LabEdit = (props) => {
  //   Laboratory States
  const [LabQn1, setLabQn1] = useState("");
  const [LabQn2, setLabQn2] = useState("");
  const [LabQn3, setLabQn3] = useState("");
  const [LabQn4, setLabQn4] = useState("");
  const [LabQn5, setLabQn5] = useState("");

  // useEffect to update state when props change
  useEffect(() => {
    // Check if props.questions exist and have length 5
    if (props.questions && props.questions.length === 5) {
      setLabQn1(props.questions[0]);
      setLabQn2(props.questions[1]);
      setLabQn3(props.questions[2]);
      setLabQn4(props.questions[3]);
      setLabQn5(props.questions[4]);
    }
  }, [props.questions]);

  const UpdateLab = () => {
    props.onHide();
  };
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Laboratory Feedbacks
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Question 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the Question"
                value={LabQn1}
                onChange={(e) => setLabQn1(e.target.value)}
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={(e) => UpdateLab(e)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LabEdit;
