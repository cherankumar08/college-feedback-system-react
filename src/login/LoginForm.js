import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImage from "../static/assets/login page.jpg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  getadminFromJson,
  getstudentsFromJson,
  getInstructorFromJson,
  getstaffFromJson,
  getUserDetails,
} from "../Slice/loginslice";
import { useDispatch, useSelector } from "react-redux";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");
  const [showCredentials, setShowCredentials] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { Student, Faculty, Admin, Staff } = useSelector(
    (state) => state.loginuser
  );

  useEffect(() => {
    dispatch(getadminFromJson());
    dispatch(getstudentsFromJson());
    dispatch(getInstructorFromJson());
    dispatch(getstaffFromJson());
  }, [dispatch]);

  useEffect(() => {
    console.log("Student:", Student);
    console.log("Faculty:", Faculty);
    console.log("Admin:", Admin);
    console.log("Staff:", Staff);
  }, [Student, Faculty, Admin, Staff]);

  const authenticateUser = () => {
    let role = "";

    switch (userRole) {
      case "student":
        if (
          Student.find(
            (user) => user.email == email && user.password == password
          )
        )
          role = "student";
        break;
      case "faculty":
        if (
          Faculty.find(
            (user) => user.email == email && user.password == password
          )
        )
          role = "faculty";
        break;
      case "staff":
        if (
          Staff.find((user) => user.email == email && user.password == password)
        )
          role = "staff";
        break;
      case "administrator":
        if (
          Admin.find((user) => user.email == email && user.password == password)
        )
          role = "admin";
        break;

      default:
        break;
    }

    console.log(role);

    if (!role) {
      setShowError(true);
    }

    return role;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setShowError(false);

    if (!email || !password) {
      setShowError(true);
      return;
    }

    const role = authenticateUser();
    setUserRole(role);

    if (role) {
      localStorage.setItem("username", email); // Store username in local storage
      dispatch(getUserDetails({ userId: email, userType: userRole }));
      // User is authenticated, perform the necessary actions like redirecting to dashboard
      switch (userRole) {
        case "student":
          navigate("/student/");
          break;
        case "faculty":
          navigate("/faculty");
          break;
        case "staff":
          navigate("/staff");
          break;
        case "administrator":
          navigate("/admin");
          break;
        default:
          setShowError(true);
          setErrorMessage("Invalid user role");
      }
    } else {
      setShowError(true);
      setErrorMessage(
        "Invalid combination of username, password, and user role"
      );
    }
  };

  const handleShowCredentials = () => {
    setShowCredentials(true);
  };

  const handleCloseModal = () => {
    setShowCredentials(false);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row col-height p-5 shadow">
        <div className="col-md-6 left-box d-flex justify-content-center align-items-center">
          <div className="featured-image">
            <img
              src={LoginImage}
              alt=""
              className="image-fluid rounded"
              style={{ width: "250px", height: "250px" }}
            />
            <p className="h1">Be Verified</p>
            <small className="lead col-xs-12">
              Participate the Feedback to Improve the System
            </small>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-lg-6 col-md-12 bg">
          <p className="h1">Hello Again,</p>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="emailAddress">Email address</label>
              <input
                type="email"
                className="form-control col-md-12"
                id="emailAddress"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <small id="Email-invalid">
                {showError && !email && "Email is required"}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="passwordID">Password</label>
              <input
                type="password"
                className="form-control col-md-12"
                id="passwordID"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <small id="password-invalid">
                {showError && !password && "Password is required"}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="loginAs">Log in as</label>
              <div className="remove-pad form-group form-check">
                <select
                  className="form-select"
                  id="userSelect"
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                >
                  <option value="" disabled>
                    Log in as
                  </option>
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="staff">Staff</option>
                  <option value="administrator">Administrator</option>
                </select>
              </div>
              <small id="select-invalid"></small>
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label mb-2" htmlFor="exampleCheck1">
                Remember Me
              </label>
            </div>
            {showError && (
              <div className="alert alert-danger" role="alert">
                Invalid email or password. Please try again.
              </div>
            )}
            <div className="button-grp d-flex justify-content-between">
              <Button variant="primary" onClick={handleShow}>
                Show Credentials
              </Button>

              <button type="" id="loginsubmit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="container">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>2k20cse025@kiot.ac.in</td>
                  <td>CHERANJ</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>2k20cse001@kiot.ac.in</td>
                  <td>AAKASHR</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>faculty@example.com</td>
                  <td>FACULTY</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>staff@example.com</td>
                  <td>STAFF</td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>admin@example.com</td>
                  <td>ADMIN</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End of Modal */}
    </div>
  );
}

export default LoginForm;
