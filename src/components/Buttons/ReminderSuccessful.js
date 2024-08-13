import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import tick from "../../static/assets/GIFS/tick.gif";

function ReminderSuccessful({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Sent Notifications
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body d-flex justify-content-center">
            <p className="h5"><img src={tick} alt="" className=""/>Reminder Sent Successfully</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" className="d-flex justify-content-center" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReminderSuccessful;



