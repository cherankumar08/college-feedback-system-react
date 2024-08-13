import React, { useState } from "react";
import MyTabsComponent from "./MyTabsComponent";
import SurveyTitle from "./SurveyTitle";
import TimerComponent from "./TimerComponent";
// import CourseSurveyFirst from "./CourseSurveyFirst";
import CourseSurveyFirstTest from "./CourseSurveyFirstTest";
import CourseSurveySecond from "./CourseSurveySecond";
import CourseSurveyThree from "./CourseSurveyThree";
import CourseSurveyFour from "./CourseSurveyQuestions/CourseSurveyFour";
import CourseSurveyFive from "./CourseSurveyQuestions/CourseSurveyFive";

function CourseSurvey() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    {
      id: "Distributed Systems",
      label: "Distributed Systems",
      content: <CourseSurveyFirstTest />,
    },
    {
      id: "Computer Networks",
      label: "Computer Networks",
      content: <CourseSurveySecond />,
    },
    {
      id: "Operating Systems",
      label: "Operating Systems",
      content: <CourseSurveyThree />,
    },
    {
      id: "Theory Of Computation",
      label: "Theory Of Computation",
      content: <CourseSurveyFour />,
    },
    {
      id: "Mobile Computing",
      label: "Mobile Computing",
      content: <CourseSurveyFive />,
    },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="ms-5">
      <SurveyTitle SurveyTitle="Course Survey" />
      <TimerComponent initialTime={19500} />

      <MyTabsComponent
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </div>
  );
}

export default CourseSurvey;
