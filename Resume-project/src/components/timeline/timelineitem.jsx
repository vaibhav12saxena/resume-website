// TimelineItem.jsx
import React from "react";

function TimelineItem({ title, company, dates }) {
  return (
    <div className="flex items-center">
      {/* Circle marker */}
      <div className="w-6 h-6 rounded-full bg-blue-500 mr-4" />

      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{company}</p>
        <p className="text-sm text-gray-500">{dates}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
