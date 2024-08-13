import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Nested() {
  const [showOuterModal, setShowOuterModal] = useState(false);
  const [showInnerModal, setShowInnerModal] = useState(false);

  const handleCloseOuter = () => setShowOuterModal(false);
  const handleShowOuter = () => setShowOuterModal(true);

  const handleCloseInner = () => setShowInnerModal(false);
  const handleShowInner = () => setShowInnerModal(true);

  const handleInnerButtonClick = () => {
    handleShowInner(); // Show the inner modal
    handleCloseOuter(); // Close the outer modal
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShowOuter}>
        Open Outer Modal
      </Button>

      <Modal show={showOuterModal} onHide={handleCloseOuter}>
        <Modal.Header closeButton>
          <Modal.Title>Outer Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is the outer modal.</Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleInnerButtonClick}>
            Open Inner Modal
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showInnerModal} onHide={handleCloseInner}>
        <Modal.Header closeButton>
          <Modal.Title>Inner Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is the inner modal.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInner}>
            Close Inner Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Nested;
