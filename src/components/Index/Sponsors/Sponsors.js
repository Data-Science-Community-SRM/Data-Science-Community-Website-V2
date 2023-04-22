import React from "react";

import classes from "./Sponsors.module.css";
import devfolio from "../../../assets/images/sponsors/devfolio.svg";
import polygon from "../../../assets/images/sponsors/polygon.svg";
import filecoin from "../../../assets/images/sponsors/filecoin.svg";
import challasconsultancy from "../../../assets/images/sponsors/challasconsultancy.svg";
import learnnovators from "../../../assets/images/sponsors/learnnovators.jpeg";
import srmlogo from "../../../assets/images/sponsors/srm.png";
import awslogo from "../../../assets/images/sponsors/aws.svg";
import datacamp from "../../../assets/images/sponsors/datacamp.svg";
const Home_Section2 = () => {
  return (
    <React.Fragment>
      <div className={classes.main + " mx-auto"}>
        <div className="col-12 col-lg-8 mx-auto text-center">
          <h1 data-aos="flip-up">
            <span style={{ color: "#6F389F" }}>S</span>PONSORS.
          </h1>
          <p>
            Our events, research, and projects are made possible by the support
            of our Partners and sponsors. They have helped us making all this
            possible.
          </p>
        </div>
        <div className={classes.sponsors + " col-12 col-lg-11 mx-auto"}>
          <div className="col-12 row mx-auto text-center">
            <div className="mx-auto col-12 col-sm-6 col-md-3 mt-5">
              <img
                data-aos={
                  window.innerWidth < 768 ? "fade-up" : "fade-down-right"
                }
                src={devfolio}
                alt="devfolio"
                width="100px"
                height="100px"
              />
              <p className="mt-3">DEVFOLIO</p>
            </div>
            <div className="mx-auto col-12 col-sm-6 col-md-3 mt-5">
              <img
                data-aos={window.innerWidth < 768 ? "fade-up" : "fade-down"}
                src={srmlogo}
                alt="srm"
                width="100px"
                height="100px"
              />
              <p className="mt-3">SRMIST</p>
            </div>
            <div className="mx-auto col-12 col-sm-6 col-md-3 mt-5">
              <img
                data-aos={
                  window.innerWidth < 768 ? "fade-up" : "fade-down-left"
                }
                src={awslogo}
                alt="aws"
                width="100px"
                height="100px"
              />
              <p className="mt-3">AMAZON WEB SERVICES</p>
            </div>
            <div className="mx-auto col-12 col-sm-6 col-md-3 mt-5">
              <img
                data-aos={
                  window.innerWidth < 768 ? "fade-up" : "fade-down-left"
                }
                src={filecoin}
                alt="filecoin"
                width="100px"
                height="100px"
              />
              <p className="mt-3">FILECOIN</p>
            </div>
            <div className="mx-auto col-12 col-sm-6 col-md-3 mt-5">
              <img
                data-aos={window.innerWidth < 768 ? "fade-up" : "fade-up-right"}
                src={datacamp}
                alt="datacamp"
                width="100px"
                height="100px"
              />
              <p className="mt-3">DATACAMP</p>
            </div>
            <div className="mx-auto col-12 col-sm-6 col-md-3 mt-5">
              <img
                data-aos={window.innerWidth < 768 ? "fade-up" : "fade-up"}
                src={polygon}
                alt="polygon"
                width="100px"
                height="100px"
              />
              <p className="mt-3">POLYGON</p>
            </div>
            <div className="mx-auto col-12 col-sm-6 col-md-3 mt-5">
              <img
                data-aos={window.innerWidth < 768 ? "fade-up" : "fade-up-left"}
                src={learnnovators}
                alt="learnnovators"
                width="100px"
                height="100px"
              />
              <p className="mt-3">LEARNNOVATORS</p>
            </div>
            <div className="mx-auto col-12 col-sm-6 col-md-3 mt-5">
              <img
                data-aos={window.innerWidth < 768 ? "fade-up" : "fade-up-left"}
                src={challasconsultancy}
                alt="challasconsultancy"
                width="100px"
                height="100px"
              />
              <p className="mt-3">CHALLAS CONSULTANCY</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home_Section2;
