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
            <span className="text-xl">📝</span>
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
            <span className="text-xl">🎓</span>
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
              // backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="313" height="567" viewBox="0 0 313 567" fill="none"><path d="M102 -9.18678e-06C141.487 8.5075 288.939 6.50572 280.941 53.5472C275.598 84.9787 175.047 104.763 115.495 117.103C110.945 118.046 106.44 119.004 102 119.977L102 222.959C108.924 225.101 116.253 227.281 124 229.5C166.199 241.587 157.609 276 155.5 283.5C153.39 291 137.5 316.807 126.492 324C120.593 327.855 111.995 332.443 102 337.381L102 453.69C116.158 457.368 129.5 460.455 138 462C160 466 294 475 309.5 512.5C337.587 580.451 135.489 563.33 102 567L102 453.69C79.5127 447.848 54.9677 440.516 44.5 435.5C-3.50005 412.5 -12 391.5 16 377.5C37.7026 366.649 74.962 350.738 102 337.381L102 222.959C-64.6181 171.408 2.73315 141.735 102 119.977L102 -9.18678e-06Z" fill="url(%23paint0_linear_372_1665)" fill-opacity="0.8"/><defs><linearGradient id="paint0_linear_372_1665" x1="216" y1="-4.98311e-06" x2="216" y2="567" gradientUnits="userSpaceOnUse"><stop stop-color="%23FF8F00" stop-opacity="0.2"/><stop offset="0.304118" stop-color="%23FF8F00" stop-opacity="0.2"/><stop offset="0.452029" stop-color="%23F164F8" stop-opacity="0.2"/><stop offset="0.659348" stop-opacity="0.2"/><stop offset="0.87923" stop-color="%2300A6FF" stop-opacity="0.2"/></linearGradient></defs></svg>')`,
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "cover",
              // backgroundPosition: "center",
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
