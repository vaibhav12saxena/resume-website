import React from "react";
import Card from "../reusable components/card";
import "./work.css";
import workData from "../../data/workData";

const Work = () => {
  return (
    <section id="work" className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {workData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h1 className="text-[24px] mb-4 section-title section-heading">
              {section.section}
            </h1>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((work, index) => (
                <Card
                  image={work.image}
                  key={index}
                  title={work.title}
                  tags={work.tags}
                  path={work.path}
                  // description={work.description}
                />
              ))}

              {/* Ensure Behance Card is properly aligned */}
              {sectionIndex === workData.length - 1 && (
                <div className="behance-card flex items-center justify-center text-center p-4  rounded-lg">
                  + more on&nbsp;
                  <a
                    href="https://www.behance.net/somyaburmac0aa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-cursor"
                  >
                    <u className="text-blue-500">Behance</u>
                  </a>
                  :)
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
