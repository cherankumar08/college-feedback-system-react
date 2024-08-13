import React, { useState } from "react";
import MyTabsComponent from "../../../../MyTabsComponent";
import OverallSelection from "./OverallSelection";
import OverallTable from "./OverallTable";
import DynamicReportTable from "../../../../../Table/DynamicReportTable";

const TabsOverall = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    {
      id: "Overall Report",
      label: "Overall Report",
      content: <OverallSelection />,
    },
    {
      id: "Individual Report",
      label: "Individual Report",
      content: (
        <DynamicReportTable endpoint="http://localhost:5000/overallExperiencesTab-std" />
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

export default TabsOverall;
