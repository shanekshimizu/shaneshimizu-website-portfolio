import React from "react";
import { ProjectsOne, ProjectNav } from "../components";

const Project1 = () => {
  return (
    <div className="relative z-0 bg-black">
      <div className="bg-top-wallpaper bg-cover bg-no-repeat bg-center">
        <ProjectNav />
      </div>
      <ProjectsOne />
    </div>
  );
};

export default Project1;
