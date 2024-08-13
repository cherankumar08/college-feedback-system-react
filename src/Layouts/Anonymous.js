import React, { useState } from "react";
import MyTabsComponent from "../components/MyTabsComponent";
import SurveyTitle from "../components/SurveyTitle";
import TimerComponent from "../components/TimerComponent";
import AnonymousOne from "../components/AnonymousFeedback/AnonymousOne";
// import AnonymousOneThird from "../components/AnonymousOneSurveyQuestions/AnonymousOneThird";

function Anonymous() {
  const [activeTab, setActiveTab] = useState("home");

  // Used to Provide the Labels and IDs for the tabs
  const tabs = [
    {
      id: "Anonymous",
      label: "Anonymous Feedback",
      content: <AnonymousOne />,
    },
  ];

  // Used to handle to change of the tabs when i click the tabs based on the Above Tab IDs
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <SurveyTitle SurveyTitle="Anonymous Feedback" />
      <TimerComponent initialTime={19500} />

      <MyTabsComponent
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </div>
  );
}

export default Anonymous;
