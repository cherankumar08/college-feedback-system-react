import React from "react";
import { MDBDataTable } from "mdbreact";

const TrendsTable = () => {
  const data = {
    columns: [
      { label: "User Role", field: "role", sort: "asc", width: 150 },
      { label: "Strength", field: "strength", sort: "asc", width: 150 },
      { label: "Trends", field: "trends", sort: "asc", width: 150 },
      {
        label: "Areas Of Improvement",
        field: "areas",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        role: "Student",
        strength: "Teaching",
        trends: "Positive",
        areas:"Bus Facilities"
      },
      {
        role: "Faculty",
        strength: "Internet Facilities",
        trends: "Positive",
        areas:"Bus Facilities"
      },
      {
        role: "Staffs",
        strength: "Internet Facilities",
        trends: "Positive",
        areas:"Bus Facilities"
      },
    ],
  };

  return (
    <div className="p-5 ">
      <MDBDataTable striped bordered  data={data} />
    </div>
  );
};

export default TrendsTable;
