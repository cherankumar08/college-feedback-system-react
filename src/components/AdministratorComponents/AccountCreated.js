import React, { useState } from "react";
import { MDBDataTable } from "mdbreact";
import { useDispatch } from "react-redux";
import { deleteProfile } from "../../Slice/profileSlice"; // Import the deleteProfile action creator
import ProfileShowModal from "../Modals/ProfileShowModal";
import ProfileEditModalShow from "../Modals/ProfileEditModalShow";
import SendMessageModalMain from "../Modals/SendMessageModalMain";

const AccountCreated = () => {
  const dispatch = useDispatch(); // Initialize dispatch

  // View Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Edit Modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  // Message Modal
  const [isMessageModal, setIsMessageModal] = useState(false);
  const toggleMessageModal = () => {
    setIsMessageModal(!isMessageModal);
  };

  // Function to handle deletion
  const handleDelete = (id) => {
    // Dispatch the deleteProfile action with the id as payload
    dispatch(deleteProfile(id));
    // No need to update the UI here as Redux will handle it
  };

  const AccountDetails = {
    columns: [
      { label: "ID", field: "ID", sort: "asc", width: 150 },
      { label: "Name", field: "Name", sort: "asc", width: 150 },
      { label: "User Role", field: "UserRole", sort: "asc", width: 150 },
      { label: "Batch", field: "Batch", sort: "asc", width: 100 },
      {
        label: "View Account",
        field: "ViewAccount",
        sort: "asc",
        width: 150,
      },
      { label: "Edit", field: "Edit", sort: "asc", width: 150 },
      { label: "Message", field: "Message", sort: "asc", width: 150 },
      { label: "Delete", field: "Delete", sort: "asc", width: 150 },
    ],
    rows: [
      {
        ID: "2k20cse025",
        Name: "CHERAN J",
        UserRole: "Student",
        Batch: "2020",
        ViewAccount: (
          <button className="btn-primary rounded p-2" onClick={toggleModal}>
            <i className="bi bi-eye"></i>
          </button>
        ),
        Edit: (
          <button
            className="btn-secondary rounded p-2"
            onClick={toggleEditModal}
          >
            <i className="bi bi-pencil"></i>
          </button>
        ),
        Message: (
          <button
            className="btn-success rounded p-2"
            onClick={toggleMessageModal}
          >
            <i className="bi bi-envelope"></i>
          </button>
        ),
        Delete: (
          <button
            className="btn-danger rounded p-2"
            onClick={() => handleDelete(1)} // Pass ID to handleDelete function
          >
            <i className="bi bi-trash"></i>
          </button>
        ),
      },
      // Add more rows as needed
    ],
  };

  return (
    <div className="p-5">
      <MDBDataTable striped bordered hover data={AccountDetails} />
      <ProfileShowModal isOpen={isModalOpen} toggleModal={toggleModal} />
      <ProfileEditModalShow
        isEditOpen={isEditModalOpen}
        toggleEditModal={toggleEditModal}
      />
      <SendMessageModalMain
        isMessageModal={isMessageModal}
        toggleMessageModal={toggleMessageModal}
      />
    </div>
  );
};

export default AccountCreated;
