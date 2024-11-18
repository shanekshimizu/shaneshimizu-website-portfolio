import React, { useEffect } from "react";
import { styles } from "../styles";
import { ProjectWrapper } from "../hoc";
import { projectthree } from "../constants";
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
        test
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
          <p className={styles.sectionSubText}>Project Three</p>
          <h2 className={styles.sectionHeadTextTwo}>
            Deploying a Serverless Website in AWS
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
              src={projectthree[0].image} //change the image for the project cards
              alt="project_image"
              className="w-full h-full object-contain rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "https://github.com/shanekshimizu/shaneshimizu-website-portfolio")} //the link for the project github icon
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
              {projectthree[0].overview}
            </p>

            <div className="mt-7 flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[16px]">
                  <span className="blue-text-gradient">PROJECT OVERVIEW</span>
                </p>
              </div>

              <img
                src={projectthree[0].image}
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
                {projectthree[0].steplineheading}
              </p>
            </div>

            <img
              src={projectthree[0].image}
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
                {projectthree[0].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"1a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectthree[0].explanation_a}
            </p>
          </div>
          {/*END 1a*/}
          {/*BEGIN 1b*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectthree[0].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"1b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectthree[0].explanation_b}
            </p>
          </div>
          {/*END 1b*/}
          {/*BEGIN 1c*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectthree[0].stepline_c}
              </p>
              <p className="text-secondary text-[12px]">{"1c"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectthree[0].explanation_c}
            </p>
          </div>
          {/*END 1c*/}
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
                {projectthree[1].steplineheading}
              </p>
            </div>

            <img
              src={projectthree[0].image}
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
                {projectthree[1].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"2a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectthree[1].explanation_a}
            </p>
          </div>
          {/*END 2a*/}
          {/*BEGIN 2a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectthree[1].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"2b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectthree[1].explanation_b}
            </p>
          </div>
          {/*END 2a*/}

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
                {projectthree[2].steplineheading}
              </p>
            </div>

            <img
              src={projectthree[0].image}
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
                {projectthree[2].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"3a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectthree[2].explanation_a}
            </p>
          </div>
          {/*END 3a*/}
          {/*BEGIN 3b*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectthree[2].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"3b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectthree[2].explanation_b}
            </p>
          </div>
          {/*END 3b*/}
          {/*BEGIN 3c*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectthree[2].stepline_c}
              </p>
              <p className="text-secondary text-[12px]">{"3c"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectthree[2].explanation_c}
            </p>
          </div>
          {/*END 3c*/}
          {/*BEGIN 3d*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectthree[2].stepline_d}
              </p>
              <p className="text-secondary text-[12px]">{"3d"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectthree[2].explanation_d}
            </p>
          </div>
          {/*BEGIN 3e*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectthree[2].stepline_e}
              </p>
              <p className="text-secondary text-[12px]">{"3e"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectthree[2].explanation_e}
            </p>
          </div>
          {/*END 3e*/}
          {/*END 3d*/}
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
                {projectthree[3].steplineheading}
              </p>
            </div>

            <img
              src={projectthree[0].image}
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
                {projectthree[3].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"4a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectthree[3].explanation_a}
            </p>
          </div>
          {/*END 4a*/}
          {/*BEGIN 4b*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectthree[3].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"4b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectthree[3].explanation_b}
            </p>
          </div>
          {/*END 4b*/}
          {/*BEGIN 4c*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectthree[3].stepline_c}
              </p>
              <p className="text-secondary text-[12px]">{"4c"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectthree[3].explanation_c}
            </p>
          </div>
          {/*END 4c*/}
          {/*BEGIN 4d*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectthree[3].stepline_d}
              </p>
              <p className="text-secondary text-[12px]">{"4d"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectthree[3].explanation_d}
            </p>
          </div>
          {/*BEGIN 4e*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectthree[3].stepline_e}
              </p>
              <p className="text-secondary text-[12px]">{"4e"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectthree[3].explanation_e}
            </p>
          </div>
          {/*END 4e*/}
          {/*END 4d*/}
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
                {projectthree[4].steplineheading}
              </p>
            </div>

            <img
              src={projectthree[0].image}
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
                {projectthree[4].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"5a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectthree[4].explanation_a}
            </p>
          </div>
          {/*END 5a*/}

          {/*BEGIN IMAGE*/}
          {/*END IMAGE*/}
        </div>
        {/*END 5 END*/}

        {/*BEGIN 6 START*/}
        {/*BEGIN 6 Heading*/}
        <div
          className="bg-zinc-950 p-10 rounded-3xl xs:w-[2000px] w-full" //original xs:w-[320px]
        >
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 6 </span>
                {projectthree[5].steplineheading}
              </p>
            </div>

            <img
              src={projectthree[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 6 Heading*/}
          {/*BEGIN 6a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectthree[5].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"6a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectthree[5].explanation_a}
            </p>
          </div>
          {/*END 6a*/}

          {/*BEGIN IMAGE*/}
          {/*END IMAGE*/}
        </div>
        {/*END 6 END*/}

        {/*BEGIN 7 START*/}
        {/*BEGIN 7 Heading*/}
        <div
          className="bg-zinc-950 p-10 rounded-3xl xs:w-[2000px] w-full" //original xs:w-[320px]
        >
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 7 </span>
                {projectthree[6].steplineheading}
              </p>
            </div>

            <img
              src={projectthree[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 7 Heading*/}
          {/*BEGIN 7a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectthree[6].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"7a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectthree[6].explanation_a}
            </p>
          </div>
          {/*END 7a*/}
          {/*BEGIN 7b*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projectthree[6].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"7b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projectthree[6].explanation_b}
            </p>
          </div>
          {/*END 7b*/}

          {/*BEGIN IMAGE*/}
          {/*END IMAGE*/}
        </div>
        {/*END 7 END*/}
      </div>
    </div>
  );
};

export default ProjectWrapper(Feedbacks, "");
