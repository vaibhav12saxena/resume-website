import React from "react";

const Space = () => {
  return (
    <section id="space" className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
      {/* Mobile image (shown on small screens) */}
      <img
        src="/images/mobilewallgrid.png"
        alt="Mobile View"
        className="block md:hidden w-full"
        loading="eager"
        srcSet="/images/mobilewallgrid-optimized-480.webp 480w,
                 /images/mobilewallgrid-optimized-720.webp 720w"
        sizes="(max-width: 768px) 100vw, 720px"
        width={720}
        height={1080}
      />
      {/* Laptop/Desktop image (shown on medium screens and up) */}
      <img
        src="/images/desktopwallgrid.webp"
        alt="Desktop View"
        className="hidden md:block w-full"
        srcSet="/images/desktopwallgrid.webp 480w,
                 /images/desktopwallgrid.webp 720w"
        sizes="(max-width: 768px) 100vw, 720px"
        width={720}
        height={1080}
        loading="eager"
        b
        nb
      />
    </section>
  );
};

export default Space;
// import React from "react";

// const Space = () => {
//   return (
//     <section id="space" className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
//       {/* Mobile image (shown on small screens) */}
//       <img
//         src="/images/mobilewallgrid-optimized.webp"
//         srcSet="/images/mobilewallgrid-optimized-480.webp 480w,
//                 /images/mobilewallgrid-optimized-720.webp 720w"
//         sizes="(max-width: 768px) 100vw, 720px"
//         alt="Mobile View"
//         className="block md:hidden w-full"
//         width={720}
//         height={1080}
//         loading="eager"
//       />

//       {/* Laptop/Desktop image (shown on medium screens and up) */}
//       <img
//         src="/images/desktopwallgrid-optimized.webp"
//         srcSet="/images/desktopwallgrid-optimized-1280.webp 1280w,
//                 /images/desktopwallgrid-optimized-1920.webp 1920w"
//         sizes="(min-width: 768px) 100vw, 1920px"
//         alt="Desktop View"
//         className="hidden md:block w-full"
//         width={1920}
//         height={1080}
//         loading="eager"
//       />
//     </section>
//   );
// };

// export default Space;
