import React, { useState } from "react";
import MyTabsComponent from "../components/MyTabsComponent";
import SurveyTitle from "../components/SurveyTitle";
import TimerComponent from "../components/TimerComponent";
import CampusFacilitiesFirst from "../components/CampusFacilitiesSurveyQuestions/CampusFacilitiesFirst"
import CampusFacilitiesSecond from "../components/CampusFacilitiesSurveyQuestions/CampusFacilitiesSecond";
import CampusFacilitiesThird from "../components/CampusFacilitiesSurveyQuestions/CampusFacilitiesThird";

function CampusFacilities() {
  const [activeTab, setActiveTab] = useState("home");

  // Used to Provide the Labels and IDs for the tabs 
  const tabs = [
    {
      id: "Library",
      label: "Library",
      content: <CampusFacilitiesFirst />,
    },
    {
      id: "Laboratories",
      label: "Laboratories",
      content: <CampusFacilitiesSecond />,
    },
    {
      id: "Support Services",
      label: "Support Services",
      content: <CampusFacilitiesThird />,
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

export default CampusFacilities;
