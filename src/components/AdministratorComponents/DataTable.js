import React from "react";
import { MDBDataTable } from "mdbreact";
import { NavLink } from "react-router-dom";

const DataTable = () => {
  const data = {
    columns: [
      { label: "Survey Name", field: "name", sort: "asc", width: 150 },
      { label: "User Role", field: "role", sort: "asc", width: 150 },
      // { label: "Status", field: "status", sort: "asc", width: 150 },
      { label: "Actions", field: "edit", sort: "asc", width: 100 },
      // { label: "Delete Survey", field: "delete", sort: "asc", width: 150 },
    ],
    rows: [
      {
        name: "Course Feedback",
        role: "Students",
        status: "Ongoing",
        edit: (
          <NavLink to="edit-survey" class="btn btn-primary">
            <i class="bi bi-pencil-fill"></i>
          </NavLink>
        ),
      },
      {
        name: "Instructor Survey Feedback",
        role: "Students",
        status: "Ongoing",
        edit: (
          <NavLink to="instructor-survey-editQNS" class="btn btn-primary">
            <i class="bi bi-pencil-fill"></i>
          </NavLink>
        ),
      },
      {
        name: "Campus Services Feedback",
        role: "Students,Faculty,Staffs",
        status: "Ongoing",
        edit: (
          <NavLink to="services-edit-QNS" class="btn btn-primary">
            <i class="bi bi-pencil-fill"></i>
          </NavLink>
        ),
      },
      {
        name: "Campus Facilities Feedback",
        role: "Students,Faculty,Staffs",
        status: "Ongoing",
        edit: (
          <NavLink to="facilities-edit-QNS" class="btn btn-primary">
            <i class="bi bi-pencil-fill"></i>
          </NavLink>
        ),
      },
      {
        name: "Extracurricular Activities Feedback Survey",
        role: "Students,Faculty,Staffs",
        status: "Finished",
        edit: (
          <NavLink to="extracurricular-edit-QNS" class="btn btn-primary">
            <i class="bi bi-pencil-fill"></i>
          </NavLink>
        ),
      },
      {
        name: "Suggestions And Improvements Survey",
        role: "Students,Faculty,Staffs",
        status: "Ongoing",
        edit: (
          <NavLink to="suggestions-edit-QNS" class="btn btn-primary">
            <i class="bi bi-pencil-fill"></i>
          </NavLink>
        ),
      },
      {
        name: "Overall College Experiences",
        role: "Students,Faculty,Staffs",
        status: "Ongoing",
        edit: (
          <NavLink to="overall-edit-QNS" class="btn btn-primary">
            <i class="bi bi-pencil-fill"></i>
          </NavLink>
        ),
      },
    ],
  };

  return (
    <div className="p-5 ">
      <MDBDataTable striped bordered hover data={data} />
    </div>
  );
};

export default DataTable;
