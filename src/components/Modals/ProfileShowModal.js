import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import StudentProfile from "../../Layouts/Profile/StudentProfile";
import ProfileDetailsShow from "../ProfileModals/ProfileDetailsShow";
import ProfileTable from "../../Layouts/Profile/ProfileTable";

function ProfileShowModal({ isOpen, toggleModal }) {
  return (
    <Modal show={isOpen} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Profile Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <ProfileDetailsShow /> */}
        {/* <StudentProfile/> */}
        <ProfileTable />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleModal}>
          Close
        </Button>
        <Button variant="primary" onClick={toggleModal}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProfileShowModal;
