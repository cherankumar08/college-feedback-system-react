import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Notifications from "../../components/Notifications";
import Messages from "./../../components/Messages";
import "../../sass/index.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import SideBar from "../../components/SideBar";

const StdLayout = ({ children }) => {
  const [Notificationshow, NotificationsetShow] = useState(false);
  const NotificationhandleClose = () => NotificationsetShow(false);
  const NotificationhandleShow = () => NotificationsetShow(true);

  const [Messageshow, MessagesetShow] = useState(false);
  const MessagehandleClose = () => MessagesetShow(false);
  const MessagehandleShow = () => MessagesetShow(true);

  const [sideShow, setSideShow] = useState(true);

  // Initialize sidebar visibility state
  const [showSidebar, setShowSidebar] = useState(false);
  // Detect if the device is desktop
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // Effect to detect window resize and update isDesktop state accordingly
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define my menu items for Studnet sidebar
  const menuItems = [
    {
      label: "Course Survey",
      to: "student",
      icon: "bi-bar-chart-line",
    },
    {
      label: "Instructor Survey",
      to: "Instructor-Survey",
      icon: "bi-person-check",
    },
    {
      label: "Campus Facilities",
      to: "CampusFacilities-Survey",
      icon: "bi-building",
    },
    {
      label: "Services Feedback",
      to: "CampusServices-Survey",
      icon: "bi-chat-text",
    },
    {
      label: "Extracurricular Feedback",
      to: "Extracurricular-Activities",
      icon: "bi-trophy",
    },
    {
      label: "Overall Experiences",
      to: "Overall-Survey",
      icon: "bi-journal-text",
    },
    {
      label: "Anonymous Feedback",
      to: "Anonymous-Survey",
      icon: "bi-shield-shaded",
    },
    { label: "Profile", to: "Student-Profile", icon: "bi-person-badge" },
    { label: "Log out", to: "/", icon: "bi-box-arrow-right" },
  ];

  // Define user details
  const defaultUserDetails = [
    { userName: "CHERAN J", userID: "2k20cse025@kiot" },
  ];
  // Conditional user details
  const conditionalUserDetails = [
    { userName: "AAKASH R", userID: "2k20cse001@kiot" },
  ];

  // State to store user details
  const [userDetails, setUserDetails] = useState(defaultUserDetails);

  useEffect(() => {
    const username = localStorage.getItem("username");
    console.log("Username:", username);

    // Check if username is student@example.com
    if (username === "2k20cse001@kiot.ac.in") {
      setUserDetails(conditionalUserDetails);
    } else {
      setUserDetails(defaultUserDetails);
    }
  }, []);

  return (
    <div>
      <Navbar expand="lg" className="bg-purple tobeFixed">
        <div className="container-fluid">
          {!isDesktop && (
            <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
              <i className="bi bi-list"></i>
            </button>
          )}
          <Navbar.Brand href="#home">College Feedback System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end me-5"
          >
            <Nav>
              <Nav.Link
                href="#home"
                className="px-3"
                onClick={NotificationhandleShow}
              >
                Notifications
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="px-3"
                onClick={MessagehandleShow}
              >
                Messages
              </Nav.Link>
              {/* <NavDropdown
                title="Profile"
                id="basic-nav-dropdown"
                className="px-3"
              >
                <NavDropdown.Item href="#action/3.1">View</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Log Out</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Notifications show={Notificationshow} onHide={NotificationhandleClose} />
      <Messages showMsg={Messageshow} onHideMsg={MessagehandleClose} />
      {/* Render sidebar only if sideShow is true */}
      {sideShow && (
        <SideBar
          UserDetails={userDetails} // Pass userDetails here
          menuItems={menuItems}
          showSidebar={showSidebar}
          toggleSidebar={toggleSidebar}
        />
      )}
      <main
        style={{ paddingLeft: isDesktop && showSidebar ? "250px" : 0 }}
        className=""
      >
        {children}
      </main>
    </div>
  );
};

export default StdLayout;
