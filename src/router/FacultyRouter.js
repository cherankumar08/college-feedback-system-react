import React from "react";
import { Route, Routes } from "react-router-dom";
import CampusFacilitiesStaff from "../users/staffs/components/campusFacilities/CampusFacilitiesStaff";
import CampusServicesTabs from "../users/staffs/components/campusFacilities/campusServices/CampusServicesTab";
import ExtracurricularActivities from "../Layouts/ExtracurricularActivities";
import StudentProfile from "../Layouts/Profile/StudentProfile";
import Anonymous from "../Layouts/Anonymous";
import ExtracurricularTabs from "../users/staffs/components/extracurricularstaffs/ExtracurricularTabs";
import OverallExpTabs from "../users/staffs/components/overallexperiences/OverallExpTabs";
import SuggestionTabs from "../users/staffs/components/surveyOnSuggestions/SuggestionTabs";
import CampusFacilitiesFaculty from "../users/Faculty/FacultyComponents/components/campusFacilities/CampusFacilitiesFaculty";
import WholeAIDSTable from "../components/AdministratorComponents/DeptWiseReport/courseSurvey/TabContent/courseSurveyAIDS/subjects/WholeAIDSTable";
import TabContentForAIDS from "../components/AdministratorComponents/DeptWiseReport/courseSurvey/TabContent/TabContentForAIDS";
import CourseSurveyReportFaculty from "../users/Faculty/FacultyComponents/components/courseSurveyReports/CourseSurveyReportFaculty";
import InstructorSurveyReportFaculty from "../users/Faculty/FacultyComponents/components/instructorSurveyReports/InstructorSurveyReportFaculty";
import FacultyDetailsProfile from "../Layouts/Profile/FacultyDetailsProfile";

const FacultyRouter = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          // path="/"
          element={<CourseSurveyReportFaculty />}
        />
        <Route
          path="instructor-survey-reports"
          // path="/"
          element={<InstructorSurveyReportFaculty />}
        />
        <Route
          path="CampusFacilities-Survey"
          // path="/"
          element={<CampusFacilitiesFaculty />}
        />
        <Route path="CampusServices-Survey" element={<CampusServicesTabs />} />
        <Route
          path="Extracurricular-Activities"
          element={<ExtracurricularTabs />}
        />
        <Route path="Overall-Survey" element={<OverallExpTabs />} />
        <Route path="faculty-Profile" element={<FacultyDetailsProfile />} />
        <Route path="suggestions&improvement" element={<SuggestionTabs />} />
      </Routes>
    </div>
  );
};

export default FacultyRouter;
