import React from "react";
import UserManagement from "../Layouts/AllComponentAdmin/Administrator";
import StudentSurvey from "../components/SurveyCreation/StudentSurvey";
import FacultySurvey from "../components/SurveyCreation/FacultySurvey";
import StaffsSurvey from "../components/SurveyCreation/StaffsSurvey";
import UserManagementPage from "../Layouts/AllComponentAdmin/UserManagementPage";
import StudentProfileCreation from "../components/profileCreate/StudentProfileCreation";
import FacultyProfileCreation from "../components/profileCreate/FacultyProfileCreation";
import StaffsProfileCreation from "../components/profileCreate/StaffsProfileCreation";
import AdminProfileCreation from "../components/profileCreate/AdminProfileCreation";
import FeedbackAnalysisAndReport3 from "../Layouts/AllComponentAdmin/FeedbackAnalysisAndReport3";
import CourseSurveyMain from "../components/AdministratorComponents/CourseSurveyReports/CourseSurveyMain";
import DeptSubReport from "../components/AdministratorComponents/DeptWiseReport/courseSurvey/DeptSubReport";
import InsDeptWise from "../components/AdministratorComponents/DeptWiseReport/instructorSurvey/InsDeptWise";
import CampusFacilitiesReportMain from "../components/AdministratorComponents/CampusFacilitiesFeedback/CampusFacilitiesReportMain";
import FacilitiesDept from "../components/AdministratorComponents/CampusFacilitiesFeedback/FacilitiesDept";
import ServicesFeedbackMain from "../components/AdministratorComponents/ServicesFeedback/ServicesFeedbackMain";
import DeptWiseExtra from "../components/AdministratorComponents/Extracurricular/DeptWiseExtra";
import ExtracurricularFeedbackMain from "../components/AdministratorComponents/ExtracurricularActivities/ExtracurricularFeedbackMain";
import OverallDeptWise from "../components/AdministratorComponents/DeptWiseReport/overallSurvey/OverallDeptWise";
import SuggestionReportMain from "../components/SuggestionReport/SuggestionReportMain";
import SuggestionDeptWise from "../components/AdministratorComponents/DeptWiseReport/SuggestionSurvey/SuggestionDeptWise";
import SurveyEdit from "../components/SurveyCreation/SurveyEdit";
import { Route, Routes } from "react-router-dom";
import ServicesDeptWise from "../components/AdministratorComponents/CampusServicesFeedback/ServicesDeptWise";
import OverallExpMain from "../components/AdministratorComponents/OverallExperiences/OverallExpMain";
import InstructorSurevyReportMain from "../components/AdministratorComponents/InstructorSurveyReports/InstructorSurevyReportMain";
import StudentDatatable from "../Layouts/Profile/StudentDatatable";
import Sample from "../components/AdministratorComponents/Dummy/Sample";
import StudentProfileRedux from "../components/profileCreate/StudentProfileRedux";
import InstructorSurveyEdit from "../components/SurveyCreation/InstructorSurveyEdit";
import ServicesEdit from "../components/SurveyCreation/staffQuestionCreation/campusFacilities/editModals/ServicesEdit";
import CampusServicesEdit from "../components/SurveyCreation/CampusServicesEdit";
import CampusfacilitiesEdit from "../components/SurveyCreation/CampusfacilitiesEdit";
import ExtracurricularEdit from "../components/SurveyCreation/ExtracurricularEdit";
import OverallExpEdit from "../components/SurveyCreation/OverallExpEdit";
import SuggestionEdit from "../components/SurveyCreation/SuggestionEdit";
import FacultyProfileRedux from "../components/profileCreate/FacultyProfileRedux";
import CampusServicesCreation from "../components/SurveyCreation/CampusServicesCreation";
import InstructorSurveyCreation from "../components/SurveyCreation/InstructorSurveyCreation";
import CampusFacilitiesCreation from "../components/SurveyCreation/CampusFacilitiesCreation";
import ExtracurricularCreation from "../components/SurveyCreation/ExtracurricularCreation";
import SuggestionSurveyCreation from "../components/SurveyCreation/SuggestionSurveyCreation";

