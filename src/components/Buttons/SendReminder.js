import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ReminderSuccessful from "./ReminderSuccessful";

const SendReminder = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div>
      <Button variant="secondary" onClick={handleShowModal}>
        <i className="bi bi-send-fill"></i>
      </Button>
      <ReminderSuccessful show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default SendReminder;
