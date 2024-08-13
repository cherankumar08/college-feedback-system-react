import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import updateTasktoList, { UpdateDetailsToList } from "../../../Slice/UserCRUD";
import { useDispatch } from "react-redux";

const UpdateProfileModal = (props) => {
  const { selectedUser } = useSelector((state) => state.details);

  const [name, setName] = useState("");
  const [userID, setUserID] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [PhoneNumber, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [degree, setDegree] = useState("");
  const [department, setDepartment] = useState("");
  const [batch, setBatch] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

  const dispatch = useDispatch();

  const UpdateDetails = () => {
    const id = selectedUser.id;
    console.log(id);
    // dispatch(updateTasktoList(userID,name,role,password,email,phone,degree,department,batch));
    // dispatch(updateTasktoList{userID,name,role,password,email,phone,degree,department,batch});
    try {
      const user = {
        id,
        userID,
        name,
        role,
        password,
        email,
        PhoneNumber,
        degree,
        department,
        batch,
        address,
      };
      dispatch(props.updateDetails({ ...user }));
    } catch (error) {
      console.log("Catched By Error");
      console.log("Hello World");
      console.log(error);
      console.log({
        id,
        userID,
        name,
        role,
        password,
        email,
        PhoneNumber,
        degree,
        department,
        batch,
        address,
      });
    }
    props.onHide();
  };

  useEffect(() => {
    if (Object.keys(selectedUser).length !== 0) {
      // setID(selectedUser.id);
      setName(selectedUser.name);
      setUserID(selectedUser.userID);
      setEmail(selectedUser.email);
      setRole(selectedUser.role);
      setPhone(selectedUser.PhoneNumber);
      setPassword(selectedUser.password);
      setAddress(selectedUser.address);
      setDegree(selectedUser.degree);
      setDepartment(selectedUser.department);
      setBatch(selectedUser.batch);
    }
  }, [selectedUser]);
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form Control */}
          <Form>
            {/* User ID */}
            <Form.Group className="mb-3" controlId="formBasicUserID">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the User ID"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
              />
            </Form.Group>

            {/* FullName */}
            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            {/*Email*/}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            {/* User Role */}
            <Form.Group className="mb-3" controlId="formBasicUserRoleSelect">
              <Form.Label>Enter the User Role</Form.Label>
              <Form.Select
                aria-label="Default select example
                "
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option selected disabled>
                  Select the User Role
                </option>
                <option value="Student">Student</option>
                <option value="Faculty">Faculty</option>
                <option value="Staff">Staff</option>
                <option value="Admin">Administrator</option>
              </Form.Select>
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {/*Address*/}
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            {/* Mobile Number */}
            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the Phone Number"
                value={PhoneNumber}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            {/* Degree */}
            <Form.Group className="mb-3" controlId="formBasicDegreeSelect">
              <Form.Label>Degree</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              >
                <option selected disabled>
                  Select the Degree
                </option>
                <option value="BE">BE</option>
                <option value="BTech">BTech</option>
              </Form.Select>
            </Form.Group>

            {/* Department */}
            <Form.Group
              className="mb-3"
              controlId="formBasicDepartmentSelect"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <Form.Label>Department</Form.Label>
              <Form.Select aria-label="Default select example">
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
                  Artificial Intelligience And Data Science
                </option>
                <option value="MECH">Mechanical Engineering</option>
                <option value="CIVIL">Civil Engineering</option>
              </Form.Select>
            </Form.Group>

            {/* batch */}
            <Form.Group className="mb-3" controlId="formBasicBatchSelect">
              <Form.Label>Batch</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
              >
                <option selected disabled>
                  Select the Batch
                </option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </Form.Select>
            </Form.Group>
          </Form>
          {/* Form Control */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={UpdateDetails}>
            Update Details
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateProfileModal;
