import React from "react";
import Alert from "react-bootstrap/Alert";

function AlertModals({ show, onClose }) {
  return (
    <Alert show={show} variant="danger" onClose={onClose} dismissible>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>Please Fill out all the Questions</p>
    </Alert>
  );
}

export default AlertModals;
