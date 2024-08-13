import React from "react";
import SendMessageModal from "./SendMessageModal";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";

const SendMessageModalMain = ({
  isMessageModal,
  toggleMessageModal,
  StudentName,
}) => {
  return (
    <div>
      <Modal show={isMessageModal} onHide={toggleMessageModal}>
        <Modal.Header closeButton>
          <Modal.Title>Send Message Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Modal.Body>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleMessageModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SendMessageModalMain;
