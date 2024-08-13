import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./components/ProfileModals/ProfileDetailsShow";
import courseReducer from "./Slice/CourseSurveySlice";
// Instructor Survey GET Slice GET
import instructorsurvey from "./Slice/instructorSurveygetSlice";
import surveyReducer from "./Slice/surveyQnSlice";
import courseQuestionsReducer from "./Slice/courseQuestionsSlice";
import studentDetailsReducer from "./Slice/studentDetailsSlice";
import profileReducer from "./Slice/profileSlice";
import authuserReducer from "./Slice/authuserSlice";
import userReducer from "./Slice/UserCRUD";
import FacultyReducer from "./Slice/FacultySlice";
import chartReducer from "./Slice/chartSlice";
import chartSlice from "./Slice/chartSlice";
import tableSlice from "./Slice/tableSlice";
import staffServicesReducer from "./Slice/staffServicesSlice"; // Import your reducer
import instructorSurveyQnReducer from "./Slice/instructorSurveyQnSlice"; // Import your slice reducer here
import campusFacilitiesQnReducer from "./Slice/CampusFacilitiesSlice";
import CampusServicesQnReducer from "./Slice/CampusServicesSlice"
import ExtracurricularQnReducer from "./Slice/ExtracurricularSlice"
import OverallReducer from "./Slice/OverallexpQnSlice"
import SuggestionQnReducer from "./Slice/SuggestionSlice"
import loginuserReducer from "./Slice/loginslice";
import StaffReducer from "./Slice/staffSlice"


// import profileReducer from "./path/to/profileSlice";

const store = configureStore({
  reducer: {
    // For Authentication
    authuser: authuserReducer,
    // For the User CRUD methods
    details: userReducer,
    FacultyDetails: FacultyReducer,
    StaffDetails: StaffReducer,
    // For the Profile Show
    // profile: profileReducer,
    profiles: profileReducer,
    // For the Chart JS
    chart: chartReducer,
    // For the Table Slice
    response: tableSlice,

    student: studentReducer,
    courseQuestions: courseQuestionsReducer,
    courseSurvey: courseReducer,
    survey: surveyReducer,
    studentDetails: studentDetailsReducer,

    // For the Login Authentication
    // loginuser: loginReducer,
    loginuser: loginuserReducer,

    // Chart JS
    data: chartSlice,
    // For the Instruuctor Survey
    instructorquestions: instructorSurveyQnReducer,
    instructorSurveyGet: instructorsurvey,
    // For the Campus Facilities Survey
    campusfacilities: campusFacilitiesQnReducer,
    // For the Campus Services Survey
    campusServices: CampusServicesQnReducer,
    // For the Extracurricular Survey
    extracurricularActivities: ExtracurricularQnReducer,
    // For the Survey on Suggestions and Improvemnets
    surveyOnSuggestion: SuggestionQnReducer,
    // For the Overall Experiences
    overallquestions: OverallReducer,

    // For the Staff Survey CRUD
    staffServices: staffServicesReducer, // Add your reducer to the store
  },
});

export default store;
