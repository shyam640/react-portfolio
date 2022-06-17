import React from "react";
import "./about.css";
import AboutImage from "../../assets/aboutImage.jpg";
import { BsPen } from "react-icons/bs";
import { VscOrganization } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>A Little More About Me !!!</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <img src={AboutImage} className="about_me_image" alt="About Image" />
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsPen className="about_icon" />
              <h5>Projects</h5>
              <small>3 Major & 5+ Minor</small>
            </article>

            <article className="about_card">
              <VscOrganization className="about_icon" />
              <h5>Organizations</h5>
              <small>2+ Student Organizations</small>
            </article>
          </div>

          <p>Hey! This is Shyam Sundar Vashishtha (@its_shyam640) and I'm currently pursuing my B.Tech in computer science from Lovely Professional University (LPU). I'm a detail-oriented person and can juggle between tasks. I love to read about new techs and technological books in my spare time. 
I have always wanted to work with a startup owing to the learning opportunities it offers, and I believe I can bring up my skills on the table for my future positions.</p>
          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
