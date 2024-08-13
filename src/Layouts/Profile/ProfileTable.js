// ProfileTable.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileData } from "../../Slice/profileSlice";
import { Form, Row, Col } from "react-bootstrap";

const ProfileTable = () => {
  const dispatch = useDispatch();
  const { profiles, loading, error } = useSelector((state) => state.profiles);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Get the first profile from the profiles array
  const firstProfile = profiles.length > 0 ? profiles[0] : null;

  return (
    <div>
      {firstProfile && (
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="id">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" disabled value={firstProfile.id} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" disabled value={firstProfile.name} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="rollNo">
                <Form.Label>Roll No</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  value={firstProfile.rollNo}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="department">
                <Form.Label>Department</Form.Label>
                <Form.Control type="text" disabled value={firstProfile.Dept} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="degree">
                <Form.Label>Degree</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  value={firstProfile.degree}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" disabled value={firstProfile.email} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="registerNumber">
                <Form.Label>Register Number</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  value={firstProfile.registerNumber}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="currentAddress">
                <Form.Label>Current Address</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  value={firstProfile.currentAddress}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="permanentAddress">
                <Form.Label>Permanent Address</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  value={firstProfile.permanentAddress}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  value={firstProfile.phoneNumber}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="fatherName">
                <Form.Label>Father's Name</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  value={firstProfile.fatherName}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="motherName">
                <Form.Label>Mother's Name</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  value={firstProfile.motherName}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="bloodGroup">
                <Form.Label>Blood Group</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  value={firstProfile.bloodGroup}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  disabled
                  value={firstProfile.password}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="batch">
                <Form.Label>Batch</Form.Label>
                <Form.Control type="text" disabled value={firstProfile.batch} />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      )}
    </div>
  );
};

export default ProfileTable;
