import React, { useState } from "react";
import MyTabsComponent from "../../../../MyTabsComponent";
import SuggestionTable from "./SuggestionTable";
import SuggestionSelection from "./SuggestionSelection";
import DynamicReportTable from "../../../../../Table/DynamicReportTable";

const TabsSuggestion = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    {
      id: "Overall Report",
      label: "Overall Report",
      content: <SuggestionSelection />,
    },
    {
      id: "Individual Report",
      label: "Individual Report",
      content: (
        <DynamicReportTable endpoint="http://localhost:5000/Surveysuggestions" />
      ),
    },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div>
      {/* <SurveyTitle SurveyTitle="Course Survey" /> */}
      {/* <TimerComponent initialTime={19500} /> */}

      <MyTabsComponent
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      {/* <WholeAIDSTable /> */}
    </div>
  );
};

export default TabsSuggestion;
