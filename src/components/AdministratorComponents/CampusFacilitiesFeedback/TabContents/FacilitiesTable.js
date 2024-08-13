import React from "react";
import { MDBDataTable } from "mdbreact";

const FacilitiesTable = () => {
  const data = {
    columns: [
      {
        label: "StudentID",
        field: "StudentID",
        sort: "asc",
        width: 150,
      },
      {
        label: "Name",
        field: "Name",
        sort: "asc",
        width: 270,
      },
      {
        label: "Subject Name",
        field: "Subject",
        sort: "asc",
        width: 200,
      },
      {
        label: "Question-1",
        field: "Question1",
        sort: "asc",
        width: 100,
      },
      {
        label: "Question-2",
        field: "Question2",
        sort: "asc",
        width: 150,
      },
      {
        label: "Question-3",
        field: "Question3",
        sort: "asc",
        width: 100,
      },
      {
        label: "Question-4",
        field: "Question4",
        sort: "asc",
        width: 100,
      },
      {
        label: "Question-5",
        field: "Question5",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        StudentID: "2k20cse025",
        Name: "CHERAN J",
        Subject: "Instructor-1",
        Question1: "5",
        Question2: "3",
        Question3: "3",
        Question4: "4",
        Question5: "5",
      },
      {
        StudentID: "2k20cse025",
        Name: "AAKASH R",
        Subject: "Instructor-1",
        Question1: "3",
        Question2: "1",
        Question3: "5",
        Question4: "1",
        Question5: "3",
      },
      {
        StudentID: "2k20cse025",
        Name: "ARUN R G",
        Subject: "Instructor-1",
        Question1: "5",
        Question2: "2",
        Question3: "3",
        Question4: "4",
        Question5: "5",
      },
      {
        StudentID: "2k20cse025",
        Name: "CHERAN J",
        Subject: "Instructor-1",
        Question1: "5",
        Question2: "3",
        Question3: "3",
        Question4: "4",
        Question5: "5",
      },
      {
        StudentID: "2k20cse025",
        Name: "AAKASH R",
        Subject: "Instructor-1",
        Question1: "3",
        Question2: "1",
        Question3: "5",
        Question4: "1",
        Question5: "3",
      },
      {
        StudentID: "2k20cse025",
        Name: "ARUN R G",
        Subject: "Instructor-1",
        Question1: "5",
        Question2: "2",
        Question3: "3",
        Question4: "4",
        Question5: "5",
      },
      {
        StudentID: "2k20cse025",
        Name: "CHERAN J",
        Subject: "Instructor-1",
        Question1: "5",
        Question2: "3",
        Question3: "3",
        Question4: "4",
        Question5: "5",
      },
      {
        StudentID: "2k20cse025",
        Name: "AAKASH R",
        Subject: "Instructor-1",
        Question1: "3",
        Question2: "1",
        Question3: "5",
        Question4: "1",
        Question5: "3",
      },
      {
        StudentID: "2k20cse025",
        Name: "ARUN R G",
        Subject: "Instructor-1",
        Question1: "5",
        Question2: "2",
        Question3: "3",
        Question4: "4",
        Question5: "5",
      },
    ],
  };

  return <MDBDataTable striped bordered hover data={data} />;
};

export default FacilitiesTable;
