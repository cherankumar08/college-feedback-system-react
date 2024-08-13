import React, { useState } from "react";
import HandleBox from "./HandleBox";
import Question from "./Question";

function Tab({ id, label, active, onClick }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${active ? "active" : ""}`}
          id={`pills-${id}-tab`}
          data-bs-toggle="pill"
          data-bs-target={`#pills-${id}`}
          type="button"
          role="tab"
          aria-controls={`pills-${id}`}
          aria-selected={active}
          onClick={() => onClick(id)}
        >
          {label}
        </button>
      </li>
    </div>
  );
}

function TabContent({ id, active, children }) {
  return (
    <div
      className={`tab-pane fade ${active ? "show active" : ""}`}
      id={`pills-${id}`}
      role="tabpanel"
      aria-labelledby={`pills-${id}-tab`}
    >
      {children}
    </div>
  );
}

function MyTabsComponent({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id); // Set the initial active tab to the id of the first tab

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container mt-4 d-flex flex-column justify-content-center">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            id={tab.id}
            label={tab.label}
            active={tab.id === activeTab}
            onClick={handleTabChange}
          />
        ))}
      </ul>
      <div className="tab-content" id="pills-tabContent">
        {tabs.map((tab) => (
          <TabContent key={tab.id} id={tab.id} active={tab.id === activeTab}>
            {/* Check if the content is an array (questions), then render each question */}
            {Array.isArray(tab.content)
              ? tab.content.map((question, index) => (
                  <Question key={index} questionData={question} />
                ))
              : tab.content}
          </TabContent>
        ))}
      </div>
    </div>
  );
}

export default MyTabsComponent;
