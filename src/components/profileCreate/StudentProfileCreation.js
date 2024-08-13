import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { Modal, Button } from "react-bootstrap";

import "../../sass/Page/regForm.scss";

function RegisterForm() {
  // For the Modal Edit Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fields, setFields] = useState({
    username: "",
    emailid: "",
    mobileno: "",
    password: "",
    address: "",
    registerNumber: "",
    degree: "",
    department: "",
    batch: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = "";

    switch (name) {
      case "username":
        error = !value
          ? "*Please enter your username."
          : !value.match(/^[a-zA-Z ]*$/)
          ? "*Please enter alphabet characters only."
          : "";
        break;
      case "emailid":
        error = !value
          ? "*Please enter your email-ID."
          : !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
          ? "*Please enter valid email-ID."
          : "";
        break;
      case "mobileno":
        error = !value
          ? "*Please enter your mobile no."
          : !value.match(/^[0-9]{10}$/)
          ? "*Please enter valid mobile no."
          : "";
        break;
      case "address":
        error = !value ? "*Please enter your address." : "";
        break;
      case "registerNumber":
        error = !value ? "*Please enter your register number." : "";
        break;
      case "role": // Handle user role field
        error = !value ? "*Please select an option." : "";
        break;
      default:
        break;
    }

    setFields({ ...fields, [name]: value });
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = () => {
    let error = {};
    Object.keys(fields).forEach((key) => {
      const value = fields[key];
      switch (key) {
        case "username":
          error[key] = !value
            ? "*Please enter your username."
            : !value.match(/^[a-zA-Z ]*$/)
            ? "*Please enter alphabet characters only."
            : "";
          break;
        case "emailid":
          error[key] = !value
            ? "*Please enter your email-ID."
            : !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
            ? "*Please enter valid email-ID."
            : "";
          break;
        case "mobileno":
          error[key] = !value
            ? "*Please enter your mobile no."
            : !value.match(/^[0-9]{10}$/)
            ? "*Please enter valid mobile no."
            : "";
          break;
        case "address":
          error[key] = !value ? "*Please enter your address." : "";
          break;
        case "registerNumber":
          error[key] = !value ? "*Please enter your register number." : "";
          break;
        case "degree":
        case "department":
        case "batch":
          error[key] = !value ? "*Please select an option." : "";
          break;
        case "role":
          error[key] = !value ? "*Please select an option." : "";
          break;
        default:
          break;
      }
    });

    setErrors(error);

    // Checking if any errors exist
    const hasErrors = Object.values(error).some((val) => val);
    if (!hasErrors) {
      console.log("Entered Details:", fields);
    }
  };

  return (
    <div id="main-registration-container">
      {/* Account creation Form */}
      <div id="register">
        <h3 className="text-center">User Registration</h3>
        <form method="post">
          <label>Name</label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={fields.username}
            onChange={handleChange}
          />
          <div className="errorMsg">{errors.username}</div>
          <label>Email ID:</label>
          <input
            type="text"
            name="emailid"
            className="form-control"
            value={fields.emailid}
            onChange={handleChange}
          />
          <div className="errorMsg">{errors.emailid}</div>

          <label htmlFor="">User Role:</label>
          <select
            name="role"
            value={fields.role}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select Role</option>
            <option value="admin">Student</option>
            <option value="user">Faculty</option>
            <option value="user">Staff</option>
            <option value="user">Administrator</option>
          </select>
          <div className="errorMsg">{errors.role}</div>
          <label>User ID</label>
          <input
            type="text"
            name="registerNumber"
            className="form-control"
            value={fields.registerNumber}
            onChange={handleChange}
          />
          <div className="errorMsg">{errors.registerNumber}</div>
          <label>Mobile No:</label>
          <input
            type="text"
            name="mobileno"
            className="form-control"
            value={fields.mobileno}
            onChange={handleChange}
          />
          <div className="errorMsg">{errors.mobileno}</div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={fields.password}
            onChange={handleChange}
          />
          <div className="errorMsg">{errors.password}</div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={fields.address}
            className="form-control"
            onChange={handleChange}
          />
          <div className="errorMsg">{errors.address}</div>
          <label>Degree</label>
          <select
            name="degree"
            value={fields.degree}
            onChange={handleChange}
            className="form-control"
          >
            <option value="" selected disabled>
              Select Degree
            </option>
            <option value="BE">BE</option>
            <option value="BTech">BTech</option>
          </select>
          <div className="errorMsg">{errors.degree}</div>
          <label>Department</label>
          <select
            name="department"
            value={fields.department}
            onChange={handleChange}
            className="form-control"
          >
            <option value="" selected disabled>
              Select Department
            </option>
            <option value="CSE">Computer Science And Engineering</option>
            <option value="EEE">Electrical And Electronical Engineering</option>
            <option value="ECE">
              Electrical And Communication Engineering
            </option>
            <option value="IT">Information Technology</option>
            <option value="AIDS">
              Artificial Intelligience And Data Science
            </option>
            <option value="MECH">Mechanical Engineering</option>
            <option value="CIVIL">Civil Engineering</option>
          </select>
          <div className="errorMsg">{errors.department}</div>
          <label>Batch</label>
          <select
            name="batch"
            value={fields.batch}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select Batch</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
          <div className="errorMsg">{errors.batch}</div>
          <button
            className="button d-flex justify-content-center "
            id="regButton"
            type="button"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
      </div>

      {/* Table */}
      <div className="m-5">
        <div class="table-responsive">
          <table class="table">
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email ID</th>
              <th>User Role</th>
              <th>Mobile Number</th>
              <th>Password</th>
              <th>Address</th>
              <th>Degree</th>
              <th>Department</th>
              <th>Batch</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>2k20cse001</td>
              <td>Name</td>
              <td>2k20cse025@kiot.ac.in</td>
              <td>Student</td>
              <td>6383659121</td>
              <td>PASSWORD123</td>
              <td>SALEM</td>
              <td>B.E</td>
              <td>CSE</td>
              <td>2020</td>
              <td>
                <span>
                  <Button variant="success" onClick={handleShow}>
                    <i class="bi bi-pencil"></i>
                  </Button>
                </span>
                <span>
                  <Button variant="danger">
                    <i class="bi bi-trash"></i>
                  </Button>
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
