import React from "react";
import "../Projects/Projects.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import projectsLogo from "../Projects/project-page.svg";
import { useState, useEffect } from "react";
import slides from "../Projects/data.json";
import Carouselcard from "./Carouselcard";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import CardCat from "../Projects/CardCat";


function Projects() {
  // const [projectData, setProjectData] = useState([]);
  //  const  fetchData = () => {
  //   return fetch("https://dsc-admin.herokuapp.com/api/v1/project/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProjectData(data.data[0]);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const getProjects = () => {
  //   let projectCards = [];
  //   for (let projects of projectData) {
  //     console.log(projects);
  //     projectCards.push(
  //       <div className='project__card'>
  //         <div className='project__card__left'>
  //           <a href={projects.link} target='_blank' rel="noopener noreferrer">
  //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#fff' id='svg__card'><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
  //           </a>
  //           <h1>{projects.title}</h1>
  //         </div>
  //         <div className='project__card__right'>
  //           <p>{projects.description}</p>
  //           <img src={projects.img} alt='imj'></img>
  //         </div>
  //       </div>
  //     );
  //   }

  //   return projectCards;
  // };

  return (
    <div>
      <div className="maincont">
        <div className="upperbd">
          <h1
            data-aos="zoom-in-up"
            style={{ marginTop: "80px" }}
            className="head"
          >
            Projects
          </h1>
          <p>
            We apply our coding skills to a wide range of datasets to solve
            real-world problems. Here are some inspirational ideas and their
            implementations from our brilliant community members. Check out
            these projects below!
          </p>
        </div>
        <div className="sidebd">
          <img src={projectsLogo} alt="" />
        </div>
      </div>
      {/* <div className="card-container"> */}
      {/* {getProjects()} */}
      <div className="main-container">
        <Carousel
          className="projectcard"
          // autoPlay={true}
          infiniteLoop={true}
          axis="horizontal"
          showStatus={false}
          showIndicators={false}
          transitionTime={1000}
          centerMode={true}
          itemClassname="carousel-slide"
          centerSlidePercentage={80}
          // width={'80%'}

          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${hasPrev ? "absolute" : "hidden"} arrowPrev`}
                onClick={clickHandler}
              >
                <IoArrowBackCircleOutline size={30} />
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${hasNext ? "absolute" : "hidden"} arrowNext`}
                onClick={clickHandler}
              >
                <IoArrowForwardCircleOutline size={30} />
              </div>
            );
          }}
        >
          {slides.map((slide) => (
            <>
              <Carouselcard
                key={slide.index}
                title={slide.title}
                description={slide.description}
                image={slide.image}
                // index={slide.index}
                repo_link={slide.repo_link}
                deployed_link={slide.deployed_link}
              />
            </>
          ))}
        </Carousel>

        <div className="cardcat">
          <CardCat />
        </div>

           


      </div>
    </div>
  );
}
export default Projects;
