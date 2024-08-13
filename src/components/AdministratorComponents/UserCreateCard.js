import React from "react";
import { NavLink } from "react-router-dom";
import CardImg from "../../static/assets/course-feedback.jpg";

const UserCreateCard = () => {
  const CardDetails = [
    {
      CardFor: "Student",
      Caption: "Tap To Create The Account",
      Button: "Create Account",
      path: "student-account-creation",
    },
    {
      CardFor: "Faculty",
      Caption: "Tap To Create The Account",
      Button: "Create Account",
      path: "faculty-account-creation",
    },
    {
      CardFor: "Staffs",
      Caption: "Tap To Create The Account",
      Button: "Create Account",
      path: "staffs-account-creation",
    },
    {
      CardFor: "Administrator",
      Caption: "Tap To Create The Account",
      Button: "Create Account",
      path: "admin-account-creation",
    },
  ];

  return (
    <React.Fragment>
      {CardDetails.map((Info, index) => (
        <div className="card h-100 me-lg-1 card-margin mt-5" key={index}>
          <div className="card-body">
            <p className="h5 mb-3 fs-5">{Info.Caption}</p>
            <div className="text-center">
              <NavLink to={Info.path}>
                <button className="btn mt-5 btn-purple">
                  <a className="text-dark text-decoration-none">
                    {Info.Button}
                  </a>
                </button>
              </NavLink>
            </div>
            <p className="h5 text-center mt-5"> {Info.CardFor}</p>
          </div>
          <img
            src={CardImg}
            alt=""
            className="card-image img-hov card-img-top"
          />
        </div>
      ))}
    </React.Fragment>
  );
};

export default UserCreateCard;
