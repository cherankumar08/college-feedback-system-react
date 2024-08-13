import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const DropDownButtonTable = ({ to,element }) => {
  return (
    <Link to={to}>
      <Button variant="secondary">
        <i className="bi bi-file-earmark-text"></i>
      </Button>
    </Link>
  );
};

export default DropDownButtonTable;
