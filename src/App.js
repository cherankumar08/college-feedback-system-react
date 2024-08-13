import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Input from "./Input";
import Table from "./Table";
import TopNav from "./components/TopNav";
import Administrator from "./pages/Administrator";
import Nested from "./components/Nested";
import SurveyForm from "./components/SurveyCreation/CreateSurvey";
import StaffHome from "./users/staffs/StaffHome";
import LoginForm from "./login/LoginForm";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./Layouts/routeLayout/Layout";
import AdminRouter from "./router/AdminRouter";
import CourseSurvey from "./components/CourseSurvey";
import StdLayout from "./Layouts/routeLayout/StdLayout";
import StudentRouter from "./router/StudentRouter";
import StaffsLayout from "./Layouts/routeLayout/StaffsLayout";
import StaffRouter from "./router/StaffRouter";
import FacultyLayout from "./Layouts/routeLayout/FacultyLayout";
import FacultyRouter from "./router/FacultyRouter";
import StudentProfileRedux from "./components/profileCreate/StudentProfileRedux";
import StaffSurveyCreation from "./components/SurveyCreation/staffQuestionCreation/campusFacilities/StaffSurveyCreation";
import InstructorSurveyCreation from "./components/SurveyCreation/InstructorSurveyCreation";
import InstructorSurveyEdit from "./components/SurveyCreation/InstructorSurveyEdit";
import CampusFacilitiesCreation from "./components/SurveyCreation/CampusFacilitiesCreation";
import CampusServicesCreation from "./components/SurveyCreation/CampusServicesCreation";
import CampusServicesEdit from "./components/SurveyCreation/CampusServicesEdit";
import ExtracurricularCreation from "./components/SurveyCreation/ExtracurricularCreation";
import ExtracurricularEdit from "./components/SurveyCreation/ExtracurricularEdit";
import SuggestionEdit from "./components/SurveyCreation/SuggestionEdit";
import SuggestionSurveyCreation from "./components/SurveyCreation/SuggestionSurveyCreation";
import SurveyCards from "./components/SurveyCreation/Surveycards/SurveyCards";
import DummyTest from "./DummyTest";
import FacultyProfileRedux from "./components/profileCreate/FacultyProfileRedux";
// import Header from './components/Header';
// import TobeChange from '../src/components/TobeChange';

function App() {
  return (
    // <div className="App">
    // {/* <TopNav /> */}
    //   {/* <Header/> */}
    //   {/* <TobeChange/> */}
    //   <Administrator />
    //   {/* <Nested/> */}
    //   {/* <Input/> */}
    //   {/* <SurveyForm/> */}
    //   {/* <StaffHome /> */}
    //   {/* <LoginForm /> */}
    // </div>

    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route
        path="/student/*"
        element={
          <StdLayout>
            <StudentRouter />
          </StdLayout>
        }
      />
      <Route
        path="/faculty/*"
        element={
          <FacultyLayout>
            <FacultyRouter />
          </FacultyLayout>
        }
      />
      <Route
        path="/staff/*"
        element={
          <StaffsLayout>
            <StaffRouter />
          </StaffsLayout>
        }
      />
      <Route
        path="/admin/*"
        element={
          <Layout>
            <AdminRouter />
          </Layout>
        }
      />
    </Routes>

    // <div>
    //   {/* <CampusServicesEdit /> */}
    //   {/* <CampusServicesCreation /> */}
    //   {/* <ExtracurricularCreation/> */}
    //   {/* <ExtracurricularEdit /> */}
    //   {/* <SuggestionEdit /> */}
    //   {/* <SuggestionSurveyCreation /> */}
    //   <SurveyCards />
    // </div>
    // <div>
    //   <FacultyProfileRedux />
    // </div>
  );
}

export default App;
