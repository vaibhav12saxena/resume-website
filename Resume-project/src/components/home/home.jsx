// Home.js
import React from "react";
import "./styles.css"; // Import custom CSS

const Home = () => {
  return (
    <section id="home" className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 py-8 lg:py-20">
        {/* Profile Shape */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto lg:mx-0">
          {/* <div className="profile-shape absolute inset-0 bg-pink-50" /> */}
          <img src="/assets/profile.png"></img>
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-6 lg:space-y-8 max-w-2xl lg:max-w-3xl">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="gradient-text text-3xl sm:text-4xl font-bold flex items-center gap-2 text-blue">
              Hey!{" "}
              <span role="img" aria-label="wave" className="font-emoji">
                👋🏼
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-800">This is Somya.</p>
          </div>

          {/* Main content */}
          <div className="space-y-4">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              I am an engineer turned designer. Once immersed in the field of
              engineering, I discovered a passion for the art that shapes user
              experiences. Today, I proudly wear the hat of a product designer,
              where I blend the analytical mindset of an engineer with the
              creative flair I've cherished since my childhood days.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Design, to me, is more than pixels and wireframes; it's about
              storytelling, problem-solving, and enhancing human interactions.
              My fascination lies in the intersection of functionality and
              aesthetics, where thoughtful design transforms the way we navigate
              the digital landscape.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              I also like to paint, draw comics and sometimes go out for urban
              sketching :)
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
            <div className="info-card bg-orange-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-sm text-gray-600 mb-2">Current Job</h3>
              <div className="space-y-1">
                <p className="font-semibold text-gray-900">UX Designer</p>
                <img src="/assets/enphase_logo.png"></img>
              </div>
            </div>

            <div className="info-card bg-blue-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-sm text-gray-600 mb-2">Education</h3>
              <div className="space-y-1">
                <p className="font-semibold text-gray-900">Masters in Design</p>
                {/* <p className="text-gray-700"> */}
                <img src="/assets/iit_roorkee_logo.png"></img>
                {/* </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
