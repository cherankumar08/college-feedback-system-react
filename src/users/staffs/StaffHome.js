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
import Messages from "../../components/Messages";
import "../../sass/index.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import SideBar from "../../components/SideBar";
import MyTabsComponent from "../../components/MyTabsComponent";
import CampusFacilities from "../../Layouts/CampusFacilities";
import CampusFacilitiesStaff from "./components/campusFacilities/CampusFacilitiesStaff";
import CampusServicesTab from "./components/campusFacilities/campusServices/CampusServicesTab";
import ExtracurricularActivities from "../../Layouts/ExtracurricularActivities";
import ExtracurricularTabs from "./components/extracurricularstaffs/ExtracurricularTabs";
import OverallExpTabs from "./components/overallexperiences/OverallExpTabs"

const StaffHome = () => {
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
      label: "Campus Facilities",
      to: "/CampusFacilities-Survey",
      icon: "bi-building",
    },
    {
      label: "Services Feedback",
      to: "/CampusServices-Survey",
      icon: "bi-chat-text",
    },
    {
      label: "Extracurricular Feedback",
      to: "/Staffs-Extracurricular-Activities",
      icon: "bi-trophy",
    },
    {
      label: "Overall Experiences",
      to: "/Staffs-Overall-Survey",
      icon: "bi-journal-text",
    },
    {
      label: "Survey on Suggestion and Improvements",
      to: "/Staffs-suggestions-Survey",
      icon: "bi-shield-shaded",
    },
    { label: "Profile", to: "/staffs-Profile", icon: "bi-person-badge" },
    { label: "Log out", to: "#log-out", icon: "bi-box-arrow-right" },
  ];

  const UserDetails = [{ userName: "John Doe", userID: "KIOTSTAFF001" }];

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
              <NavDropdown
                title="Profile"
                id="basic-nav-dropdown"
                className="px-3"
              >
                <NavDropdown.Item href="#action/3.1">View</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Notifications show={Notificationshow} onHide={NotificationhandleClose} />
      <Messages showMsg={Messageshow} onHideMsg={MessagehandleClose} />
      {/* Render sidebar only if sideShow is true */}
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
        <Routes>
          <Route
            path="/CampusFacilities-Survey"
            element={<CampusFacilitiesStaff />}
          />
          <Route
            path="/CampusServices-Survey"
            element={<CampusServicesTab />}
          />
          <Route
            path="/Extracurricular-Activities"
            element={<ExtracurricularTabs />}
          />
          <Route
            path="/Student-Profile"
            // element={<StudentProfile />}
          />
          <Route path="/Overall-Survey" element={<OverallExpTabs />} />
          <Route
            path="/Anonymous-Survey"
            // element={<Anonymous />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default StaffHome;
