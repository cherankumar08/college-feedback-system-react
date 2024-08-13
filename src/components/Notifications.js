import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Notifications = ({ show, onHide }) => {
  return (
    <div>
      {/* Notification Modal */}
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p class="p-1">
            Your feedback matters! Share your thoughts now and help us enhance
            your learning experience. Click here to provide feedback.
          </p>
          <p class="p-1">
            Did you know? Your feedback drives positive change! Tap to share
            your insights and make a difference in your education journey.
          </p>
          <p class="p-1">
            Calling all students! Your opinions shape our future. Take a moment
            to provide valuable feedback on your courses and instructors today.
          </p>
          <p class="p-1">
            Seeking your input! Take a quick survey and let us know how we can
            better support you. Your feedback is crucial to our improvement
            efforts
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="" className="bg-close" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Notification Modal */}
    </div>
  );
};

export default Notifications;
