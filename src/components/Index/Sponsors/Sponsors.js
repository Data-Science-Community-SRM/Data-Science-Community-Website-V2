import React from "react";

import classes from "./Sponsors.module.css";
import bitgrit from "../../../assets/images/sponsors/bitgrit.svg";
import srmlogo from "../../../assets/images/sponsors/srm.png";
import awslogo from "../../../assets/images/sponsors/aws.svg";
import datacamp from "../../../assets/images/sponsors/datacamp.svg";
import codingblocks from "../../../assets/images/sponsors/codingblocks.svg";
import popcorn from "../../../assets/images/sponsors/pop.png";

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
        <div className={classes.sponsors + " col-12 col-lg-8 mx-auto"}>
          <div className="col-12 row mx-auto text-center">
            <div className="mx-auto col-12 col-sm-6 col-md-4 mt-5">
              <img
                data-aos={
                  window.innerWidth < 768 ? "fade-up" : "fade-down-right"
                }
                src={bitgrit}
                alt="bitgrit"
                width="100px"
              />
              <p className="mt-3">BITGRIT</p>
            </div>
            <div className="mx-auto col-12 col-sm-6 col-md-4 mt-5">
              <img
                data-aos={window.innerWidth < 768 ? "fade-up" : "fade-down"}
                src={srmlogo}
                alt="srm"
                width="100px"
              />
              <p className="mt-3">SRMIST</p>
            </div>
            <div className="mx-auto col-12 col-sm-6 col-md-4 mt-5">
              <img
                data-aos={
                  window.innerWidth < 768 ? "fade-up" : "fade-down-left"
                }
                src={awslogo}
                alt="aws"
                width="100px"
              />
              <p className="mt-3">AMAZON WEB SERVICES</p>
            </div>
            <div className="mx-auto col-12 col-sm-6 col-md-4 mt-5">
              <img
                data-aos={window.innerWidth < 768 ? "fade-up" : "fade-up-right"}
                src={datacamp}
                alt="datacamp"
                width="100px"
              />
              <p className="mt-3">DATACAMP</p>
            </div>
            <div className="mx-auto col-12 col-sm-6 col-md-4 mt-5">
              <img
                data-aos={window.innerWidth < 768 ? "fade-up" : "fade-up"}
                src={codingblocks}
                alt="codingblocks"
                width="100px"
              />
              <p className="mt-3">CODING BLOCKS</p>
            </div>
            <div className="mx-auto col-12 col-sm-6 col-md-4 mt-5">
              <img
                data-aos={window.innerWidth < 768 ? "fade-up" : "fade-up-left"}
                src={popcorn}
                alt="popcorn"
                width="100px"
              />
              <p className="mt-3">THE POPCORN THEORY</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home_Section2;
