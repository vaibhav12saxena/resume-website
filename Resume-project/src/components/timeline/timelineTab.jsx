import React, { useState } from "react";

const TimelineTabs = () => {
  const [activeTab, setActiveTab] = useState("Work");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="relative">
      {/* Dotted lines background */}
      <div className="absolute inset-0 bg-gray-100 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <pattern
            id="dots"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="5" cy="5" r="2" fill="black" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Main dot */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500" />

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <TimelineTab
          name="Work"
          isActive={activeTab === "Work"}
          onClick={handleTabClick}
        />
        <TimelineTab
          name="Education"
          isActive={activeTab === "Education"}
          onClick={handleTabClick}
        />
      </div>

      {/* Timeline content */}
      <TimelineContent activeTab={activeTab} />
    </div>
  );
};

const TimelineTab = ({ name, isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md ${
        isActive ? "bg-blue-500 text-white" : "bg-gray-200"
      }`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

const TimelineContent = ({ activeTab }) => {
  // ... Implement the logic to render the timeline content for each tab
  // For example:
  if (activeTab === "Work") {
    return <div>{/* Work timeline content */}</div>;
  } else if (activeTab === "Education") {
    return <div>{/* Education timeline content */}</div>;
  }

  return null;
};

export default TimelineTabs;