const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserManagement />} />
        {/* Navigation Button for User Management*/}
        {/* Navigation for Student */}
        <Route path="student-survey-create" element={<StudentSurvey />} />
        {/* Navigation for Faculty */}
        <Route path="faculty-survey-create" element={<FacultySurvey />} />
        {/* Navigation for Staffs */}
        <Route path="staff-survey-create" element={<StaffsSurvey />} />
        {/* User Management  */}
        <Route path="user-management" exact element={<UserManagementPage />} />
        <Route
          path="user-management/student-account-creation"
          element={<StudentProfileRedux />}
        />
        <Route
          path="user-management/faculty-account-creation"
          element={<FacultyProfileRedux />}
        ></Route>
        <Route
          path="user-management/staffs-account-creation"
          element={<StaffsProfileCreation />}
        ></Route>
        <Route
          path="user-management/admin-account-creation"
          element={<AdminProfileCreation />}
        ></Route>
        {/* Feedback Analysis And Report   */}
        <Route
          path="feedback-analysis-report"
          element={<FeedbackAnalysisAndReport3 />}
        />
        {/* Course Survey Reports */}
        <Route path="course-survey" element={<CourseSurveyMain />} />
        {/* CSE */}
        <Route
          path="course-survey/cse-report"
          element={
            <DeptSubReport
              deptName="Computer Science And Engineering"
              SubName="Course Survey Report"
            />
          }
        ></Route>
        {/* ECE */}
        <Route
          path="course-survey/ece-report"
          element={
            <DeptSubReport
              deptName="Electrical And Communication Engineering"
              SubName="Course Survey Report"
            />
          }
        ></Route>
        {/* EEE */}
        <Route
          path="course-survey/eee-report"
          element={
            <DeptSubReport
              deptName="Electrical And Electronics Engineering"
              SubName="Course Survey Report"
            />
          }
        ></Route>
        {/* Mech */}
        <Route
          path="course-survey/mech-report"
          element={
            <DeptSubReport
              deptName="Mechanical Engineering"
              SubName="Course Survey Report"
            />
          }
        ></Route>
        {/* IT */}
        <Route
          path="course-survey/it-report"
          element={
            <DeptSubReport
              deptName="Information Technology"
              SubName="Course Survey Report"
            />
          }
        ></Route>
        {/* Artificial Intelligence and data Science */}
        <Route
          path="course-survey/aids-report"
          element={
            <DeptSubReport
              deptName="Artificial Intelligence And Data Science"
              SubName="Course Survey Report"
            />
          }
        ></Route>
        {/* Civil*/}
        <Route
          path="course-survey/civil-report"
          element={
            <DeptSubReport
              deptName="Civil Engineering"
              SubName="Course Survey Report"
            />
          }
        ></Route>
        {/* Instructor Survey Report */}
        <Route
          path="instructor-survey"
          element={<InstructorSurevyReportMain />}
        />
        {/* CSE Instructor */}
        {/* Instructor CSE */}
        <Route
          path="instructor-survey/cse-ins-report"
          element={
            <InsDeptWise
              deptName="Computer Science And Engineering"
              SubName="Instructor Survey Report"
            />
          }
        ></Route>
        ;{/* Instructor ECE */}
        <Route
          path="instructor-survey/ece-ins-report"
          element={
            <InsDeptWise
              deptName="Electrical And Communication Engineering"
              SubName="Instructor Survey Report"
            />
          }
        ></Route>
        ;{/* Instructor EEE */}
        <Route
          path="instructor-survey/eee-ins-report"
          element={
            <InsDeptWise
              deptName="Electrical And Electronics Engineering"
              SubName="Instructor Survey Report"
            />
          }
        ></Route>
        ;{/* Instructor Mech */}
        <Route
          path="instructor-survey/mech-ins-report"
          element={
            <InsDeptWise
              deptName="Mechanical Engineering"
              SubName="Instructor Survey Report"
            />
          }
        ></Route>
        ;{/* Instructor IT */}
        <Route
          path="instructor-survey/it-ins-report"
          element={
            <InsDeptWise
              deptName="Information Technology"
              SubName="Instructor Survey Report"
            />
          }
        ></Route>
        ;{/* Instructor Artificial Intelligence and data Science */}
        <Route
          path="instructor-survey/aids-ins-report"
          element={
            <InsDeptWise
              deptName="Artificial Intelligence And Data Science"
              SubName="Instructor Survey Report"
            />
          }
        ></Route>
        ;{/* Instructor Civil*/}
        <Route
          path="instructor-survey/civil-ins-report"
          element={
            <DeptSubReport
              deptName="Civil Engineering"
              SubName="Instructor Survey Report"
            />
          }
        ></Route>
        {/* Campus Facilities Report */}
        <Route
          path="campus-facilities-feedback"
          element={<CampusFacilitiesReportMain />}
        />
        <Route
          path="campus-facilities-feedback/facilities-student"
          element={
            <FacilitiesDept
              deptName="Computer Science And Engineering-Student"
              SubName="Campus Facilities Report"
            />
          }
        />
        <Route
          path="campus-facilities-feedback/facilities-faculty"
          element={
            <FacilitiesDept
              deptName="Computer Science And Engineering-Faculty"
              SubName="Campus Facilities Report"
            />
          }
        />
        <Route
          path="campus-facilities-feedback/facilities-staff"
          element={
            <FacilitiesDept
              deptName="Computer Science And Engineering-Staff"
              SubName="Campus Facilities Report"
            />
          }
        />
        {/* Campus Survey Reports */}
        <Route
          path="campus-services-feedback"
          element={<ServicesFeedbackMain />}
        />
        {/* CSE Facilities */}
        <Route
          path="campus-services-feedback/services-student"
          element={
            <ServicesDeptWise
              deptName="Computer Science And Engineering-Student"
              SubName="Campus Services Report"
            />
          }
        />
        <Route
          path="campus-services-feedback/services-faculty"
          element={
            <ServicesDeptWise
              deptName="Computer Science And Engineering-Faculty"
              SubName="Campus Services Report"
            />
          }
        />
        <Route
          path="campus-services-feedback/services-staff"
          element={
            <ServicesDeptWise
              deptName="Computer Science And Engineering-Staff"
              SubName="Campus Services Report"
            />
          }
        />
        {/* ExtraCurricular Reports */}
        <Route
          path="extracurricular-feedback"
          element={<ExtracurricularFeedbackMain />}
        />
        <Route
          path="extracurricular-feedback/extra-student"
          element={
            <DeptWiseExtra
              deptName="Computer Science And Engineering-Student"
              SubName="Campus Services Report"
            />
          }
        />
        <Route
          path="extracurricular-feedback/extra-faculty"
          element={
            <DeptWiseExtra
              deptName="Computer Science And Engineering-Faculty"
              SubName="Campus Services Report"
            />
          }
        />
        <Route
          path="extracurricular-feedback/extra-staff"
          element={
            <DeptSubReport
              deptName="Computer Science And Engineering-Staff"
              SubName="Campus Services Report"
            />
          }
        />
        {/* Overall Experiences Report */}
        <Route path="overall-experience" element={<OverallExpMain />} />
        <Route
          path="overall-experience/overall-student"
          element={
            <OverallDeptWise
              deptName="Computer Science And Engineering-Student"
              SubName="Campus Services Report"
            />
          }
        />
        <Route
          path="overall-experience/overall-faculty"
          element={
            <OverallDeptWise
              deptName="Computer Science And Engineering-Faculty"
              SubName="Campus Services Report"
            />
          }
        />
        <Route
          path="overall-experience/overall-staff"
          element={
            <OverallDeptWise
              deptName="Computer Science And Engineering-Staff"
              SubName="Campus Services Report"
            />
          }
        />
        {/* Suggestion Report */}
        <Route
          path="suggestion-and-improvement"
          element={<SuggestionReportMain />}
        />
        <Route
          path="suggestion-and-improvement/suggestions-student"
          element={
            <SuggestionDeptWise
              deptName="Computer Science And Engineering-Student"
              SubName="Survey On Suggestions And Improvement"
            />
          }
        />
        <Route
          path="suggestion-and-improvement/suggestions-faculty"
          element={
            <SuggestionDeptWise
              deptName="Computer Science And Engineering-Faculty"
              SubName="Survey On Suggestions And Improvement"
            />
          }
        />
        <Route
          path="suggestions-staff"
          element={
            <SuggestionDeptWise
              deptName="Computer Science And Engineering-Staff"
              SubName="Survey On Suggestions And Improvement"
            />
          }
        />
        {/* Profile of The Admin */}
        {/* <Route path="createSurvey" element={<StaffsProfileCreation />} /> */}
        <Route path="/edit-survey" element={<SurveyEdit />} />
        <Route
          path="/instructor-survey-editQNS"
          element={<InstructorSurveyEdit />}
        />
        <Route path="/services-edit-QNS" element={<CampusServicesEdit />} />
        <Route path="/facilities-edit-QNS" element={<CampusfacilitiesEdit />} />
        <Route
          path="/extracurricular-edit-QNS"
          element={<ExtracurricularEdit />}
        />
        <Route path="/overall-edit-QNS" element={<OverallExpEdit />} />
        <Route path="/suggestions-edit-QNS" element={<SuggestionEdit />} />
        {/* Cards for the Create Surevy */}
        <Route path="courseSurveyCreation" element={<StudentSurvey />} />
        <Route
          path="instructor-survey-creation"
          element={<InstructorSurveyCreation />}
        />
        <Route
          path="campus-facilities-creation"
          element={<CampusFacilitiesCreation />}
        />
        <Route
          path="campus-services-creation"
          element={<CampusServicesCreation />}
        />
        <Route
          path="extracurricular-activities-creation"
          element={<ExtracurricularCreation />}
        />
        <Route
          path="suggestions-and-improvement-creation"
          element={<SuggestionSurveyCreation />}
        />
      </Routes>
    </div>
  );
};

export default AdminRouter;
