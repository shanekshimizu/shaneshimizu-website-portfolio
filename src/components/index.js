import { BallCanvas, ComputersCanvas } from "./canvas";
import { useState, useEffect } from "react";

import Hero from "./Hero";
import Navbar from "./Navbar";
import ProjectNav from "./ProjectNav";
import About from "./About";
import Tech from "./Tech";
import Experience from "./Experience";
import Works from "./Works";
import Contact from "./Contact";

import ProjectsOne from "./ProjectsOne";
import ProjectsTwo from "./ProjectsTwo";
import ProjectsThree from "./ProjectsThree";
import ProjectsFour from "./ProjectsFour";
import ProjectsFive from "./ProjectsFive";
import ProjectsSix from "./ProjectsSix";

function Counter() {
  const [counts, setData] = useState([]);

  useEffect(function () {
    async function fetchData() {
      const result = await fetch("");
      const data = await result.json();
      setData(data)
    }
    fetchData();
  }, []);

  return(
    counts
  )

}


export {
  Hero,
  Navbar,
  ProjectNav,
  About,
  Tech,
  Experience,
  Works,
  ProjectsOne,
  ProjectsTwo,
  ProjectsThree,
  ProjectsFour,
  ProjectsFive,
  ProjectsSix,
  Contact,
  BallCanvas,
  ComputersCanvas,
  Counter
};
