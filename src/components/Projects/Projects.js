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


   const [isTabletView, setIsTabletView] = useState(window.innerWidth < 760);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletView(window.innerWidth < 760);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


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
          centerMode={!isTabletView}
          itemClassname="carousel-slide"
          centerSlidePercentage={isTabletView ? 100 : 80}
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
