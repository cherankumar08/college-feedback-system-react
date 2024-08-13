import React, { useState } from "react";
import MyTabsComponent from "../../../../MyTabsComponent";
import SurveyTitle from "../../../../SurveyTitle";
import CourseReportAIDSGraphSubjectOne from "./courseSurveyAIDS/subjects/CourseReportAIDSGraphSubjectOne";
import SubjectSelection from "./courseSurveyAIDS/subjects/SubjectSelection";
import WholeAIDSTable from "./courseSurveyAIDS/subjects/WholeAIDSTable";

const TabContentForAIDS = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    {
      id: "Overall Report",
      label: "Overall Report",
      content: <SubjectSelection />,
    },
    {
      id: "Individual Report",
      label: "Individual Report",
      // content: <WholeAIDSTable />,
      content: <WholeAIDSTable />,
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

export default TabContentForAIDS;
