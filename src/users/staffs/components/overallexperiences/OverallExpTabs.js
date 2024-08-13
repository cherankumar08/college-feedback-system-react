import React, { useState } from "react";
import MyTabsComponent from "../../../../components/MyTabsComponent";
import SurveyTitle from "../../../../components/SurveyTitle";
import TimerComponent from "../../../../components/TimerComponent";
import OverallExpT1 from "./OverallExpT1";
import OverallExpT2 from "./OverallExpT2";
import OverallExpT3 from "./OverallExpT3";

function ExtracurricularTabs() {
  const [activeTab, setActiveTab] = useState("home");

  // Used to Provide the Labels and IDs for the tabs
  const tabs = [
    {
      id: "Overall Experiences",
      label: "Overall Experiences",
      content: <OverallExpT1 />,
    },
    {
      id: "Campus Facilities",
      label: "Campus Facilities",
      content: <OverallExpT2 />,
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

export default ExtracurricularTabs;
