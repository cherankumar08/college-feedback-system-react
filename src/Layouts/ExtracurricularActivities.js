import React, { useState } from "react";
import MyTabsComponent from "../components/MyTabsComponent";
import SurveyTitle from "../components/SurveyTitle";
import TimerComponent from "../components/TimerComponent";
import ExtracurricularActivitiesFirst from "../components/Extracurricular Activities/ExtraCurricularFirst";
import ExtracurricularActivitiesSecond from "../components/Extracurricular Activities/ExtraCurricularSecond";
import ExtracurricularActivitiesThird from "../components/Extracurricular Activities/ExtracurricularActivitiesThird";


function ExtracurricularActivities() {
  const [activeTab, setActiveTab] = useState("home");

  // Used to Provide the Labels and IDs for the tabs
  const tabs = [
    {
      id: "Events",
      label: "Events",
        content: <ExtracurricularActivitiesFirst />,
    },
    {
      id: "Clubs",
      label: "Clubs",
        content: <ExtracurricularActivitiesSecond />,
    },
    {
      id: "Support Services",
      label: "Support Services",
        content: <ExtracurricularActivitiesThird />,
    },
  ];

  // Used to handle to change of the tabs when i click the tabs based on the Above Tab IDs
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <SurveyTitle SurveyTitle="Extracurricular Activities" />
      <TimerComponent initialTime={19500} />

      <MyTabsComponent
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </div>
  );
}

export default ExtracurricularActivities;
