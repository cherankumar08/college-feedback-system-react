import React from "react";
import { MDBDataTable } from "mdbreact";
import DropDownButtonTable from "../../Buttons/DropDownButtonTable";
import SendReminder from "../../Buttons/SendReminder";
import CourseSurveyAIDS from "../DeptWiseReport/courseSurvey/CourseSurveyAIDS";

const CourseSurveyReportTable = () => {
  const data = {
    columns: [
      { label: "Department", field: "dept", sort: "asc", width: 150 },
      { label: "Total Students", field: "totStd", sort: "asc", width: 150 },
      { label: "Completed", field: "completed", sort: "asc", width: 150 },
      {
        label: "Not Completed",
        field: "notCompleted",
        sort: "asc",
        width: 100,
      },
      {
        label: "Send Reminder",
        field: "reminder",
        sort: "asc",
        width: 100,
      },
      {
        label: "View Report",
        field: "viewreport",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        dept: "Computer Science And Engineering",
        totStd: "150",
        completed: "75",
        notCompleted: "75",
        reminder: <SendReminder />,
        viewreport: <DropDownButtonTable to="cse-report" />,
      },
      {
        dept: "Electronics and Communication Engineering",
        totStd: "180",
        completed: "90",
        notCompleted: "90",
        reminder: <SendReminder />,
        viewreport: <DropDownButtonTable to="ece-report" />,
      },
      {
        dept: "Information Technology",
        totStd: "220",
        completed: "110",
        notCompleted: "110",
        reminder: <SendReminder />,
        viewreport: <DropDownButtonTable to="it-report" />,
      },
      {
        dept: "Mechanical Engineering",
        totStd: "250",
        completed: "130",
        notCompleted: "120",
        reminder: <SendReminder />,
        viewreport: <DropDownButtonTable to="mech-report" />,
      },
      {
        dept: "Civil Engineering",
        totStd: "190",
        completed: "100",
        notCompleted: "90",
        reminder: <SendReminder />,
        viewreport: <DropDownButtonTable to="civil-report" />,
      },
      {
        dept: "Artificial Intelligence And Data Science",
        totStd: "170",
        completed: "80",
        notCompleted: "90",
        reminder: <SendReminder />,
        viewreport: <DropDownButtonTable to="aids-report" />,
      },
    ],
  };

  return (
    <div className="p-5 me-5 table-responsive">
      <MDBDataTable striped bordered data={data} />
    </div>
  );
};

export default CourseSurveyReportTable;
