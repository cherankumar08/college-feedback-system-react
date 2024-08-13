import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileCreatedTable from "./ProfileCreatedTable";
import { useDispatch } from "react-redux";
import { AddDetailsToServer } from "../../Slice/FacultySlice";
import SurveyTitle from "../SurveyTitle";
import FacultyProfileCreatedTable from "./FacultyProfileCreatedTable";

const FacultyProfileRedux = () => {
  const dispatch = useDispatch();

  // Adding the States
  const [fields, setFields] = useState({
    id: "",
    name: "",
    userID: "",
    email: "",
    role: "",
    phone: "",
    password: "",
    address: "",
    degree: "",
    department: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = "";

    switch (name) {
      case "name":
        error = !value ? "*Please enter your name." : "";
        break;
      case "userID":
        error = !value ? "*Please enter your user ID." : "";
        break;
      case "email":
        error = !value
          ? "*Please enter your email address."
          : !validateEmail(value)
          ? "*Please enter a valid email address."
          : "";
        break;
      case "role":
        error = !value ? "*Please select a role." : "";
        break;
      case "phone":
        error = !value
          ? "*Please enter your phone number."
          : !validatePhone(value)
          ? "*Please enter a valid phone number."
          : "";
        break;
      case "password":
        error = !value ? "*Please enter your password." : "";
        break;
      case "address":
        error = !value ? "*Please enter your address." : "";
        break;
      case "degree":
        error = !value ? "*Please select a degree." : "";
        break;
      case "department":
        error = !value ? "*Please select a department." : "";
        break;
      default:
        break;
    }

    setFields({ ...fields, [name]: value });
    setErrors({ ...errors, [name]: error });
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    let formValid = true;
    let newErrors = {};

    Object.keys(fields).forEach((fieldName) => {
      const value = fields[fieldName];
      let error = "";

      switch (fieldName) {
        case "name":
          error = !value ? "*Please enter your name." : "";
          break;
        case "userID":
          error = !value ? "*Please enter your user ID." : "";
          break;
        case "email":
          error = !value
            ? "*Please enter your email address."
            : !validateEmail(value)
            ? "*Please enter a valid email address."
            : "";
          break;
        case "role":
          error = !value ? "*Please select a role." : "";
          break;
        case "phone":
          error = !value
            ? "*Please enter your phone number."
            : !validatePhone(value)
            ? "*Please enter a valid phone number."
            : "";
          break;
        case "password":
          error = !value ? "*Please enter your password." : "";
          break;
        case "address":
          error = !value ? "*Please enter your address." : "";
          break;
        case "degree":
          error = !value ? "*Please select a degree." : "";
          break;
        case "department":
          error = !value ? "*Please select a department." : "";
          break;
        default:
          break;
      }

      if (error) {
        formValid = false;
      }

      newErrors[fieldName] = error;
    });
    console.log(formValid);
    if (formValid) {
      // Dispatch action to add details to server
      dispatch(AddDetailsToServer(fields));
      // Reset form fields after submission
      setFields({
        id: "",
        name: "",
        userID: "",
        email: "",
        role: "",
        phone: "",
        password: "",
        address: "",
        degree: "",
        department: "",
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <SurveyTitle SurveyTitle="Account Creation" />
      <Container className="mt-4">
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <Form>
              {/* User ID */}
              <Form.Group className="mb-3" controlId="formBasicUserID">
                <Form.Label>User ID</Form.Label>
                <Form.Control
                  type="text"
                  name="userID"
                  placeholder="Enter the User ID"
                  value={fields.userID}
                  onChange={handleChange}
                />
                <Form.Text className="text-danger">{errors.userID}</Form.Text>
              </Form.Group>

              {/* FullName */}
              <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter the Full Name"
                  value={fields.name}
                  onChange={handleChange}
                />
                <Form.Text className="text-danger">{errors.name}</Form.Text>
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={fields.email}
                  onChange={handleChange}
                />
                <Form.Text className="text-danger">{errors.email}</Form.Text>
              </Form.Group>

              {/* User Role */}
              <Form.Group className="mb-3" controlId="formBasicUserRoleSelect">
                <Form.Label>Enter the User Role</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="role"
                  value={fields.role}
                  onChange={handleChange}
                >
                  <option selected disabled>
                    Select the User Role
                  </option>
                  <option value="Student">Student</option>
                  <option value="Faculty">Faculty</option>
                  <option value="Staff">Staff</option>
                  <option value="Admin">Administrator</option>
                </Form.Select>
                <Form.Text className="text-danger">{errors.role}</Form.Text>
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={fields.password}
                  onChange={handleChange}
                />
                <Form.Text className="text-danger">{errors.password}</Form.Text>
              </Form.Group>

              {/* Address */}
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Enter the Address"
                  value={fields.address}
                  onChange={handleChange}
                />
                <Form.Text className="text-danger">{errors.address}</Form.Text>
              </Form.Group>

              {/* Mobile Number */}
              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Enter the Phone Number"
                  value={fields.phone}
                  onChange={handleChange}
                />
                <Form.Text className="text-danger">{errors.phone}</Form.Text>
              </Form.Group>

              {/* Degree */}
              <Form.Group className="mb-3" controlId="formBasicDegreeSelect">
                <Form.Label>Handling Degree</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="degree"
                  value={fields.degree}
                  onChange={handleChange}
                >
                  <option selected disabled>
                    Select the Degree
                  </option>
                  <option value="BE">BE</option>
                  <option value="BTech">BTech</option>
                </Form.Select>
                <Form.Text className="text-danger">{errors.degree}</Form.Text>
              </Form.Group>

              {/* Department */}
              <Form.Group
                className="mb-3"
                controlId="formBasicDepartmentSelect"
              >
                <Form.Label>Handling Department</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="department"
                  value={fields.department}
                  onChange={handleChange}
                >
                  <option value="" selected disabled>
                    Select Department
                  </option>
                  <option value="CSE">Computer Science And Engineering</option>
                  <option value="EEE">
                    Electrical And Electronical Engineering
                  </option>
                  <option value="ECE">
                    Electrical And Communication Engineering
                  </option>
                  <option value="IT">Information Technology</option>
                  <option value="AIDS">
                    Artificial Intelligence And Data Science
                  </option>
                  <option value="MECH">Mechanical Engineering</option>
                  <option value="CIVIL">Civil Engineering</option>
                </Form.Select>
                <Form.Text className="text-danger">
                  {errors.department}
                </Form.Text>
              </Form.Group>

              {/* Batch */}
              {/* <Form.Group className="mb-3" controlId="formBasicBatchSelect">
                <Form.Label>Batch</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="batch"
                  value={fields.batch}
                  onChange={handleChange}
                >
                  <option selected disabled>
                    Select the Batch
                  </option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </Form.Select>
                <Form.Text className="text-danger">{errors.batch}</Form.Text>
              </Form.Group> */}

              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Table */}
      <FacultyProfileCreatedTable />
    </div>
  );
};

export default FacultyProfileRedux;
