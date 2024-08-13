import React from "react";
import { Route, Routes } from "react-router-dom";
import CourseSurvey from "../components/CourseSurvey";
import InstructorSurvey from "../components/AdministratorComponents/DeptWiseReport/instructorSurvey/Charts/InstructorSurvey";
import CampusFacilities from "../Layouts/CampusFacilities";
import CampusServices from "../Layouts/CampusServices";
import ExtracurricularActivities from "../Layouts/ExtracurricularActivities";
import StudentProfile from "../Layouts/Profile/StudentProfile";
import OverallExperiences from "../components/AdministratorComponents/OverallExperiences/OverallExpMain";
import Anonymous from "../Layouts/Anonymous";
import InstructorSurveyQuestions from "../components/InstructorSurveyQuestions";
import FacultyOverallExpTabs from "../users/Faculty/FacultyComponents/components/overallexperiences/FacultyOverallExpTabs";
import OverallSurvey from "../components/AdministratorComponents/DeptWiseReport/overallSurvey/Charts/OverallSurvey";

const StudentRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/student" element={<CourseSurvey />} />
        <Route
          path="Instructor-Survey"
          element={<InstructorSurveyQuestions />}
        />
        <Route path="CampusFacilities-Survey" element={<CampusFacilities />} />
        <Route path="CampusServices-Survey" element={<CampusServices />} />
        <Route
          path="Extracurricular-Activities"
          element={<ExtracurricularActivities />}
        />
        <Route path="Overall-Survey" element={<FacultyOverallExpTabs />} />
        <Route path="Student-Profile" element={<StudentProfile />} />
        <Route path="Anonymous-Survey" element={<Anonymous />} />
      </Routes>
    </div>
  );
};

export default StudentRouter;
