import React, { useState } from "react";
import MyTabsComponent from "../../../../components/MyTabsComponent";
import SurveyTitle from "../../../../components/SurveyTitle";
import TimerComponent from "../../../../components/TimerComponent";
import CampusFacilitiesT1 from "./CampusFacilitiesT1";
import CampusFacilitiesT2 from "./CampusFacilitiesT2";
import CampusFacilitiesT3 from "./CampusFacilitiesT3";

function CampusFacilitiesStaff() {
  const [activeTab, setActiveTab] = useState("home");

  // Used to Provide the Labels and IDs for the tabs
  const tabs = [
    {
      id: "Library",
      label: "Library",
      content: <CampusFacilitiesT1 />,
    },
    {
      id: "Laboratories",
      label: "Laboratories",
      content: <CampusFacilitiesT2 />,
    },
    {
      id: "Support Services",
      label: "Support Services",
      content: <CampusFacilitiesT3 />,
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

export default CampusFacilitiesStaff;
