import React, { useEffect } from "react";
import { styles } from "../styles";
import { ProjectWrapper } from "../hoc";
import { projecttwo } from "../constants";
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
          onClick={() => window.open(source_code_link, "https://github.com/shanekshimizu")} //the link for the project github icon
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

        <img
          src={"test"}
          alt={`feedback_by-${"test"}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </div>
);

const Feedbacks = ({
  index,
  testimonialtwo,
  name,
  designation,
  stepline,
  image,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`mt-12 bg-zinc-900 rounded-[20px]`}>
      <div
        className={`bg-zinc-800 rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <div>
          <p className={styles.sectionSubText}>Project Two</p>
          <h2 className={styles.sectionHeadTextTwo}>
            Deploying a Highly Available WordPress Website in AWS
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
              src={projecttwo[0].image} //change the image for the project cards
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
              {projecttwo[0].overview}
            </p>

            <div className="mt-7 flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[16px]">
                  <span className="blue-text-gradient">PROJECT OVERVIEW</span>
                </p>
              </div>

              <img
                src={projecttwo[0].image}
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
                {projecttwo[0].steplineheading}
              </p>
            </div>

            <img
              src={projecttwo[0].image}
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
                {projecttwo[0].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"1a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[0].Explanation_a}
            </p>
          </div>
          {/*END 1a*/}
          {/*BEGIN 1b*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[0].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"1b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[0].Explanation_b}
            </p>
          </div>
          {/*END 1b*/}
          {/*BEGIN 1c*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[0].stepline_c}
              </p>
              <p className="text-secondary text-[12px]">{"1c"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[0].Explanation_c}
            </p>
          </div>
          {/*END 1c*/}
          {/*BEGIN IMAGE*/}
          <div className="mt-1">
            <div className="mt-7 flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[16px] pb-5">
                  <span className="blue-text-gradient">STEP 1</span>{" "}
                  {"Diagram Summary"}
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[830px]">
            {""}
            <img
              src={projecttwo[0].imagesummary} //change the image for the project cards
              alt="project_image"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
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
                {projecttwo[1].steplineheading}
              </p>
            </div>

            <img
              src={projecttwo[0].image}
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
                {projecttwo[1].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"2a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[1].Explanation_a}
            </p>
          </div>
          {/*END 2a*/}

          {/*BEGIN IMAGE*/}
          <div className="mt-1">
            <div className="mt-7 flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[16px] pb-5">
                  <span className="blue-text-gradient">Step 2</span>{" "}
                  {"Diagram Summary"}
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[830px]">
            {""}
            <img
              src={projecttwo[1].imagesummary} //change the image for the project cards
              alt="project_image"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
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
                <span className="blue-text-gradient">STEP 3</span>{" "}
                {projecttwo[2].steplineheading}
              </p>
            </div>

            <img
              src={projecttwo[0].image}
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
                {projecttwo[2].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"3a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[2].Explanation_a}
            </p>
          </div>
          {/*END 3a*/}
          {/*BEGIN 3b*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[2].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"3b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[2].Explanation_b}
            </p>
          </div>
          {/*END 3b*/}

          {/*BEGIN IMAGE*/}
          <div className="mt-1">
            <div className="mt-7 flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[16px] pb-5">
                  <span className="blue-text-gradient">Step 3</span>{" "}
                  {"Diagram Summary"}
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[830px]">
            {""}
            <img
              src={projecttwo[2].imagesummary} //change the image for the project cards
              alt="project_image"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
          {/*END IMAGE*/}
        </div>
        {/*END 3 END*/}

        {/*BEGIN 4 and 5 START*/}
        {/*BEGIN 4 Heading*/}
        <div
          className="bg-zinc-950 p-10 rounded-3xl xs:w-[2000px] w-full" //original xs:w-[320px]
        >
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 4</span>{" "}
                {projecttwo[3].steplineheading}
              </p>
            </div>

            <img
              src={projecttwo[0].image}
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
                {projecttwo[3].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"4a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[3].Explanation_a}
            </p>
          </div>
          {/*END 4a*/}
          {/*BEGIN 4b*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[3].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"4b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[3].Explanation_b}
            </p>
          </div>
          {/*END 4b*/}
          {/*BEGIN 5 Heading*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 5</span>{" "}
                {projecttwo[4].steplineheading}
              </p>
            </div>

            <img
              src={projecttwo[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 5 Heading*/}
          {/*BEGIN 45a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[4].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"5a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[4].Explanation_a}
            </p>
          </div>
          {/*END 5a*/}
          {/*BEGIN IMAGE*/}
          <div className="mt-1">
            <div className="mt-7 flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[16px] pb-5">
                  <span className="blue-text-gradient">Step 4 and 5</span>{" "}
                  {"Diagram Summary"}
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[830px]">
            {""}
            <img
              src={projecttwo[3].imagesummary} //change the image for the project cards
              alt="project_image"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
          {/*END IMAGE*/}
        </div>
        {/*END 4 and 5 END*/}

        {/*BEGIN 6 START*/}
        {/*BEGIN 6 Heading*/}
        <div
          className="bg-zinc-950 p-10 rounded-3xl xs:w-[2000px] w-full" //original xs:w-[320px]
        >
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 6</span>{" "}
                {projecttwo[5].steplineheading}
              </p>
            </div>

            <img
              src={projecttwo[0].image}
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
                {projecttwo[5].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"6a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[5].Explanation_a}
            </p>
          </div>
          {/*END 6a*/}
          {/*BEGIN 6b*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[5].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"6b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[5].Explanation_b}
            </p>
          </div>
          {/*END 6b*/}
          {/*BEGIN 6c*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[5].stepline_c}
              </p>
              <p className="text-secondary text-[12px]">{"6c"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[5].Explanation_c}
            </p>
          </div>
          {/*END 6c*/}

          {/*BEGIN IMAGE*/}
          <div className="mt-1">
            <div className="mt-7 flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[16px] pb-5">
                  <span className="blue-text-gradient">Step 6</span>{" "}
                  {"Diagram Summary"}
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[830px]">
            {""}
            <img
              src={projecttwo[5].imagesummary} //change the image for the project cards
              alt="project_image"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
          {/*END IMAGE*/}
        </div>
        {/*END 6 END*/}

        {/*BEGIN 7 and 8 START*/}
        {/*BEGIN 7 Heading*/}
        <div
          className="bg-zinc-950 p-10 rounded-3xl xs:w-[2000px] w-full" //original xs:w-[320px]
        >
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 7</span>{" "}
                {projecttwo[6].steplineheading}
              </p>
            </div>

            <img
              src={projecttwo[0].image}
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
                {projecttwo[6].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"7a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[6].Explanation_a}
            </p>
          </div>
          {/*END 7a*/}
          {/*BEGIN 7b*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[6].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"7b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[6].Explanation_b}
            </p>
          </div>
          {/*END 7b*/}
          {/*BEGIN 8 Heading*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 8</span>{" "}
                {projecttwo[7].steplineheading}
              </p>
            </div>

            <img
              src={projecttwo[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 8 Heading*/}
          {/*BEGIN 8a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[7].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"8a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[7].Explanation_a}
            </p>
          </div>
          {/*END 8a*/}
          {/*BEGIN IMAGE*/}
          <div className="mt-1">
            <div className="mt-7 flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[16px] pb-5">
                  <span className="blue-text-gradient">Step 7 and 8</span>{" "}
                  {"Diagram Summary"}
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[830px]">
            {""}
            <img
              src={projecttwo[6].imagesummary} //change the image for the project cards
              alt="project_image"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
          {/*END IMAGE*/}
        </div>
        {/*END 7 and 8 END*/}

        {/*BEGIN 9 START*/}
        {/*BEGIN 9 Heading*/}
        <div
          className="bg-zinc-950 p-10 rounded-3xl xs:w-[2000px] w-full" //original xs:w-[320px]
        >
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 9</span>{" "}
                {projecttwo[8].steplineheading}
              </p>
            </div>

            <img
              src={projecttwo[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 9 Heading*/}
          {/*BEGIN 9a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[8].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"9a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[8].Explanation_a}
            </p>
          </div>
          {/*END 9a*/}
          {/*BEGIN 9b*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[8].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"9b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[8].Explanation_b}
            </p>
          </div>
          {/*END 9b*/}
          {/*BEGIN 9c*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[8].stepline_c}
              </p>
              <p className="text-secondary text-[12px]">{"9c"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[8].Explanation_c}
            </p>
          </div>
          {/*END 9c*/}
          {/*BEGIN 9d*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[8].stepline_d}
              </p>
              <p className="text-secondary text-[12px]">{"9d"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[8].Explanation_d}
            </p>
          </div>
          {/*END 9d*/}
          {/*BEGIN IMAGE*/}
          <div className="mt-1">
            <div className="mt-7 flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[16px] pb-5">
                  <span className="blue-text-gradient">Step 9</span>{" "}
                  {"Diagram Summary"}
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[830px]">
            {""}
            <img
              src={projecttwo[8].imagesummary} //change the image for the project cards
              alt="project_image"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
          {/*END IMAGE*/}
        </div>
        {/*END 9 END*/}

        {/*BEGIN 10-14 START*/}
        {/*BEGIN 10 Heading*/}
        <div
          className="bg-zinc-950 p-10 rounded-3xl xs:w-[2000px] w-full" //original xs:w-[320px]
        >
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 10</span>{" "}
                {projecttwo[6].steplineheading}
              </p>
            </div>

            <img
              src={projecttwo[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 10 Heading*/}
          {/*BEGIN 10a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[9].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"10a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[9].Explanation_a}
            </p>
          </div>
          {/*END 10a*/}
          {/*BEGIN 11 Heading*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 11</span>{" "}
                {projecttwo[10].steplineheading}
              </p>
            </div>

            <img
              src={projecttwo[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 11 Heading*/}
          {/*BEGIN 11a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[10].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"11a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[10].Explanation_a}
            </p>
          </div>
          {/*END 11a*/}
          {/*BEGIN 11b*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[10].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"11b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[10].Explanation_b}
            </p>
          </div>
          {/*END 11b*/}
          {/*BEGIN 12 Heading*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 12</span>{" "}
                {projecttwo[11].steplineheading}
              </p>
            </div>

            <img
              src={projecttwo[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 12 Heading*/}
          {/*BEGIN 12a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[11].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"12a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[11].Explanation_a}
            </p>
          </div>
          {/*END 12a*/}
          {/*BEGIN 12b*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[11].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"12b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[11].Explanation_b}
            </p>
          </div>
          {/*END 12b*/}
          {/*BEGIN 12c*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[11].stepline_c}
              </p>
              <p className="text-secondary text-[12px]">{"12c"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[11].Explanation_c}
            </p>
          </div>
          {/*END 12c*/}
          {/*BEGIN 13 Heading*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 13</span>{" "}
                {projecttwo[12].steplineheading}
              </p>
            </div>

            <img
              src={projecttwo[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 13 Heading*/}
          {/*BEGIN 13a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[12].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"13a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[12].Explanation_a}
            </p>
          </div>
          {/*END 13a*/}
          {/*BEGIN 14 Heading*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 14</span>{" "}
                {projecttwo[13].steplineheading}
              </p>
            </div>

            <img
              src={projecttwo[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 14 Heading*/}
          {/*BEGIN 14a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[13].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"14a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[13].Explanation_a}
            </p>
          </div>
          {/*END 14a*/}
          {/*BEGIN IMAGE*/}
          <div className="mt-1">
            <div className="mt-7 flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[16px] pb-5">
                  <span className="blue-text-gradient">Step 10-14</span>{" "}
                  {"Diagram Summary"}
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[830px]">
            {""}
            <img
              src={projecttwo[9].imagesummary} //change the image for the project cards
              alt="project_image"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
          {/*END IMAGE*/}
        </div>
        {/*END 10-14 END*/}

        {/*BEGIN 15 START*/}
        {/*BEGIN 15 Heading*/}
        <div
          className="bg-zinc-950 p-10 rounded-3xl xs:w-[2000px] w-full" //original xs:w-[320px]
        >
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 15</span>{" "}
                {projecttwo[14].steplineheading}
              </p>
            </div>

            <img
              src={projecttwo[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 15 Heading*/}
          {/*BEGIN 15a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[14].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"15a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[14].Explanation_a}
            </p>
          </div>
          {/*END 15a*/}
          {/*BEGIN 15b*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[14].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"15b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[14].Explanation_b}
            </p>
          </div>
          {/*END 15b*/}

          {/*BEGIN IMAGE*/}
          <div className="mt-1">
            <div className="mt-7 flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[16px] pb-5">
                  <span className="blue-text-gradient">Step 15</span>{" "}
                  {"Diagram Summary"}
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[830px]">
            {""}
            <img
              src={projecttwo[14].imagesummary} //change the image for the project cards
              alt="project_image"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
          {/*END IMAGE*/}
        </div>
        {/*END 15 END*/}

        {/*BEGIN 16 START*/}
        {/*BEGIN 16 Heading*/}
        <div
          className="bg-zinc-950 p-10 rounded-3xl xs:w-[2000px] w-full" //original xs:w-[320px]
        >
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 16</span>{" "}
                {projecttwo[15].steplineheading}
              </p>
            </div>

            <img
              src={projecttwo[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 16 Heading*/}
          {/*BEGIN 16a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[15].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"16a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[15].Explanation_a}
            </p>
          </div>
          {/*END 16a*/}
          {/*BEGIN 16b*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[15].stepline_b}
              </p>
              <p className="text-secondary text-[12px]">{"16b"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[15].Explanation_b}
            </p>
          </div>
          {/*END 16b*/}
          {/*BEGIN 16c*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[15].stepline_c}
              </p>
              <p className="text-secondary text-[12px]">{"16c"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[15].Explanation_c}
            </p>
          </div>
          {/*END 16c*/}
          {/*BEGIN 16d*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[15].stepline_d}
              </p>
              <p className="text-secondary text-[12px]">{"16d"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[15].Explanation_d}
            </p>
          </div>
          {/*END 16d*/}
          {/*BEGIN 16e*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[15].stepline_e}
              </p>
              <p className="text-secondary text-[12px]">{"16e"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[15].Explanation_e}
            </p>
          </div>
          {/*END 16e*/}
          {/*BEGIN 16f*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[15].stepline_f}
              </p>
              <p className="text-secondary text-[12px]">{"16f"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[15].Explanation_f}
            </p>
          </div>
          {/*END 16f*/}
          {/*BEGIN 16g*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[15].stepline_g}
              </p>
              <p className="text-secondary text-[12px]">{"16g"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[15].Explanation_g}
            </p>
          </div>
          {/*END 16g*/}
          {/*BEGIN 16h*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[15].stepline_h}
              </p>
              <p className="text-secondary text-[12px]">{"16h"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[15].Explanation_h}
            </p>
          </div>
          {/*END 16h*/}

          {/*BEGIN IMAGE*/}
          <div className="mt-1">
            <div className="mt-7 flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[16px] pb-5">
                  <span className="blue-text-gradient">Step 16</span>{" "}
                  {"Diagram Summary"}
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[830px]">
            {""}
            <img
              src={projecttwo[15].imagesummary} //change the image for the project cards
              alt="project_image"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
          {/*END IMAGE*/}
        </div>
        {/*END 16 END*/}

        {/*BEGIN 17 and 18 START*/}
        {/*BEGIN 17 Heading*/}
        <div
          className="bg-zinc-950 p-10 rounded-3xl xs:w-[2000px] w-full" //original xs:w-[320px]
        >
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 17</span>{" "}
                {projecttwo[16].steplineheading}
              </p>
            </div>

            <img
              src={projecttwo[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 17 Heading*/}
          {/*BEGIN 17a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[16].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"17a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[16].Explanation_a}
            </p>
          </div>
          {/*END 17a*/}
          {/*BEGIN 18 Heading*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[20px]">
                <span className="blue-text-gradient">STEP 18</span>{" "}
                {projecttwo[17].steplineheading}
              </p>
            </div>

            <img
              src={projecttwo[0].image}
              alt={`feedback_by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="mt-7"></div>
          {/*END 18 Heading*/}
          {/*BEGIN 18a*/}
          <div className="mt-1 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">STEP</span>{" "}
                {projecttwo[17].stepline_a}
              </p>
              <p className="text-secondary text-[12px]">{"18a"}</p>
            </div>
          </div>
          <div className="mt-7">
            <p className="text-white tracking-wider text-[18px] pb-5">
              {projecttwo[17].Explanation_a}
            </p>
          </div>
          {/*END 18a*/}
          {/*BEGIN IMAGE*/}
          <div className="mt-1">
            <div className="mt-7 flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[16px] pb-5">
                  <span className="blue-text-gradient">Step 17 and 18</span>{" "}
                  {"Diagram Summary"}
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[830px]">
            {""}
            <img
              src={projecttwo[16].imagesummary} //change the image for the project cards
              alt="project_image"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
          {/*END IMAGE*/}
        </div>
        {/*END 17 and 18 END*/}
      </div>
    </div>
  );
};

export default ProjectWrapper(Feedbacks, "");
