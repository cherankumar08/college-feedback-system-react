import React, { useState } from "react";
import MyTabsComponent from "../../../MyTabsComponent";
import ExtraSelection from "./ExtraSelection";
import ExtraTable from "./ExtraTable";
import DynamicReportTable from "../../../../Table/DynamicReportTable";

const TabsExtra = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    {
      id: "Overall Report",
      label: "Overall Report",
      content: <ExtraSelection />,
    },
    {
      id: "Individual Report",
      label: "Individual Report",
      content: (
        <DynamicReportTable endpoint="http://localhost:5000/ExtraCurricular-std" />
      ),
    },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div>
      <MyTabsComponent
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </div>
  );
};

export default TabsExtra;
