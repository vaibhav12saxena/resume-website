import React from "react";

const Space = () => {
  return (
    <section id="space" className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
    {/* Mobile image (shown on small screens) */}
    <img
      src="/images/mobilewallgrid.png"
      alt="Mobile View"
      className="block md:hidden w-full"
    />
  
    {/* Laptop/Desktop image (shown on medium screens and up) */}
    <img
      src="/images/desktopwallgrid.png"
      alt="Desktop View"
      className="hidden md:block w-full"
    />
  </section>
  
  );
};

export default Space;
