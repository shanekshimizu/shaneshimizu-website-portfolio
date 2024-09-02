import React, { useEffect } from "react";
import { styles } from "../styles";
import { ProjectWrapper } from "../hoc";
import { projectone } from "../constants";
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
          onClick={() => window.open(source_code_link, "_blank")} //the link for the project github icon
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
          <p className={styles.sectionSubText}>Project One</p>
          <h2 className={styles.sectionHeadTextTwo}>
            Deploying a Simple WordPress Website In AWS
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
              src={projectone[0].image} //change the image for the project cards
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
              {projectone[0].overview}
            </p>

            <div className="mt-7 flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[16px]">
                  <span className="blue-text-gradient">PROJECT OVERVIEW</span>
                </p>
              </div>

              <img
                src={projectone[0].image}
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
                <span className="blue-text-gradient">STEP 1 </span>
                {projectone[0].steplineheading}
              </p>
            </div>

            <img
              src={projectone[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 1 Heading*/}
          {/*BEGIN 1a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectone[0].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"1a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectone[0].Explanation_a}
            </p>
          </div>
          {/*END 1a*/}
          {/*BEGIN 1b*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectone[0].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"1b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectone[0].Explanation_b}
            </p>
          </div>
          {/*END 1b*/}
          {/*BEGIN 1c*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectone[0].stepline_c}
              </p>
              <p className="text-secondary text-[12px]">{"1c"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectone[0].Explanation_c}
            </p>
          </div>
          {/*END 1c*/}
          {/*BEGIN 1d*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectone[0].stepline_d}
              </p>
              <p className="text-secondary text-[12px]">{"1d"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectone[0].Explanation_d}
            </p>
          </div>
          {/*END 1d*/}
          {/*BEGIN IMAGE*/}

          {/*END IMAGE*/}
        </div>
        {/*END 1 END*/}

        {/*BEGIN 2 START*/}
        {/*BEGIN 2 Heading*/}
        <div
          className="bg-zinc-950 p-10 rounded-3xl xs:w-[2000px] w-full" //original xs:w-[320px]
        >
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 2 </span>
                {projectone[1].steplineheading}
              </p>
            </div>

            <img
              src={projectone[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 2 Heading*/}
          {/*BEGIN 2a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectone[1].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"2a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectone[1].Explanation_a}
            </p>
          </div>
          {/*END 2a*/}
          {/*BEGIN 2b*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectone[1].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"2b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectone[1].Explanation_b}
            </p>
          </div>
          {/*END 2b*/}

          {/*BEGIN IMAGE*/}
          {/*END IMAGE*/}
        </div>
        {/*END 2 END*/}

        {/*BEGIN 3 START*/}
        {/*BEGIN 3 Heading*/}
        <div
          className="bg-zinc-950 p-10 rounded-3xl xs:w-[2000px] w-full" //original xs:w-[320px]
        >
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 3 </span>
                {projectone[2].steplineheading}
              </p>
            </div>

            <img
              src={projectone[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 3 Heading*/}
          {/*BEGIN 3a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectone[2].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"3a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectone[2].Explanation_a}
            </p>
          </div>
          {/*END 3a*/}
          {/*BEGIN 3b*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectone[2].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"3b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectone[2].Explanation_b}
            </p>
          </div>
          {/*END 3b*/}
          {/*BEGIN 3c*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectone[2].stepline_c}
              </p>
              <p className="text-secondary text-[12px]">{"3c"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectone[2].Explanation_c}
            </p>
          </div>
          {/*END 3c*/}

          {/*BEGIN IMAGE*/}

          {/*END IMAGE*/}
        </div>
        {/*END 3 END*/}

        {/*BEGIN 4 START*/}
        {/*BEGIN 4 Heading*/}
        <div
          className="bg-zinc-950 p-10 rounded-3xl xs:w-[2000px] w-full" //original xs:w-[320px]
        >
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 4 </span>
                {projectone[3].steplineheading}
              </p>
            </div>

            <img
              src={projectone[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 4 Heading*/}
          {/*BEGIN 4a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectone[3].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"4a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectone[3].Explanation_a}
            </p>
          </div>
          {/*END 4a*/}
          {/*BEGIN 4b*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectone[3].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"4b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectone[3].Explanation_b}
            </p>
          </div>
          {/*END 4b*/}

          {/*BEGIN IMAGE*/}

          {/*END IMAGE*/}
        </div>
        {/*END 4 END*/}

        {/*BEGIN 5 START*/}
        {/*BEGIN 5 Heading*/}
        <div
          className="bg-zinc-950 p-10 rounded-3xl xs:w-[2000px] w-full" //original xs:w-[320px]
        >
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 5 </span>
                {projectone[4].steplineheading}
              </p>
            </div>

            <img
              src={projectone[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 5 Heading*/}
          {/*BEGIN 5a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectone[4].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"5a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectone[4].Explanation_a}
            </p>
          </div>
          {/*END 5a*/}
          {/*BEGIN 5b*/}
          <div clasName="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectone[4].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"5b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectone[4].Explanation_b}
            </p>
          </div>
          {/*END 5b*/}
          {/*BEGIN 5c*/}
          <div clasName="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectone[4].stepline_c}
              </p>
              <p className="text-secondary text-[12px]">{"5c"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectone[4].Explanation_c}
            </p>
          </div>
          {/*END 5c*/}

          {/*BEGIN IMAGE*/}
          {/*END IMAGE*/}
        </div>
        {/*END 5 END*/}
      </div>
    </div>
  );
};

export default ProjectWrapper(Feedbacks, "");
