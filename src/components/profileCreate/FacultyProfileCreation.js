import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import SurveyTitles from "../SurveyTitles/SurveyTitles";
import AccountCreatedSuccess from "../Modals/AccountCreatedSuccess";

function FacultyProfileCreation() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    facultyName: "",
    rollNo: "",
    facultyID: "",
    degree: "",
    department: "",
    subjects: "",
    fatherName: "",
    motherName: "",
    bloodGroup: "",
    phoneNumber: "",
    password: "",
    currentAddress: "",
    permanentAddress: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setShow(true);
    }
    setValidated(true);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="container mt-5 p-5">
      <SurveyTitles
        SubjectFaculty=""
        SubjectName="Faculty Account Registration"
      />
      <Form className="mt-3" noValidate validated={validated}>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            controlId="email"
            className="text-left mt-2 mb-2"
          >
            <Form.Label className="Label-lft h5 h5">Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={formData.email}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="facultyName"
            className="text-left mt-2 mb-2"
          >
            <Form.Label className="Label-lft h5">Faculty Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Faculty Name"
              onChange={handleChange}
              value={formData.facultyName}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a name.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group
            as={Col}
            controlId="rollNo"
            className="text-left mt-2 mb-2"
          >
            <Form.Label className="Label-lft h5 h5">Roll No</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter the Roll Number"
              onChange={handleChange}
              value={formData.rollNo}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a roll number.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="facultyID"
            className="text-left mt-2 mb-2"
          >
            <Form.Label className="Label-lft h5">Faculty ID</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter the Register Number"
              onChange={handleChange}
              value={formData.facultyID}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a faculty ID.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3 text-left mt-2 mb-2">
          <Form.Group as={Col} controlId="degree">
            <Form.Label className="Label-lft h5">Degree</Form.Label>
            <Form.Select
              required
              defaultValue="Choose..."
              onChange={handleChange}
              value={formData.degree}
            >
              <option disabled>Select the Handling Degree</option>
              <option value="BE">B.E</option>
              <option value="Btech">B.Tech</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select a degree.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="department"
            className="text-left mt-0 mb-2"
          >
            <Form.Label className="Label-lft h5">Department</Form.Label>
            <Form.Select
              required
              defaultValue="NA"
              onChange={handleChange}
              value={formData.department}
            >
              <option disabled>Select the Handling Degree</option>
              <option value="CSE">Computer Science And Engineering</option>
              <option value="EEE">
                Electrical And Electronical Engineering
              </option>
              <option value="ECE">
                Electrical And Communication Engineering
              </option>
              <option value="IT">Information Technology</option>
              <option value="AIDS">
                Artificial Intelligience And Data Science
              </option>
              <option value="MECH">Mechanical Engineering</option>
              <option value="CIVIL">Civil Engineering</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select a department.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="subjects">
            <Form.Label className="Label-lft h5">Handling Subjects</Form.Label>
            <Form.Select
              required
              defaultValue="Select the Computer Science Subject"
              onChange={handleChange}
              value={formData.subjects}
            >
              <option disabled>Select the Subject</option>
              <option value="DataStructures">Data Structures</option>
              <option value="Algorithms">Algorithms</option>
              {/* Add more subjects as needed */}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select a subject.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3 text-left mt-2 mb-2">
          <Form.Group as={Col} controlId="fatherName">
            <Form.Label className="Label-lft h5">Father's Name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={handleChange}
              value={formData.fatherName}
            />
            <Form.Control.Feedback type="invalid">
              Please provide father's name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="motherName">
            <Form.Label className="Label-lft h5">Mother's Name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={handleChange}
              value={formData.motherName}
            />
            <Form.Control.Feedback type="invalid">
              Please provide mother's name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="bloodGroup">
            <Form.Label className="Label-lft h5">Blood Group</Form.Label>
            <Form.Select
              required
              onChange={handleChange}
              value={formData.bloodGroup}
            >
              <option disabled>Select the Blood Group</option>
              <option value="O+ve">O+ve</option>
              <option value="O-ve">O-ve</option>
              <option value="A+ve">A+ve</option>
              <option value="A-ve">A-ve</option>
              <option value="B+ve">B+ve</option>
              <option value="B-ve">B-ve</option>
              <option value="AB+ve">AB+ve</option>
              <option value="AB-ve">AB-ve</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select a blood group.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group
            as={Col}
            controlId="phoneNumber"
            className="text-left mt-2 mb-2"
          >
            <Form.Label className="Label-lft h5">Phone Number</Form.Label>
            <Form.Control
              required
              type="phone"
              placeholder="Enter the Phone Number"
              onChange={handleChange}
              value={formData.phoneNumber}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a phone number.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="password"
            className="text-left mt-0 mb-2"
          >
            <Form.Label className="Label-lft h5">Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group
          className="mb-3 text-left mt-2 mb-2"
          controlId="currentAddress"
        >
          <Form.Label className="Label-lft h5">Current Address</Form.Label>
          <Form.Control
            required
            placeholder="Enter the Current Address"
            className="Address-Box"
            onChange={handleChange}
            value={formData.currentAddress}
          />
          <Form.Control.Feedback type="invalid">
            Please provide current address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className="mb-3 text-left mt-2 mb-2"
          controlId="permanentAddress"
        >
          <Form.Label className="Label-lft h5">Permanent Address</Form.Label>
          <Form.Control
            required
            placeholder="Enter the Permanent Address"
            className="Address-Box"
            onChange={handleChange}
            value={formData.permanentAddress}
          />
          <Form.Control.Feedback type="invalid">
            Please provide permanent address.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" onClick={handleShow} type="button">
          Create Account
        </Button>
      </Form>

      {/* <AccountCreatedSuccess show={show} onHide={handleClose} /> */}
    </div>
  );
}

export default FacultyProfileCreation;
