import React, { useState } from "react";
import MyTabsComponent from "../../../../components/MyTabsComponent";
import SurveyTitle from "../../../../components/SurveyTitle";
import TimerComponent from "../../../../components/TimerComponent";
import SuggestionT1 from "./SuggestionT1";
import SuggestionT2 from "./SuggestionT2";

function FacultySuggestionTabs() {
  const [activeTab, setActiveTab] = useState("home");

  // Used to Provide the Labels and IDs for the tabs
  const tabs = [
    {
      id: "Infrastructure Development",
      label: "Infrastructure Development",
      content: <SuggestionT1 />,
    },
    {
      id: "Academic Development",
      label: "Academic Development",
      content: <SuggestionT2 />,
    },
  ];

  // Used to handle to change of the tabs when i click the tabs based on the Above Tab IDs
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <SurveyTitle SurveyTitle="Suggestions And Improvement" />
      <TimerComponent initialTime={19500} />

      <MyTabsComponent
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </div>
  );
}

export default FacultySuggestionTabs;
