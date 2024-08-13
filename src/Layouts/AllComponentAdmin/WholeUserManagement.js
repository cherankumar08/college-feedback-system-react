import React from "react";
import UserManagementCard from "../../components/AdministratorComponents/UserManagementCard";
import AccountCreated from "../../components/AdministratorComponents/AccountCreated";
import SurveyCards from "../../components/SurveyCreation/Surveycards/SurveyCards";

const WholeUserManagement = () => {
  return (
    // <div class="row row-cols-1 row-cols-md-2 ps-xxl-5 col-lg-12 col-md-12 row-cols-lg-3 g-4 mt-3 mb-5 justify-content-center">

    // </div>

    <div className="d-flex flex-wrap mt-4">
      <SurveyCards />
    </div>
  );
};

export default WholeUserManagement;
