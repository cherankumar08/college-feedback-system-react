import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addusertoJson, upadateusertoJson } from "./UserSlice";

function EditUser(props) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [id, setUid] = useState(0);
  const [select, setSelect] = useState("");
  const [register, setRegister] = useState("");
  const [errors, setErrors] = useState({});
  const { selectedUser } = useSelector((state) => state.student);
  useEffect(() => {
    if (Object.keys(selectedUser).length !== 0) {
      setUsername(selectedUser.username);
      setEmail(selectedUser.email);
      setPassword(selectedUser.password);
      setDepartment(selectedUser.department);
      setPhone(selectedUser.phone);
      setDate(selectedUser.date);
      setSelect(selectedUser.select);
      setRegister(selectedUser.register);
      setUid(selectedUser.id);
    }
  }, [selectedUser]);
  const editUser = () => {
    dispatch(
      upadateusertoJson({
        id,
        username,
        email,
        password,
        department,
        phone,
        date,
        select,
        register,
      })
    );
  };

  const handleusernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleemailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlepasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlephoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handledateChange = (e) => {
    setDate(e.target.value);
  };
  const handleselectChange = (e) => {
    setSelect(e.target.value);
  };
  const handledepartmentChange = (e) => {
    setDepartment(e.target.value);
  };
  const handleregisterChange = (e) => {
    setRegister(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!username.trim()) {
      validationErrors.username = "username is required";
    } else if (!/^[a-zA-Z ]+$/.test(username)) {
      validationErrors.username = "username is required";
    }

    if (!email.trim()) {
      validationErrors.email = "email is required";
    } else if (!/^[a-zA-Z0-9]+@kiot\.[a-zA-Z]{3}$/.test(email)) {
      validationErrors.email = "email is not valid";
    }

    if (!password.trim()) {
      validationErrors.password = "password is required";
    } else if (password.length < 6) {
      validationErrors.password = "password is required";
    }

    if (!register.trim()) {
      validationErrors.register = "Id is required";
    } else if (!/^61122\d{7}$/.test(register)) {
      validationErrors.register = "Id is required";
    }

    if (!department.trim()) {
      validationErrors.department = "Please select";
    }

    if (!phone.trim()) {
      validationErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      validationErrors.phone = "Invalid phone number";
    }

    if (!date.trim()) {
      validationErrors.date = "Date of Birth is required";
    } else {
      const dob = new Date(date);
      const currentDate = new Date();
      const age = Math.floor(
        (currentDate - dob) / (365.25 * 24 * 60 * 60 * 1000)
      );

      if (age < 18) {
        validationErrors.date = "Invalid Date of Birth is required";
      }
    }

    if (!select.trim()) {
      validationErrors.select = "please select";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // If there are no validation errors, dispatch action and close modal
      dispatch(
        upadateusertoJson({
          id,
          username,
          email,
          password,
          department,
          phone,
          date,
          select,
          register,
        })
      );
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");
      setDate("");
      setSelect("");
      setDepartment("");
      setRegister("");
      // Close modal
      props.onHide();
    }
  };
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          style={{ background: "#bbcfbc", color: "#0A4445" }}
        >
          <Modal.Title id="contained-modal-title-vcenter">
            Student Details
          </Modal.Title>
          <Button variant="" onClick={props.onHide} className="ms-auto">
            {" "}
            <i
              class="fa-solid fa-xmark cross "
              style={{ color: "#0A4445" }}
            ></i>
          </Button>
        </Modal.Header>
        <Modal.Body
          className="grid-example scroll rounded "
          style={{
            background: "#bbcfbc",
            color: "#0A4445",
            overflowY: "scroll",
            height: "500px",
          }}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold" style={{ color: "#0A4445" }}>
                Username <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                value={username}
                placeholder="username"
                autoComplete="off"
                onChange={handleusernameChange}
              />
              {errors.username && (
                <span className="text-danger">{errors.username}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold" style={{ color: "#0A4445" }}>
                ID Number <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                value={register}
                placeholder="611220104074"
                autoComplete="off"
                onChange={handleregisterChange}
              />
              {errors.register && (
                <span className="text-danger">{errors.register}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold" style={{ color: "#0A4445" }}>
                Department <span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={department}
                autoComplete="off"
                onChange={handledepartmentChange}
              >
                <option>Choose The Department </option>
                <option value="Computer Science and Engineering">
                  Computer Science and Engineering
                </option>
                <option value="Artificial intelligence">
                  Artificial intelligence
                </option>
                <option value="Civil">Civil</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Electrical and Electronics Engineering">
                  Electrical and Electronics Engineering
                </option>
                <option value="Electronics and Communication Engineering">
                  Electronics and Communication Engineering
                </option>
              </Form.Select>
              {errors.select && (
                <span className="text-danger">{errors.select}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold" style={{ color: "#0A4445" }}>
                Batch <span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={select}
                autoComplete="off"
                onChange={handleselectChange}
              >
                <option>Choose The Batch </option>
                <option value="2020-2024">2020-2024</option>
                <option value="2021-2025">2021-2025</option>
                <option value="2022-2026">2022-2026</option>
              </Form.Select>
              {errors.select && (
                <span className="text-danger">{errors.select}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold" style={{ color: "#0A4445" }}>
                Email <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                value={email}
                placeholder="example@gmail.com"
                autoComplete="off"
                onChange={handleemailChange}
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold" style={{ color: "#0A4445" }}>
                password <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                value={password}
                placeholder=""
                onChange={handlepasswordChange}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold" style={{ color: "#0A4445" }}>
                Phone Number <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="tele"
                value={phone}
                autoComplete="off"
                onChange={handlephoneChange}
              />
              {errors.phone && (
                <span className="text-danger">{errors.phone}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold" style={{ color: "#0A4445" }}>
                Date Of Birth <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="date"
                value={date}
                autoComplete="off"
                onChange={handledateChange}
              />
              {errors.date && (
                <span className="text-danger">{errors.date}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold" style={{ color: "#0A4445" }}>
                Photo <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="file"
                name="photo"
                autoComplete="off"
                accept=".jpg, .jpeg, .png"
              />
              {/* {errors.photo && <span className='text-danger'>{errors.photo}</span>}   */}
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button
                type="submit"
                className="border-0 "
                style={{ color: "#bbcfbc", background: "#0A4445" }}
                onClick={editUser}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EditUser;
