import React from "react";
import "./projects.css";
import todoApp from '../images/todoApp.png'
import priceTable from '../images/priceTable.png'
import staySafe from '../images/staySafe.png'
import voiceAssistant from '../images/voiceAssistant.png'
import landingTemplate from '../images/landingTemplate.png'
import skyScanner from '../images/skyScanner.png'
import timeManager from '../images/timeManager.png'


const Projects = () => {
  return (
    <div id="projects" className="projects perspective">
      <p className="grey calibre">My projects - 📁</p>
      <h1 className="white calibre">Stuff I’ve worked on 👇</h1>
          {/* this is the projects grid */}
        <div className="grid projects-grid">
          <a aria-label="landing-template" href="#t">
            <img src={landingTemplate} alt="" />
          </a>
          <a aria-label="todoApp" href="#t">
            <img src={todoApp} alt="" />
          </a>

          <a aria-label="staySafe" href="#t">
            <img src={staySafe} alt="" />
          </a>
          <a aria-label="voiceAssistant" href="#t">
            <img src={voiceAssistant} alt="" />
          </a>
          <a aria-label="priceTable" href="#t">
            <img src={priceTable} alt="" />
          </a>
          <a aria-label="sky-scanner" href="#t">
            <img src={skyScanner} alt="" />
          </a>
          <a aria-label="timeManager" href="#t">
            <img src={timeManager} alt="" />
          </a>
        </div>
    </div>
  );
};

export default Projects;
