import React, { useEffect } from "react";
import { styles } from "../styles";
import { ProjectWrapper } from "../hoc";
import { projectsix } from "../constants";
import { github } from "../assets";

const FeedbackCard = ({}) => (
  <div
    className="bg-zinc-950 p-10 rounded-3xl xs:w-[2000px] w-full" //original xs:w-[320px]
  >
    <div className="relative w-full h-[830px]">
      {" "}
      {/*original 430*/}
      <img
        src={"test"} //change the image for the project cards
        alt="project_image"
        className="w-full h-full object-contain rounded-2xl"
      />
      <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
        <div
          onClick={() => window.open(source_code_link, "https://github.com/shanekshimizu/kfs-python-automation")} //the link for the project github icon
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={"test"} //change github icon to something else
            alt="source code"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>
    </div>
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{"test"}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {"test"}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {"test"} of {"test"}
          </p>
        </div>
        testi
        <img
          src={"test"}
          alt={`feedback_by-${"test"}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </div>
);

const Feedbacks = ({ name }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`mt-12 bg-zinc-900 rounded-[20px]`}>
      <div
        className={`bg-zinc-800 rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <div>
          <p className={styles.sectionSubText}>Project Six</p>
          <h2 className={styles.sectionHeadTextTwo}>
            Automating Processes With Python
          </h2>
        </div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} justify-center flex flex-wrap gap-7`}
      >
        {/*BEGIN IMAGE*/}
        <div
          className="bg-zinc-950 p-10 rounded-3xl xs:w-[2000px] w-full" //original xs:w-[320px]
        >
          <div className="relative w-full h-[830px]">
            {" "}
            {/*original 430*/}
            <img
              src={projectsix[0].image} //change the image for the project cards
              alt="project_image"
              className="w-full h-full object-contain rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")} //the link for the project github icon
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github} //change github icon to something else
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-1">
            <p className="text-white tracking-wider text-[20px]">
              {projectsix[0].overview}
            </p>

            <div className="mt-7 flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[16px]">
                  <span className="blue-text-gradient">PROJECT OVERVIEW</span>
                </p>
              </div>

              <img
                src={projectsix[0].image}
                alt={`feedback_by-${name}`}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        {/*END IMAGE*/}
        {/*BEGIN 1 START*/}
        {/*BEGIN 1 Heading*/}
        <div
          className="bg-zinc-950 p-10 rounded-3xl xs:w-[2000px] w-full" //original xs:w-[320px]
        >
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">Summary </span>
                {projectsix[0].steplineheading}
              </p>
            </div>

            <img
              src={projectsix[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 1 Heading*/}
          {/*BEGIN 1c*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectsix[0].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"1a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectsix[0].explanation_a}
            </p>
          </div>
          {/*END 1c*/}
          {/*BEGIN IMAGE*/}
          <div className="mt-1">
            <div className="mt-7 flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[16px] pb-5">
                  <span className="blue-text-gradient">Video</span> {"Demo"}
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[830px]">
            {""}
            <video
              src={projectsix[0].video} //change the image for the project cards
              alt="project_image"
              className="w-full h-full object-contain rounded-2xl"
              controls="controls"
              autoplay="false"
            />
          </div>
          {/*END IMAGE*/}
        </div>
        {/*END 1 END*/}
      </div>
    </div>
  );
};

export default ProjectWrapper(Feedbacks, "");
