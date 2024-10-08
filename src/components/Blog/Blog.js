import React from "react";
import "./Blog.css";
import bc from "../../assets/images/blog/bc.png";
import ai from "../../assets/images/blog/ai.png";
import web from "../../assets/images/blog/web.png";

const categories = [
  {
    title: "Web Development",
    tag: "web-development",
    description: "Explore the latest trends and techniques in web development.",
    image: web,
  },
  {
    title: "Data Science",
    tag: "data-science",
    description: "Dive into the world of data science and analytics.",
    image: ai,
  },
  {
    title: "Blockchain",
    tag: "blockchain",
    description: "Discover the revolutionary technology behind blockchain.",
    image: bc,
  },
];

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imageSrc} className="box" alt="box" />
          <h2>{title} Blogs</h2>
        </div>
        <div className="flip-card-back">
          <img src={imageSrc} className="box" alt="box" />
          <h2>{title}</h2>
          <p>{description}</p>
          <button className="view-more-button">Read Blogs</button>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="col-12 col-lg-9 mx-auto">
      <h1 data-aos="zoom-in-up" style={{ marginTop: "120px" }}>
        DataX Journal Blogs
      </h1>
      <hr />
      <div className="cards">
        {categories.map((category, index) => (
          <div
            key={index}
            className="card-elements"
            onClick={() =>
              window.open(
                `https://medium.com/data-science-community-srm/tagged/${category.tag}`
              )
            }
          >
            <Card
              imageSrc={category.image}
              title={category.title}
              description={category.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
