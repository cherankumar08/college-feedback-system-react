import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Notifications from "../components/Notifications";
import Messages from "../components/Messages";
import "../components/SideBar.scss";
import "../sass/index.scss";
import SideBar from "../components/SideBar";
import UserManagement from "../Layouts/AllComponentAdmin/Administrator";
import UserManagementPage from "../Layouts/AllComponentAdmin/UserManagementPage";
import FeedbackAnalysisAndReport3 from "../Layouts/AllComponentAdmin/FeedbackAnalysisAndReport3";
import CourseSurveyMain from "../components/AdministratorComponents/CourseSurveyReports/CourseSurveyMain";
import InstructorSurevyReportMain from "../components/AdministratorComponents/InstructorSurveyReports/InstructorSurevyReportMain";
import CampusFacilitiesReportMain from "../components/AdministratorComponents/CampusFacilitiesFeedback/CampusFacilitiesReportMain";
import ServicesFeedbackMain from "../components/AdministratorComponents/ServicesFeedback/ServicesFeedbackMain";
import ExtracurricularFeedbackMain from "../components/AdministratorComponents/ExtracurricularActivities/ExtracurricularFeedbackMain";
import OverallExpMain from "../components/AdministratorComponents/OverallExperiences/OverallExpMain";
import SuggestionReportMain from "../components/SuggestionReport/SuggestionReportMain";
import CreateSurvey from "../components/SurveyCreation/CreateSurvey";
import SurveyCreationMain from "../components/SurveyCreation/SurveyCreationMain";
import SurveyCreationFaculty from "../components/SurveyCreation/SurveyCreationFaculty";
import SurveyCreationStaffs from "../components/SurveyCreation/SurveyCreationStaff";
import StudentProfileCreation from "../components/profileCreate/StudentProfileCreation";
import FacultyProfileCreation from "../components/profileCreate/FacultyProfileCreation";
import StaffsProfileCreation from "../components/profileCreate/StaffsProfileCreation";
import AdminProfileCreation from "../components/profileCreate/AdminProfileCreation";
import DeptSubReport from "../components/AdministratorComponents/DeptWiseReport/courseSurvey/DeptSubReport";
import InsDeptWise from "../components/AdministratorComponents/DeptWiseReport/instructorSurvey/InsDeptWise";
import FacilitiesDept from "../components/AdministratorComponents/CampusFacilitiesFeedback/FacilitiesDept";
import TabsServices from "../components/AdministratorComponents/CampusServicesFeedback/TabContents/TabsServices";
import ServicesDeptWise from "../components/AdministratorComponents/CampusServicesFeedback/ServicesDeptWise";
import DeptWiseExtra from "../components/AdministratorComponents/Extracurricular/DeptWiseExtra";
import OverallDeptWise from "../components/AdministratorComponents/DeptWiseReport/overallSurvey/OverallDeptWise";
import SuggestionDeptWise from "../components/AdministratorComponents/DeptWiseReport/SuggestionSurvey/SuggestionDeptWise";
import StudentSurvey from "../components/SurveyCreation/StudentSurvey";
import StaffsSurvey from "../components/SurveyCreation/StaffsSurvey";
import FacultySurvey from "../components/SurveyCreation/FacultySurvey";
import SurveyEdit from "../components/SurveyCreation/SurveyEdit";

