import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { Nav, Offcanvas } from "react-bootstrap";

const SideBar = ({ UserDetails, menuItems, showSidebar, toggleSidebar }) => {
  return (
    <div className={`sidebar${showSidebar ? " show" : ""}`}>
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        <span className="close-Btn">
          {/* <i class="bi bi-x-circle"></i> */}
        </span>
      </button>
      <div className="sidebar-content">
        <>
          <nav>
            <Offcanvas.Title className="KIOT">
              Knowledge Institute Of Technology
            </Offcanvas.Title>
            <a
              href="#"
              className="align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none text-light mt-3"
            >
              <div className="identification_card d-flex  ms-3 mt-3 mb-3">
                <span className="mt-0">
                  <i className="bi bi-person-circle text-dark display-5 me-3"></i>
                </span>
                <div>
                  {UserDetails.map((user, index) => (
                    <div key={index}>
                      <p className="fs-6  text-dark mb-0">{user.userName}</p>
                      <p className="fs-6 text-dark">{user.userID}</p>
                    </div>
                  ))}
                </div>
              </div>
            </a>
            <ul className="nav nav-pills flex-column mb-auto">
              {menuItems.map((item, index) => (
                <li className="nav-item li-style" key={index}>
                  <Link to={item.to} className="px-3 nav-link">
                    <span>
                      {/* Menu item icon */}
                      <i className={`bi ${item.icon} text-dark me-2`}></i>
                    </span>
                    {/* Menu item label */}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      </div>
    </div>
  );
};

export default SideBar;
