import React, { useState } from "react";
import MyTabsComponent from "../../../../components/MyTabsComponent";
import SurveyTitle from "../../../../components/SurveyTitle";
import TimerComponent from "../../../../components/TimerComponent";
import ExtracurricularT1 from "./ExtracurricularT1";
import ExtracurricularT2 from "./ExtracurricularT2";
import ExtracurricularT3 from "./ExtracurricularT3";

function FacultyExtracurricularTabs() {
  const [activeTab, setActiveTab] = useState("home");

  // Used to Provide the Labels and IDs for the tabs
  const tabs = [
    {
      id: "Events",
      label: "Events",
      content: <ExtracurricularT1 />,
    },
    {
      id: "Clubs",
      label: "Clubs",
      content: <ExtracurricularT2 />,
    },
    {
      id: "Support Services",
      label: "Support Services",
      content: <ExtracurricularT3 />,
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

export default FacultyExtracurricularTabs;
