import React, { useState } from "react";
import "../../sass/Page/profile.css";
import "../../sass/Page/responsiveness.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FormControl } from "react-bootstrap";
import SurveyTitle from "../../components/SurveyTitle";

const FacultyProfile = () => {
  const profileData = {
    rollNo: "2k20cse025",
    name: "AAKASH R",
    degree: "B.E",
    registerNo: "611220104026",
    department: "Computer Science and Engineering",
    email: "2k20cse025@kiot.ac.in",
    currentAddress:
      "Balacuttapatti(Village), Semman Kudal(Post), Omalur(Taluk), Salem(District)",
    userRole: "Faculty",
    phoneNumber: "+91 6383659121",
    permanentAddress:
      "Balacuttapatti(Village), Semman Kudal(Post), Omalur(Taluk), Salem(District)",
    Batch: 2020,
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
                {/* Email */}
                <Form.Label className="Label-lft h5">Email</Form.Label>
                <Form.Control type="text" disabled value={profileData.email} />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                className="text-left mt-2 mb-2"
              >
                <Form.Label className="Label-lft h5">Student Name</Form.Label>
                <Form.Control type="text" disabled value={profileData.name} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridEmail"
                className="text-left mt-2 mb-2"
              >
                {/* Email */}
                <Form.Label className="Label-lft h5 h5">User ID</Form.Label>
                <Form.Control type="text" disabled value={profileData.rollNo} />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                className="text-left mt-2 mb-2"
              >
                <Form.Label className="Label-lft h5">User Role</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  value={profileData.userRole}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3 text-left mt-2 mb-2">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label className="Label-lft h5">Degree</Form.Label>
                <Form.Control disabled type="text" value={profileData.degree} />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridState"
                className="text-left mt-0 mb-2"
              >
                <Form.Label className="Label-lft h5 ">Department</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  value={profileData.department}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label className="Label-lft h5">Batch</Form.Label>
                <Form.Control disabled type="text" value={profileData.Batch} />
              </Form.Group>
            </Row>

            {/* Current Address */}
            <Form.Group
              className="mb-3 text-left mt-2 mb-2"
              controlId="formGridAddress1"
            >
              <Form.Label className="Label-lft h5">Current Address</Form.Label>
              <Form.Control
                disabled
                type="text"
                value={profileData.currentAddress}
              />
            </Form.Group>

            {/* Address */}
            <Form.Group
              className="mb-3 text-left mt-2 mb-2"
              controlId="formGridAddress2"
            >
              <Form.Label className="Label-lft h5 ip-height">
                Permananent Address
              </Form.Label>
              <Form.Control
                disabled
                type="text"
                value={profileData.permanentAddress}
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
                  disabled
                  type="text"
                  value={profileData.phoneNumber}
                />
              </Form.Group>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
