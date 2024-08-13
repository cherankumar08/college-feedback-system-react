import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function DropDownButtonWithUser({ links }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <i className="bi bi-file-earmark-text"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {links.map((link, index) => (
          <Dropdown.Item key={index} as={Link} to={link.to}>
            {link.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownButtonWithUser;
