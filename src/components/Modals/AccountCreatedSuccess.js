import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AccountCreatedSuccess({ show, onHide }) {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Account Created Successfully!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Successfully Created</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onHide}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AccountCreatedSuccess;
