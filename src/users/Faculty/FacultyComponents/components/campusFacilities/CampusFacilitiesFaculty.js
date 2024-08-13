import React, { useState } from "react";
import MyTabsComponent from "../../../../../components/MyTabsComponent";
import SurveyTitle from "../../../../../components/SurveyTitle";
import TimerComponent from "../../../../../components/TimerComponent";
import FacultyCampusFacilitiesT1 from "./FacultyCampusFacilitiesT1";
import FacultyCampusFacilitiesT2 from "./FacultyCampusFacilitiesT2";
import FacultyCampusFacilitiesT3 from "./FacultyCampusFacilitiesT3";

function CampusFacilitiesFaculty() {
  const [activeTab, setActiveTab] = useState("home");

  // Used to Provide the Labels and IDs for the tabs
  const tabs = [
    {
      id: "Library",
      label: "Library",
      content: <FacultyCampusFacilitiesT1 />,
    },
    {
      id: "Laboratories",
      label: "Laboratories",
      content: <FacultyCampusFacilitiesT2 />,
    },
    {
      id: "Support Services",
      label: "Support Services",
      content: <FacultyCampusFacilitiesT3 />,
    },
  ];

  // Used to handle to change of the tabs when i click the tabs based on the Above Tab IDs
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <SurveyTitle SurveyTitle="Campus Facilities" />
      <TimerComponent initialTime={19500} />

      <MyTabsComponent
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </div>
  );
}

export default CampusFacilitiesFaculty;
