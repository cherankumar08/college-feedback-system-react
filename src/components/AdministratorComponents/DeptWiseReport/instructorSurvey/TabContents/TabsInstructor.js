import React, { useState } from "react";
import MyTabsComponent from "../../../../MyTabsComponent";
import InstructorSelection from "./InstructorSelection";
import InstructorTable from "./InstructorTable";
import DynamicReportTable from "../../../../../Table/DynamicReportTable";

const TabsInstructor = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    {
      id: "Overall Report",
      label: "Overall Report",
      content: <InstructorSelection />,
    },
    {
      id: "Individual Report",
      label: "Individual Report",
      content: (
        <DynamicReportTable endpoint="http://localhost:5000/InstructorSur-Res" />
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

export default TabsInstructor;
