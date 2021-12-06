import React from "react";
import "./projects.css";
import todoApp from "../images/todoApp.png";
import priceTable from "../images/priceTable.png";
import staySafe from "../images/staySafe.png";
import voiceAssistant from "../images/voiceAssistant.png";
import landingTemplate from "../images/landingTemplate.png";
import skyScanner from "../images/skyScanner.png";
import timeManager from "../images/timeManager.png";

const Projects = () => {
  // const projectsData = [
  //   { name: todoApp, Id:'img-1' },
  //   { name: priceTable, id: 2 },
  //   { name: staySafe, id: 3 },
  //   { name: voiceAssistant, id: 4 },
  //   { name: landingTemplate, id: 5 },
  //   { name: skyScanner, id: 6 },
  //   { name: timeManager, id: 7 },
  // ];
  return (
    <div id="projects" className="projects perspective">
      {/* {projectClicked && (
        <ProjectCard
          infos={infos}
          className="projectCard"
        />
      )} */}
      <p className="grey calibre">My projects - 📁</p>
      <h1 className="white calibre">Stuff I’ve worked on 👇</h1>
      {/* this is the projects grid */}
      <div className="grid projects-grid">
        <a
          aria-label="landing-template"
          target="_blank"
          rel="noreferrer"
          href="https://ilyasselarbaouti.github.io/website-responsive/index.html"
        >
          <img id="0" src={landingTemplate} alt="" />
        </a>
        <a
          aria-label="todoApp"
          target="_blank"
          rel="noreferrer"
          href="https://elastic-clarke-83d712.netlify.app/"
        >
          <img id="1" src={todoApp} alt="" />
        </a>

        <a href="#e" aria-label="staySafe">
          <img id="2" src={staySafe} alt="" />
        </a>
        <a aria-label="voiceAssistant" href="#t">
          <img id="3" src={voiceAssistant} alt="" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://ilyasselarbaouti.github.io/gromcodeProject2/index.html"
          aria-label="priceTable"
        >
          <img id="4" src={priceTable} alt="" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://ilyasselarbaouti.github.io/gromcodeProject2/index.html"
          aria-label="sky-scanner"
        >
          <img id="5" src={skyScanner} alt="" />
        </a>
        <a aria-label="timeManager" href="#t">
          <img id="6" src={timeManager} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
