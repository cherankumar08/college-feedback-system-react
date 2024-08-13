import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";

import {
  getUsersFromJson,
  setSelectedUser,
  deleteusertoJson,
} from "../../Slice/UserSlice";
import EditUser from "../../Slice/EditUser";

const StudentDatatable = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const { student, error } = useSelector((state) => state.student);
  const dispatch = useDispatch();
  let editUser = (user) => {
    dispatch(setSelectedUser(user));
    setModalShow(true);
  };

  const deleteUser = (user) => {
    dispatch(deleteusertoJson(user));
  };
  useEffect(() => {
    dispatch(getUsersFromJson());
  }, [dispatch]);
  return (
    <div className="mx-5 mt-5">
      {/* <Container className='col-md-9 ms-sm-auto col-lg-10 px-md-4 mx-0 dash' > */}

      <div
        className="table-responsive rounded p-3 mt-4"
        style={{ background: "#bbcfbc" }}
      >
        <Table bordered hover className="rounded mt-5 ">
          <thead>
            <tr style={{ background: "#0A4445" }}>
              <th style={{ background: "#0A4445", color: "#dde7dd" }}>S.no</th>
              <th style={{ background: "#0A4445", color: "#dde7dd" }}>Name</th>
              <th
                className="text-center"
                style={{ background: "#0A4445", color: "#dde7dd" }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {student &&
              student.map((user, index) => (
                <tr Key={user.id}>
                  <td style={{ background: "#bbcfbc", color: "#0A4445" }}>
                    {index + 1}
                  </td>
                  <td style={{ background: "#bbcfbc", color: "#0A4445" }}>
                    {user.username}
                  </td>
                  <td style={{ background: "#bbcfbc", color: "#0A4445" }}>
                    <div className="d-flex g-3 justify-content-center text-center">
                      <button
                        type="button"
                        className="btn bg-warning btn-sm mx-2 "
                      >
                        <i
                          class="bx bx-show fs-5"
                          style={{ color: "#dde7dd" }}
                        ></i>
                      </button>
                      <button
                        type="button"
                        className="btn bg-success btn-sm mx-2"
                        onClick={() => editUser(user)}
                      >
                        <i
                          class="bx bx-edit-alt fs-5"
                          style={{ color: "#dde7dd" }}
                        ></i>
                      </button>
                      <EditUser
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                      <button
                        type="button"
                        className="btn btn-danger btn-sm mx-2 "
                        onClick={() => deleteUser(user)}
                      >
                        <i
                          class="bx bx-trash fs-5"
                          style={{ color: "#dde7dd" }}
                        ></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      {/* </div>   */}
      {/* </Container> */}
      <style>
        {`
          .custom-datatable th:nth-child(3) {
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default StudentDatatable;
