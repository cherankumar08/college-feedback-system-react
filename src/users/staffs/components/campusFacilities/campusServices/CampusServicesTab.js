import React, { useState } from "react";
import MyTabsComponent from "../../../../../components/MyTabsComponent";
import SurveyTitle from "../../../../../components/SurveyTitle";
import TimerComponent from "../../../../../components/TimerComponent";
import CampusServicesT1 from "./CampusServicesT1";
import CampusServicesT2 from "./CampusServicesT2";
import CampusServicesT3 from "./CampusServicesT3";
import CampusServicesT4 from "./CampusServicesT4";
import CampusServicesT5 from "./CampusServicesT5";

function CampusServicesTabs() {
  const [activeTab, setActiveTab] = useState("home");

  // Used to Provide the Labels and IDs for the tabs
  const tabs = [
    {
      id: "Academics",
      label: "Academics",
      content: <CampusServicesT1 />,
    },
    {
      id: "Transportation",
      label: "Transportation",
      content: <CampusServicesT2 />,
    },
    {
      id: "Services And Security",
      label: "Services And Security",
      content: <CampusServicesT3 />,
    },
    {
      id: "IT Facilities",
      label: "IT Facilities",
      content: <CampusServicesT4 />,
    },
    {
      id: "Recreational",
      label: "Recreational",
      content: <CampusServicesT5 />,
    },
  ];

  // Used to handle to change of the tabs when i click the tabs based on the Above Tab IDs
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <SurveyTitle SurveyTitle="Campus Services" />
      <TimerComponent initialTime={19500} />

      <MyTabsComponent
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </div>
  );
}

export default CampusServicesTabs;
