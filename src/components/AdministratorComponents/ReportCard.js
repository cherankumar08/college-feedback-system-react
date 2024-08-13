import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import { Button, ProgressBar } from "react-bootstrap";

const ReportCard = () => {
  var Percent = {
    width: "300px",
    borderRadius: "15px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  };
  var Height = {
    height: "220px",
  };
  var Width = {
    width: "51%",
  };

  var CardHeight = {
    minHeight: "325px",
    background:
      "linear-gradient(88.8deg, rgb(239, 171, 245) 13.4%, rgb(196, 181, 249) 76.3%)",
  };

  const CardDetails = [
    {
      UserRole: "Student",
      Report: "450 out of 985",
      status: "Completed",
      buttonLabel: "view",
      imgURL: "https://img.icons8.com/3d-fluency/94/student-male--v1.png",
    },
    {
      UserRole: "Faculty",
      Report: "142 out of 289",
      status: "Completed",
      buttonLabel: "view",
      imgURL: "https://img.icons8.com/3d-fluency/94/training.png",
    },
    {
      UserRole: "Staffs",
      Report: "97 out of 189",
      status: "Completed",
      buttonLabel: "view",
      imgURL: "https://img.icons8.com/3d-fluency/94/clerk.png",
    },
  ];

  const percentage = 80;

  return (
    <div className="my-5">
      <div className="row">
        <div
          className="mb-3 d-xxl-flex justify-content-xxl-around flex-xxl-row d-xl-flex justify-content-xl-around d-lg-flex d-md-flex justify-content-md-around d-sm-flex d-sm-flex"
          id="smallScreen-margin"
        >
          {CardDetails.map((info, index) => (
            <MDBCard
              id="Report-Card"
              background=""
              className="text-dark mb-3 mx-lg-1"
              style={CardHeight}
              key={index}
            >
              <MDBCardHeader className="fs-5">{info.UserRole}</MDBCardHeader>
              <MDBCardBody>
                <MDBCardText>
                  <img
                    width="94"
                    height="94"
                    src={info.imgURL}
                    alt="student-male--v1"
                  />
                </MDBCardText>
                <MDBCardTitle>{info.Report}</MDBCardTitle>
                <MDBCardText>{info.status}</MDBCardText>
                <MDBCardText>
                  <ProgressBar
                    variant="success"
                    now={80}
                    label={`${percentage}%`}
                  />
                </MDBCardText>

                <MDBCardText>
                  {/* <Button className="border bg-warning">
                    {info.buttonLabel}
                  </Button> */}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
