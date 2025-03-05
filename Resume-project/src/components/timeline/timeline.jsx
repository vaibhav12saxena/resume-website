// TimelineContainer.jsx
import React from "react";
import TimelineItem from "./TimelineItem";

function TimelineContainer() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute top-0 left-1/2 w-1 bg-gray-300 h-full" />

      <div className="flex flex-col space-y-10">
        {/* Work section */}
        <TimelineItem
          title="UX Designer"
          company="Enphase Solar Energy, Bangalore"
          dates="Jul 2023 - Present"
        />
        <TimelineItem
          title="UX Design Intern"
          company="Enphase Solar Energy, Bangalore"
          dates="Jan 23-Jun 23"
        />
        {/* ... other work entries */}

        {/* Education section */}
        <TimelineItem
          title="Senior Software Engineer"
          company="Capgemini Technology Services, Bangalore"
          dates="2016-2020"
        />
        {/* ... other education entries */}
      </div>
    </div>
  );
}

export default TimelineContainer;