const Administrator = () => {
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
      to: "/feedback-survey-management",
      icon: "bi bi-bar-chart-line",
    },
    {
      label: "User Management",
      to: "/user-management",
      icon: "bi bi-person",
    },
    {
      label: "Feedback Analysis and Report",
      to: "/feedback-analysis-report",
      icon: "bi bi-bar-chart-line",
    },
    {
      label: "Course Survey Reports",
      to: "/course-survey",
      icon: "bi bi-file-text",
    },
    {
      label: "Instructor Survey Reports",
      to: "/instructor-survey",
      icon: "bi bi-person-check",
    },
    {
      label: "Campus Facilities Feedback",
      to: "/campus-facilities-feedback",
      icon: "bi bi-building",
    },
    {
      label: "Services Feedback Reports",
      to: "/campus-services-feedback",
      icon: "bi bi-chat-text",
    },
    {
      label: "Extracurricular Feedback Reports",
      to: "/extracurricular-feedback",
      icon: "bi bi-trophy",
    },
    {
      label: "Overall Experiences Feedback Report",
      to: "/overall-experience",
      icon: "bi bi-star",
    },
    {
      label: "Suggestions and Improvement Report",
      to: "/suggestion-and-improvement",
      icon: "bi bi-lightbulb",
    },
    { label: "Profile", to: "/createSurvey", icon: "bi bi-person-badge" },
    { label: "Log out", to: "#log-out", icon: "bi bi-box-arrow-right" },
    { label: "Log out", to: "#log-out", icon: "bi bi-box-arrow-right" },
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
      <BrowserRouter>
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
              path="/feedback-survey-management"
              element={<UserManagement />}
            ></Route>
            {/* Navigation Button for User Management*/}
            {/* Navigation for Student */}
            <Route path="/student-survey-create" element={<StudentSurvey />} />
            {/* Navigation for Faculty */}
            <Route path="/faculty-survey-create" element={<FacultySurvey />} />
            {/* Navigation for Staffs */}
            <Route path="/staff-survey-create" element={<StaffsSurvey />} />
            {/* User Management  */}
            <Route path="/user-management" element={<UserManagementPage />} />
            <Route
              path="/student-account-creation"
              element={<StudentProfileCreation />}
            ></Route>
            <Route
              path="/faculty-account-creation"
              element={<FacultyProfileCreation />}
            ></Route>
            <Route
              path="/staffs-account-creation"
              element={<StaffsProfileCreation />}
            ></Route>
            <Route
              path="/admin-account-creation"
              element={<AdminProfileCreation />}
            ></Route>
            {/* Feedback Analysis And Report   */}
            <Route
              path="/feedback-analysis-report"
              element={<FeedbackAnalysisAndReport3 />}
            />
            {/* Course Survey Reports */}
            <Route path="/course-survey" element={<CourseSurveyMain />} />
            {/* CSE */}
            <Route
              path="/cse-report"
              element={
                <DeptSubReport
                  deptName="Computer Science And Engineering"
                  SubName="Course Survey Report"
                />
              }
            ></Route>
            {/* ECE */}
            <Route
              path="/ece-report"
              element={
                <DeptSubReport
                  deptName="Electrical And Communication Engineering"
                  SubName="Course Survey Report"
                />
              }
            ></Route>
            {/* EEE */}
            <Route
              path="/eee-report"
              element={
                <DeptSubReport
                  deptName="Electrical And Electronics Engineering"
                  SubName="Course Survey Report"
                />
              }
            ></Route>
            {/* Mech */}
            <Route
              path="/mech-report"
              element={
                <DeptSubReport
                  deptName="Mechanical Engineering"
                  SubName="Course Survey Report"
                />
              }
            ></Route>
            {/* IT */}
            <Route
              path="/it-report"
              element={
                <DeptSubReport
                  deptName="Information Technology"
                  SubName="Course Survey Report"
                />
              }
            ></Route>
            {/* Artificial Intelligence and data Science */}
            <Route
              path="/aids-report"
              element={
                <DeptSubReport
                  deptName="Artificial Intelligence And Data Science"
                  SubName="Course Survey Report"
                />
              }
            ></Route>
            {/* Civil*/}
            <Route
              path="/civil-report"
              element={
                <DeptSubReport
                  deptName="Civil Engineering"
                  SubName="Course Survey Report"
                />
              }
            ></Route>
            {/* Instructor Survey Report */}
            <Route
              path="/instructor-survey"
              element={<InstructorSurevyReportMain />}
            />
            {/* CSE Instructor */}
            {/* Instructor CSE */}
            <Route
              path="/cse-ins-report"
              element={
                <InsDeptWise
                  deptName="Computer Science And Engineering"
                  SubName="Instructor Survey Report"
                />
              }
            ></Route>
            ;{/* Instructor ECE */}
            <Route
              path="/ece-ins-report"
              element={
                <InsDeptWise
                  deptName="Electrical And Communication Engineering"
                  SubName="Instructor Survey Report"
                />
              }
            ></Route>
            ;{/* Instructor EEE */}
            <Route
              path="/eee-ins-report"
              element={
                <InsDeptWise
                  deptName="Electrical And Electronics Engineering"
                  SubName="Instructor Survey Report"
                />
              }
            ></Route>
            ;{/* Instructor Mech */}
            <Route
              path="/mech-ins-report"
              element={
                <InsDeptWise
                  deptName="Mechanical Engineering"
                  SubName="Instructor Survey Report"
                />
              }
            ></Route>
            ;{/* Instructor IT */}
            <Route
              path="/it-ins-report"
              element={
                <InsDeptWise
                  deptName="Information Technology"
                  SubName="Instructor Survey Report"
                />
              }
            ></Route>
            ;{/* Instructor Artificial Intelligence and data Science */}
            <Route
              path="/aids-ins-report"
              element={
                <InsDeptWise
                  deptName="Artificial Intelligence And Data Science"
                  SubName="Instructor Survey Report"
                />
              }
            ></Route>
            ;{/* Instructor Civil*/}
            <Route
              path="/civil-ins-report"
              element={
                <DeptSubReport
                  deptName="Civil Engineering"
                  SubName="Instructor Survey Report"
                />
              }
            ></Route>
            {/* Campus Survey Report */}
            <Route
              path="/campus-facilities-feedback"
              element={<CampusFacilitiesReportMain />}
            />
            <Route
              path="/facilities-student"
              element={
                <FacilitiesDept
                  deptName="Computer Science And Engineering-Student"
                  SubName="Campus Facilities Report"
                />
              }
            />
            <Route
              path="/facilities-faculty"
              element={
                <FacilitiesDept
                  deptName="Computer Science And Engineering-Faculty"
                  SubName="Campus Facilities Report"
                />
              }
            />
            <Route
              path="/facilities-staff"
              element={
                <FacilitiesDept
                  deptName="Computer Science And Engineering-Staff"
                  SubName="Campus Facilities Report"
                />
              }
            />
            {/* Campus Survey Reports */}
            <Route
              path="/campus-services-feedback"
              element={<ServicesFeedbackMain />}
            />
            {/* CSE Facilities */}
            <Route
              path="/services-student"
              element={
                <ServicesDeptWise
                  deptName="Computer Science And Engineering-Student"
                  SubName="Campus Services Report"
                />
              }
            />
            <Route
              path="/services-faculty"
              element={
                <ServicesDeptWise
                  deptName="Computer Science And Engineering-Faculty"
                  SubName="Campus Services Report"
                />
              }
            />
            <Route
              path="/services-staff"
              element={
                <ServicesDeptWise
                  deptName="Computer Science And Engineering-Staff"
                  SubName="Campus Services Report"
                />
              }
            />
            {/* ExtraCurricular Reports */}
            <Route
              path="/extracurricular-feedback"
              element={<ExtracurricularFeedbackMain />}
            />
            <Route
              path="/extra-student"
              element={
                <DeptWiseExtra
                  deptName="Computer Science And Engineering-Student"
                  SubName="Campus Services Report"
                />
              }
            />
            <Route
              path="/extra-faculty"
              element={
                <DeptWiseExtra
                  deptName="Computer Science And Engineering-Faculty"
                  SubName="Campus Services Report"
                />
              }
            />
            <Route
              path="/extra-staff"
              element={
                <DeptSubReport
                  deptName="Computer Science And Engineering-Staff"
                  SubName="Campus Services Report"
                />
              }
            />
            {/* Overall Experiences Report */}
            <Route path="/overall-experience" element={<OverallExpMain />} />
            <Route
              path="/overall-student"
              element={
                <OverallDeptWise
                  deptName="Computer Science And Engineering-Student"
                  SubName="Campus Services Report"
                />
              }
            />
            <Route
              path="/overall-faculty"
              element={
                <OverallDeptWise
                  deptName="Computer Science And Engineering-Faculty"
                  SubName="Campus Services Report"
                />
              }
            />
            <Route
              path="/overall-staff"
              element={
                <OverallDeptWise
                  deptName="Computer Science And Engineering-Staff"
                  SubName="Campus Services Report"
                />
              }
            />
            {/* Suggestion Report */}
            <Route
              path="/suggestion-and-improvement"
              element={<SuggestionReportMain />}
            />
            <Route
              path="/suggestions-student"
              element={
                <SuggestionDeptWise
                  deptName="Computer Science And Engineering-Student"
                  SubName="Survey On Suggestions And Improvement"
                />
              }
            />
            <Route
              path="/suggestions-faculty"
              element={
                <SuggestionDeptWise
                  deptName="Computer Science And Engineering-Faculty"
                  SubName="Survey On Suggestions And Improvement"
                />
              }
            />
            <Route
              path="/suggestions-staff"
              element={
                <SuggestionDeptWise
                  deptName="Computer Science And Engineering-Staff"
                  SubName="Survey On Suggestions And Improvement"
                />
              }
            />
            {/* Profile of The Admin */}
            {/* <Route path="/createSurvey" element={<StaffsProfileCreation />} /> */}
            <Route path="/createSurvey" element={<SurveyEdit />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default Administrator;
