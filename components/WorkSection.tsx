"use client";
import RecentProjects from "./RecentProjects";


const WorkSection = () => {
  return (
    <div className=" w-full flex flex-col lg:flex-row lg:justify-between gap-16 lg:gap-28  mt-36 max-w-7xl mx-auto px-3 md:px-16  lg:px-20 py-16">

      {/* Recent Projects Section */}
      <div className="flex-1">
        <RecentProjects />
      </div>
    </div>
  );
};

export default WorkSection;
