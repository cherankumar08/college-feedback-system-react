import React, { useState } from "react";
import "../../sass/Page/profile.css";
import "../../sass/Page/responsiveness.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FormControl } from "react-bootstrap";
import SurveyTitle from "../../components/SurveyTitle";

const ProfileEditModal = ({ isEditOpen, toggleEditModal }) => {
  const initialProfileData = {
    rollNo: "2k20cse025",
    name: "CHERAN J",
    degree: "B.E",
    registerNo: "611220104026",
    department: "Computer Science and Engineering",
    fatherName: "JAYAKUMAR R",
    email: "2k20cse025@kiot.ac.in",
    bloodGroup: "O+ve",
    currentAddress:
      "Balacuttapatti(Village), Semman Kudal(Post), Omalur(Taluk), Salem(District)",
    userRole: "Student",
    motherName: "SIVAGANDHI J",
    phoneNumber: "+91 6383659121",
    dateOfBirth: "08-02-2003",
    permanentAddress:
      "Balacuttapatti(Village), Semman Kudal(Post), Omalur(Taluk), Salem(District)",
    batch: 2020,
    userRole: "Student",
  };

  const [profileData, setProfileData] = useState(initialProfileData);
  const [isEditable, setIsEditable] = useState(false);

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleSaveChanges = () => {
    setIsEditable(false);
    // Perform save action with modified profileData
    console.log("Saving changes:", profileData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="d-flex justify-content-center ms-3">
      <div className=" ms-1 mt-2">
        <div className="container mb-3">
          <SurveyTitle SurveyTitle="Student Profile" />

          <Form className="">
            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridEmail"
                className="text-left mt-2 mb-2"
              >
                <Form.Label className="Label-lft h5">Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={profileData.email}
                  readOnly={!isEditable}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                className="text-left mt-2 mb-2"
              >
                <Form.Label className="Label-lft h5">Student Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={profileData.name}
                  readOnly={!isEditable}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridEmail"
                className="text-left mt-2 mb-2"
              >
                <Form.Label className="Label-lft h5 h5">Roll No</Form.Label>
                <Form.Control
                  type="text"
                  name="rollNo"
                  value={profileData.rollNo}
                  readOnly={!isEditable}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                className="text-left mt-2 mb-2"
              >
                <Form.Label className="Label-lft h5">User Role</Form.Label>
                <Form.Control
                  type="text"
                  name="registerNo"
                  value={profileData.userRole}
                  readOnly={!isEditable}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3 text-left mt-2 mb-2">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label className="Label-lft h5">Degree</Form.Label>
                <Form.Control
                  type="text"
                  name="degree"
                  value={profileData.degree}
                  readOnly={!isEditable}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridState"
                className="text-left mt-0 mb-2"
              >
                <Form.Label className="Label-lft h5">Department</Form.Label>
                <Form.Control
                  type="text"
                  name="department"
                  value={profileData.department}
                  readOnly={!isEditable}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label className="Label-lft h5">Batch</Form.Label>
                <Form.Control
                  type="text"
                  name="year"
                  value={profileData.batch}
                  readOnly={!isEditable}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Form.Group
              className="mb-3 text-left mt-2 mb-2"
              controlId="formGridAddress1"
            >
              <Form.Label className="Label-lft h5">Current Address</Form.Label>
              <Form.Control
                type="text"
                name="currentAddress"
                value={profileData.currentAddress}
                readOnly={!isEditable}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 text-left mt-2 mb-2"
              controlId="formGridAddress2"
            >
              <Form.Label className="Label-lft h5">
                Permanent Address
              </Form.Label>
              <Form.Control
                type="text"
                name="permanentAddress"
                value={profileData.permanentAddress}
                readOnly={!isEditable}
                onChange={handleChange}
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridEmail"
                className="text-left mt-2 mb-2"
              >
                <Form.Label className="Label-lft h5">Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  value={profileData.phoneNumber}
                  readOnly={!isEditable}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
          </Form>

          <div className="text-center mt-3">
            {isEditable ? (
              <Button
                variant="primary"
                className="btn-primary mx-5"
                onClick={handleSaveChanges}
              >
                Save changes
              </Button>
            ) : (
              <Button variant="success" className="mx-5" onClick={handleEdit}>
                Edit
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditModal;
