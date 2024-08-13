import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import SurveyTitles from "../SurveyTitles/SurveyTitles";
import AccountCreatedSuccess from "../Modals/AccountCreatedSuccess";

function AdminProfileCreation() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div className="container mt-5 p-5">
      <SurveyTitles SubjectFaculty="" SubjectName="Account Registration" />
      <Form className="mt-3">
        <Row className="mb-3">
          <Form.Group
            as={Col}
            controlId="formGridEmail"
            className="text-left mt-2 mb-2"
          >
            {/* Email */}
            <Form.Label className="Label-lft h5 h5">Email</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridPassword"
            className="text-left mt-2 mb-2"
          >
            <Form.Label className="Label-lft h5">Administrator Name</Form.Label>
            <Form.Control type="text" placeholder="Administrator Name" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group
            as={Col}
            controlId="formGridEmail"
            className="text-left mt-2 mb-2"
          >
            {/* Email */}
            <Form.Label className="Label-lft h5 h5">Admin ID</Form.Label>
            <Form.Control type="text" placeholder="Enter the Roll Number" />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridPassword"
            className="text-left mt-2 mb-2"
          >
            <Form.Label className="Label-lft h5">Register Number</Form.Label>
            <Form.Control type="text" placeholder="Enter the Register Number" />
          </Form.Group>
        </Row>

        <Row className="mb-3 text-left mt-2 mb-2">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="Label-lft h5">Degree</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option disabled>Select the Degree</option>
              <option value="BE"> B.E</option>
              <option value="Btech">B.Tech</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridState"
            className="text-left mt-0 mb-2"
          >
            <Form.Label className="Label-lft h5 ">Department</Form.Label>
            <Form.Select defaultValue="NA">
              <option disabled>Select the Degreee</option>
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
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label className="Label-lft h5">Year</Form.Label>
            <Form.Select defaultValue="NA">
              <option disabled>Select the Year</option>
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
            </Form.Select>
          </Form.Group>
        </Row>

        {/* Current Address */}
        <Form.Group
          className="mb-3 text-left mt-2 mb-2"
          controlId="formGridAddress1"
        >
          <Form.Label className="Label-lft h5">Current Address</Form.Label>
          <Form.Control
            placeholder="Enter the Current Address"
            className="Address-Box"
          />
        </Form.Group>

        {/* Address */}
        <Form.Group
          className="mb-3 text-left mt-2 mb-2"
          controlId="formGridAddress2"
        >
          <Form.Label className="Label-lft h5">Permanent Address</Form.Label>
          <Form.Control
            placeholder="Enter the Permananet Address"
            className="Address-Box"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group
            as={Col}
            controlId="formGridEmail"
            className="text-left mt-2 mb-2"
          >
            <Form.Label className="Label-lft h5">Phone Number</Form.Label>
            <Form.Control type="phone" placeholder="Enter the Phone Number" />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridPassword"
            className="text-left mt-0 mb-2"
          >
            <Form.Label className="Label-lft h5 text-left mt-2 mb-2">
              Password
            </Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Row className="mb-3 text-left mt-2 mb-2">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="Label-lft h5">Father's Name</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridState"
            className="text-left mt-0 mb-2"
          >
            <Form.Label className="Label-lft h5 ">Mother's Name</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label className="Label-lft h5">Blood Group</Form.Label>
            <Form.Select>
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
          </Form.Group>
        </Row>

        <Button variant="primary" onClick={handleShow} type="submit">
          Create Account
        </Button>
      </Form>

      <AccountCreatedSuccess show={show} onHide={handleClose} />
    </div>
  );
}

export default AdminProfileCreation;
