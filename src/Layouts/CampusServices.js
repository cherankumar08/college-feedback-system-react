import React, { useState } from "react";
import MyTabsComponent from "../components/MyTabsComponent";
import SurveyTitle from "../components/SurveyTitle";
import TimerComponent from "../components/TimerComponent";
import CampusServicesOne from "../components/CampusServices/CampusServicesOne";
import CampusServicesTwo from "../components/CampusServices/CampusServicesTwo";
import CampusServicesThree from "../components/CampusServices/CampusServicesThree";
import CampusServicesFour from "../components/CampusServices/CampusServicesFour";
import CampusServicesFive from "../components/CampusServices/CampusServicesFive";
// import CampusServicesThird from "../components/CampusServicesSurveyQuestions/CampusServicesThird";

function CampusServices() {
  const [activeTab, setActiveTab] = useState("home");

  // Used to Provide the Labels and IDs for the tabs
  const tabs = [
    {
      id: "Academics",
      label: "Academics",
      content: <CampusServicesOne />,
    },
    {
      id: "Transportation",
      label: "Transportation",
      content: <CampusServicesTwo />,
    },
    {
      id: "Services And Security",
      label: "Services And Security",
      content: <CampusServicesThree />,
    },
    {
      id: "IT Facilities",
      label: "IT Facilities",
      content: <CampusServicesFour />,
    },
    {
      id: "Recreational",
      label: "Recreational",
      content: <CampusServicesFive />,
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

export default CampusServices;
