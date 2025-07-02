// Journey.js
import React, { useState } from "react";
import journeyData from "../../data/journeyData";
import "./styles.css";

const TimelineItem = ({ date, duration, role, company, isRight }) => (
  <div
    className={`flex items-center w-full  ${
      isRight ? "flex-row " : "flex-row-reverse"
    }`}
  >
    {/* Content */}
    <div
      className={`w-[calc(50%-1rem)] ${isRight ? "text-right" : "text-left"}`}
    >
      <div className={`px-3 pt-3 rounded-lg `}>
        <div className="text-gray-600 italic mb-1">
          {date} • {duration}
        </div>
        <div className="font-medium text-lg text-gray-800">{role}</div>
        <div className="text-gray-700">{company}</div>
      </div>
    </div>

    {/* Dot and line connector */}
    <div className={`relative ${isRight ? "left16" : "w-4"} `}>
      <div className="w-3 h-3 bg-gray-300 rounded-full absolute  top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white z-20" />
    </div>

    {/* Empty space for the other side */}
    <div className="w-[calc(50%-1rem)]" />
  </div>
);

const Journey = () => {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <section id="journey" className=" py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Tabs */}
        <div className="flex justify-center gap-12 ">
          <button
            onClick={() => setActiveTab("work")}
            className="bg-transparent group flex items-center gap-2 pb-2 relative"
          >
            {/* <span className="text-xl">📝</span> */}
            <span
              className={`text-[24px] ${
                activeTab === "work" ? "text-gray-800" : "text-gray-400"
              }`}
            >
              Work
            </span>
            {activeTab === "work" && (
              <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gray-800" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className="bg-transparent group flex items-center gap-2 pb-2 relative"
          >
            {/* <span className="text-xl">🎓</span> */}
            <span
              className={`text-[24px] ${
                activeTab === "education" ? "text-gray-800" : "text-gray-400"
              }`}
            >
              Education
            </span>
            {activeTab === "education" && (
              <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gray-800" />
            )}
          </button>
        </div>

        {/* Timeline */}
        <div className="relative flex justify-center">
          {/* Dotted center line */}
          <div className="absolute left-1/2 top20 bottom-0 w-0 border-l border-dashed border-gray-300 -translate-x-1/2" />
          {/* left-[46%] md:left-[48.55%] */}
          {/* Timeline items with background image */}
          <div
            style={{
              width: "567px",
              margin: "auto",
            }}
          >
            {journeyData[activeTab].map((item, index) => (
              <TimelineItem
                key={index}
                date={item.date}
                duration={item.duration}
                role={item.role}
                company={item.company}
                isRight={index % 2 !== 0}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
