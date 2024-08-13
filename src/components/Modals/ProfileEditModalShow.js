import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import StudentProfile from "../../Layouts/Profile/StudentProfile";
import ProfileEditModal from "./ProfileEditModal";

function ProfileEditModalShow({ isEditOpen, toggleEditModal }) {
  return (
    <Modal show={isEditOpen} onHide={toggleEditModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProfileEditModal />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleEditModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProfileEditModalShow;
