import React from "react";
import "../../sass/index.scss";
import MainHead from "../../components/AdministratorComponents/MainHead";
import SubHead from "../../components/AdministratorComponents/SubHead";
import WholeUserManagement from "./WholeUserManagement";
import DynamicColumnsDemo from "../../components/AdministratorComponents/Table";
import Table from "../../components/AdministratorComponents/Table";
import DataTable from "../../components/AdministratorComponents/DataTable";
import UserCreateCard from "../../components/AdministratorComponents/UserCreateCard";
import AccountCreated from "../../components/AdministratorComponents/AccountCreated"

const UserManagementPage = () => {
  return (
    <div>
      {/* Heading */}
      <MainHead className="mt-5" topic="Surevy Management" />
      {/* Sub Heading */}
      <SubHead SubHead="Create And Manage Account" />
      {/*  */}
      <div class="row row-cols-1 row-cols-md-2 ps-xxl-5 col-lg-12 col-md-12 row-cols-lg-3 g-4 mt-3 mb-5 justify-content-center">
        <UserCreateCard />
      </div>
      <SubHead SubHead="Recently Created Account" />
      <AccountCreated />
    </div>
  );
};

export default UserManagementPage;
