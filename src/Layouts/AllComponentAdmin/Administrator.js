import React, { useState } from "react";
import "../../sass/index.scss";
import MainHead from "../../components/AdministratorComponents/MainHead";
import SubHead from "../../components/AdministratorComponents/SubHead";
import WholeUserManagement from "./WholeUserManagement";
import DynamicColumnsDemo from "../../components/AdministratorComponents/Table";
import Table from "../../components/AdministratorComponents/Table";
import DataTable from "../../components/AdministratorComponents/DataTable";
import { Button } from "react-bootstrap";

const UserManagement = () => {
 
  return (
    <div>
      <MainHead className="mt-5" topic="Feedback Survey Management" />
      <SubHead SubHead="Create And Manage Survey" />
      <WholeUserManagement />
      <SubHead SubHead="Recently Created Survey" />
      <DataTable />
    </div>
  );
};

export default UserManagement;
