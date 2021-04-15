import React from "react";
import { Link } from "react-router-dom";

const Projects = ({ items }) => {
  return (
    <>
      <div className="section-center">
        {items.map((project) => {
          const { id, name, technology, github, image, text } = project;
          return (
            <article key={id} className="menu-item">
              <img src={image} alt={name} className="photo" />

              <div className="item-info">
                <header>
                  <h4 className="project-title">{name}</h4>
                  {/* <img src={mainLogo} alt={github} className="smaller" /> */}
                </header>
                <p className="item-text">{text}</p>

                <Link to={`/project/${name}`} className="btn good-btn">
                  Details about {name}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
