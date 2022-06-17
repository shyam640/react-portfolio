import React from "react";
import "./skills.css";
import { MdNotInterested } from "react-icons/md";
import { DiJavascript1 } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaCuttlefish } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiAndroid } from "react-icons/si";
import { SiPostman } from "react-icons/si";

const skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have ?</h5>
      <h2>Skills Stack !!</h2>

      <div className="container skills_container">
        <div className="programming_skills">
          <h3>Programming Skills</h3>
          <div className="stage-cuve-cont">
            <div className="cubespinner">
              <div className="face1 divs" title="C++">
                <CgCPlusPlus />
              </div>
              <div className="face2 divs" title="Java">
                <FaJava />
              </div>
              <div className="face3 divs" title="Python">
                <FaPython />
              </div>
              <div className="face4 divs" title="C">
                <FaCuttlefish />
              </div>
              <div className="face5 divs" title="Not Available">
                <MdNotInterested />
              </div>
              <div className="face6 divs" title="Not Available">
                <MdNotInterested />
              </div>
            </div>
          </div>
        </div>

        <div className="web_skills">
          <h3>Web Skills</h3>

          <div className="stage-cuve-cont">
            <div className="cubespinner">
              <div className="face1 divs" title="JavaScript">
                <DiJavascript1 />
              </div>
              <div className="face2 divs" title="HTML5">
                <FaHtml5 />
              </div>
              <div className="face3 divs" title="CSS">
                <FaCss3Alt />
              </div>
              <div className="face4 divs" title="Bootstrap">
                <FaBootstrap />
              </div>
              <div className="face5 divs" title="React">
                <FaReact />
              </div>
              <div className="face6 divs" title="NodeJS">
                <FaNodeJs />
              </div>
            </div>
          </div>
        </div>

        <div className="database_and_other_skills">
          <h3>Databases and Other</h3>
          <div className="stage-cuve-cont">
            <div className="cubespinner">
              <div className="face1 divs" title="MongoDB">
                <SiMongodb />
              </div>
              <div className="face2 divs" title="Firebase">
                <SiFirebase />
              </div>
              <div className="face3 divs" title="Android Studio">
                <SiAndroid />
              </div>
              <div className="face4 divs" title="Postman">
                <SiPostman />
              </div>
              <div className="face5 divs" title="Not Available">
                <MdNotInterested />
              </div>
              <div className="face6 divs" title="Not Available">
                <MdNotInterested />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;
