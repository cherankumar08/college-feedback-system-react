import React, { useState } from "react";
import MyTabsComponent from "../../../../../components/MyTabsComponent";
import SurveyTitle from "../../../../../components/SurveyTitle";
import TimerComponent from "../../../../../components/TimerComponent";
import FacultyCampusServicesT1 from "./FacultyCampusServicesT1";
import FacultyCampusServicesT2 from "./FacultyCampusServicesT2";
import FacultyCampusServicesT3 from "./FacultyCampusServicesT3";
import FacultyCampusServicesT4 from "./FacultyCampusServicesT4";
import FacultyCampusServicesT5 from "./FacultyCampusServicesT5";


function FacultyCampusServicesTab() {
  const [activeTab, setActiveTab] = useState("home");

  // Used to Provide the Labels and IDs for the tabs
  const tabs = [
    {
      id: "Academics",
      label: "Academics",
      content: <FacultyCampusServicesT1 />,
    },
    {
      id: "Transportation",
      label: "Transportation",
      content: <FacultyCampusServicesT2 />,
    },
    {
      id: "Services And Security",
      label: "Services And Security",
      content: <FacultyCampusServicesT3 />,
    },
    {
      id: "IT Facilities",
      label: "IT Facilities",
      content: <FacultyCampusServicesT4 />,
    },
    {
      id: "Recreational",
      label: "Recreational",
      content: <FacultyCampusServicesT5 />,
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

export default FacultyCampusServicesTab;
