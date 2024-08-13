import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import UpdateProfileModal from "./Modal/UpdateProfileModal";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelecetedDetails,
  getStudentFromServer,
  DeleteDetailFromServer,
  removeDetailsFromList,
  UpdateDetailsToList,
} from "../../Slice/FacultySlice";
import Alert from "react-bootstrap/Alert";

const StaffProfileCreatedTable = () => {
  const { userDetails, error } = useSelector((state) => state.StaffDetails);
  const { selectedUser } = useSelector((state) => state.details);
  const dispatch = useDispatch();

  console.log(userDetails);

  //   Setting the Modal handle
  const [modalShow, setModalShow] = useState(false);

  // Setting the Alert Modal handle
  const [show, setShow] = useState(true);

  const handleEditShow = (details) => {
    // console.log("Edit Profile");
    dispatch(setSelecetedDetails(details));
    // dispatch(setSelecetedDetails(details));
    setModalShow(true);
  };

  const handleDelete = (details) => {
    dispatch(DeleteDetailFromServer(details))
      .unwrap()
      .then(() => {
        dispatch(removeDetailsFromList(details));
      });
  };

  useEffect(() => {
    dispatch(getStudentFromServer());
  }, [dispatch]);

  return (
    <div>
      <div className="m-5">
        <div class="table-responsive">
          {error !== "" ? (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading className="text-center">
                You got an error!
              </Alert.Heading>
              <h3 className="text-center">{error}</h3>
            </Alert>
          ) : (
            <table class="table">
              <thead>
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
                  {/* <th>Batch</th> */}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {userDetails &&
                  userDetails.map((details, index) => {
                    return (
                      <tr key={details.id}>
                        <td>{index + 1}</td>
                        <td>{details.name}</td>
                        <td>{details.email}</td>
                        <td>{details.role}</td> {/* Update this line */}
                        <td>{details.PhoneNumber}</td>
                        <td>{details.password}</td>
                        <td>{details.currentAddress}</td>
                        <td>{details.degree}</td>
                        <td>{details.Dept}</td>
                        {/* <td>{details.batch}</td> Update this line */}
                        <td>
                          <span>
                            <Button
                              variant="success"
                              onClick={() => handleEditShow(details)}
                            >
                              <i className="bi bi-pencil"></i>
                            </Button>
                          </span>
                          <span>
                            <Button
                              variant="danger"
                              onClick={() => handleDelete(details)}
                            >
                              <i className="bi bi-trash"></i>
                            </Button>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedUser && (
        <UpdateProfileModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          updateDetails={UpdateDetailsToList}
        />
      )}
    </div>
  );
};

export default StaffProfileCreatedTable;
