import React, { useState } from "react";
import MyTabsComponent from "../../../MyTabsComponent";
import FacilitiesSelection from "./FacilitiesSelection";
import FacilitiesTable from "./FacilitiesTable";
import DynamicReportTable from "../../../../Table/DynamicReportTable";

const TabsFacilities = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    {
      id: "Overall Report",
      label: "Overall Report",
      content: <FacilitiesSelection />,
    },
    {
      id: "Individual Report",
      label: "Individual Report",
      content: (
        <DynamicReportTable
         endpoint="http://localhost:5000/campus-facilities-std" />
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

export default TabsFacilities;
