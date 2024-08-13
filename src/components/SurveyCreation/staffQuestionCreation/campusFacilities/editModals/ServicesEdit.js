import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const ServicesEdit = (props) => {
  //   Support Services States
  const [SupQn1, setSupQn1] = useState("");
  const [SupQn2, setSupQn2] = useState("");
  const [SupQn3, setSupQn3] = useState("");
  const [SupQn4, setSupQn4] = useState("");
  const [SupQn5, setSupQn5] = useState("");

  const UpdateServices = ()=>{
    props.onHide();
  }
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
            Support Services
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={(e) => UpdateServices(e)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ServicesEdit;
