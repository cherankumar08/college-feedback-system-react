import React, { useState } from "react";
import MyTabsComponent from "../../../MyTabsComponent";
import ServicesSelection from "./ServicesSelection";
import ServicesTable from "./ServicesTable";
import DynamicReportTable from "../../../../Table/DynamicReportTable";

const TabsServices = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    {
      id: "Overall Report",
      label: "Overall Report",
      content: <ServicesSelection />,
    },
    {
      id: "Individual Report",
      label: "Individual Report",
      content: (
        <DynamicReportTable endpoint="http://localhost:5000/campus-services-std" />
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

export default TabsServices;
