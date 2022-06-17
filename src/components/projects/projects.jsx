import React from "react";
import "./projects.css";
import {MdNotInterested} from 'react-icons/md'
import projectImage1 from "../../assets/profile192.png";
import projectImage2 from "../../assets/profile192.png";
import projectImage3 from "../../assets/profile192.png";
import projectImage4 from "../../assets/profile192.png";
import projectImage5 from "../../assets/profile192.png";
import projectImage6 from "../../assets/profile192.png";
import projectImage7 from "../../assets/profile192.png";
import projectImage8 from "../../assets/profile192.png";

const major_project_data = [
  {
    id: 1,
    image: MdNotInterested,
    title: "Not Available Yet",
    description: "Work In Progress",
    github_link: "https://github.com/shyam640",
    demo_link: "https://github.com/shyam640",
  },
  {
    id: 2,
    image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/164736611/original/43ec0165d3115a06274fbee03c28cbfcb594117b/convert-handwritten-english-text-to-word.png',
    title: "Text To HandWritten Converter",
    description: "OCR based application that converts .txt, .docs, .pdf text files to handwritten .pdf file.Python and its libraries (cv2, pil for Image processing and fpdf for file conversion)",
    github_link: "https://github.com",
    demo_link: "https://github.com",
  },
  {
    id: 3,
    image: MdNotInterested,
    title: "Not Available Yet",
    description: "Work In Progress",
    github_link: "https://github.com",
    demo_link: "https://github.com",
  },
];
const minor_project_data = [
  {
    id: 1,
    image: 'https://user-images.githubusercontent.com/69409625/125272163-2b076000-e329-11eb-8183-bc1419b73de7.png',
    title: "Task Manager App Backend",
    description: "Backend of a task manager app with nodejs. This is ready to use backend for any project. It has multiple API endpoints and each api endpoint is tested with 'jest' nodejs package.",
    github_link: "https://github.com/shyam640/Minor_Projects/tree/master/Task%20Manager%20App",
    demo_link: "https://github.com/shyam640/Minor_Projects/tree/master/Task%20Manager%20App",
  },
  {
    id: 2,
    image: 'https://raw.githubusercontent.com/shyam640/HacPlayer-spotify-api-music-player/master/HacPlayer.png',
    title: "Spotify API based Music Player",
    description: "HacPlayer : A Music Player that is Fully Responsive and with awesome UI. This player make use of spotify api. It has authentication system and contains many features.",
    github_link: "https://github.com/shyam640/HacPlayer-spotify-api-music-player",
    demo_link: "https://shyam640.github.io/HacPlayer-spotify-api-music-player/",
  },
  {
    id: 3,
    image: 'https://user-images.githubusercontent.com/69409625/125270134-ff837600-e326-11eb-84b9-e314eff75663.png',
    title: "Weather App",
    description: "A Weather App with nodejs and ExpressJS. This app uses weather api to fetch data of different countries and places. It gives and detailed analysis of weather of a place.",
    github_link: "https://github.com/shyam640/Minor_Projects/tree/master/Weather_APP_NodeJS",
    demo_link: "https://github.com/shyam640/Minor_Projects/tree/master/Weather_APP_NodeJS",
  },
  {
    id: 4,
    image: ' ',
    title: "Not Available Yet",
    description: "Work In Progress",
    github_link: "https://github.com",
    demo_link: "https://github.com",
  },
  {
    id: 5,
    image: ' ',
    title: "Not Available Yet",
    description: "Work In Progress",
    github_link: "https://github.com",
    demo_link: "https://github.com",
  },
];

const projects = () => {
  return (
    <section id="projects">
      <h5>Have A Look At My Works!!</h5>
      <h2>My Projects</h2>

      <h3>Major Projects</h3>
      <div className="container major_projects_container">
        {major_project_data.map(
          ({ id, image, title, description, github_link, demo_link }) => {
            return (
              <article key={id} className="project_items">
                <div className="project_item_image">
                  <img src={image} alt={title} />
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="project_item_buttons">
                  <a href={github_link} className="btn" target="_blank">
                    Source Code
                  </a>
                  <a
                    href={demo_link}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          }
        )}
      </div>

      <h3>Minor Projects</h3> 
      <div className="container minor_projects_container">
        {minor_project_data.map(
          ({ id, image, title, description, github_link, demo_link }) => {
            return (
              <article key={id} className="project_items">
                <div className="project_item_image">
                  <img src={image} alt={title} />
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="project_item_buttons">
                  <a href={github_link} className="btn" target="_blank">
                    Source Code
                  </a>
                  <a
                    href={demo_link}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default projects;
