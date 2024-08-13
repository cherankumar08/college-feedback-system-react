import React, { useState } from "react";
import MyTabsComponent from "../components/MyTabsComponent";
import SurveyTitle from "../components/SurveyTitle";
import TimerComponent from "../components/TimerComponent";
import OverallOne from "../components/OverallExperiences/OverallOne";
import OverallTwo from "../components/OverallExperiences/OverallTwo";

function OverallExperiences() {
  const [activeTab, setActiveTab] = useState("home");

  // Used to Provide the Labels and IDs for the tabs
  const tabs = [
    {
      id: "Overall Experiences",
      label: "Overall Experiences",
      content: <OverallOne />,
    },
    {
      id: "Campus Experiences",
      label: "Campus Experiences",
      content: <OverallTwo />,
    },
  ];

  // Used to handle to change of the tabs when i click the tabs based on the Above Tab IDs
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <SurveyTitle SurveyTitle="Overall Experiences" />
      <TimerComponent initialTime={19500} />

      <MyTabsComponent
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </div>
  );
}

export default OverallExperiences;
