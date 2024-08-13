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
import StaffDetailsProfile from "../Layouts/Profile/StaffDetailsProfile";

const StaffRouter = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<CampusFacilitiesStaff />}
        />
        <Route path="CampusServices-Survey" element={<CampusServicesTabs />} />
        <Route
          path="Extracurricular-Activities"
          element={<ExtracurricularTabs />}
        />
        <Route path="Overall-Survey" element={<OverallExpTabs />} />
        <Route path="Staff-Profile" element={<StaffDetailsProfile />} />{" "}
        <Route path="suggestions&improvement" element={<SuggestionTabs />} />
      </Routes>
    </div>
  );
};

export default StaffRouter;
