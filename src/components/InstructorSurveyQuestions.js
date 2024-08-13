import React, { useState } from "react";
import MyTabsComponent from "./MyTabsComponent";
import SurveyTitle from "./SurveyTitle";
import TimerComponent from "./TimerComponent";
import InstructorSurveyFirst from "./Instructor Survey/InstructorSurveyFirst";
import InstructorSurveySecond from "./Instructor Survey/InstructorSurveySecond";
import InstructorSurveyThird from "./Instructor Survey/InstructorSurveyThird";
import InstructorSurveyFourth from "./Instructor Survey/InstructorSurveyFourth";
import InstructorSurveyFifth from "./Instructor Survey/InstructorSurveyFifth";


function InstructorSurveyQuestions() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    {
      id: "Professor Jane",
      label: "Professor Jane",
      content: <InstructorSurveyFirst />,
    },
    {
      id: "Professor David Lee",
      label: "Professor David Lee",
      content: <InstructorSurveySecond />,
    },
    {
      id: "Dr.John Johnson",
      label: "Dr.John Johnson",
      content: <InstructorSurveyThird />,
    },
    {
      id: "Professor Emiley",
      label: "Professor Emiley",
      content: <InstructorSurveyFourth />,
    },
    {
      id: "Dr.Michael Brown",
      label: "Dr.Michael Brown",
      content: <InstructorSurveyFifth />,
    },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <SurveyTitle SurveyTitle="Instructor Survey" />
      <TimerComponent initialTime={19500} />

      <MyTabsComponent
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </div>
  );
}

export default InstructorSurveyQuestions;
