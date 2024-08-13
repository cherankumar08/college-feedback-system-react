import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Notifications from "../../components/Notifications";
import Messages from "../../components/Messages";
import "../../components/SideBar.scss";
import "../../sass/index.scss";
import SideBar from "../../components/SideBar";
const Layout = ({ children }) => {
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

  const menuItems = [
    {
      label: "Feedback Survey Management",
      to: "/admin",
      icon: "bi bi-bar-chart-line",
    },
    {
      label: "User Management",
      to: "user-management",
      icon: "bi bi-person",
    },
    {
      label: "Feedback Analysis and Report",
      to: "feedback-analysis-report",
      icon: "bi bi-bar-chart-line",
    },
    {
      label: "Course Survey Reports",
      to: "course-survey",
      icon: "bi bi-file-text",
    },
    {
      label: "Instructor Survey Reports",
      to: "instructor-survey",
      icon: "bi bi-person-check",
    },
    {
      label: "Campus Facilities Feedback",
      to: "campus-facilities-feedback",
      icon: "bi bi-building",
    },
    {
      label: "Services Feedback Reports",
      to: "campus-services-feedback",
      icon: "bi bi-chat-text",
    },
    {
      label: "Extracurricular Feedback Reports",
      to: "extracurricular-feedback",
      icon: "bi bi-trophy",
    },
    {
      label: "Overall Experiences Feedback Report",
      to: "overall-experience",
      icon: "bi bi-star",
    },
    {
      label: "Suggestions and Improvement Report",
      to: "suggestion-and-improvement",
      icon: "bi bi-lightbulb",
    },
    // { label: "Profile", to: "createSurvey", icon: "bi bi-person-badge" },
    { label: "Log out", to: "/", icon: "bi bi-box-arrow-right" },
    // { label: "Log out", to: "/", icon: "bi bi-box-arrow-right" },
  ];

  const UserDetails = [
    { userName: "Administrator", userID: "admin@kiot.ac.in" },
  ];

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
      {sideShow && (
        <SideBar
          UserDetails={UserDetails}
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

export default Layout;
