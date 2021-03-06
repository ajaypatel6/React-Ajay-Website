import React from "react";
import { useParams, Link } from "react-router-dom";

const SingleProject = ({ items }) => {
  const { name } = useParams();
  // const [project, setProject] = React.useState(items);

  // React.useEffect(() => {
  //   let projectData = items.filter((project) => project.name === name);
  //   console.log(projectData);

  //   setProject(projectData);
  //   console.log(project);
  // }, [name]);

  return (
    <>
      <h1>
        <div className="title">{name}</div>
        <div className="underline"></div>
      </h1>

      <div className="project-center">
        {items.map((project) => {
          if (project.name === name) {
            const {
              id,
              // name,
              // technology,
              github,
              // image,
              // text,
              longtext,
              longtech,
              longpics1,
              longpics2,
              longpics3,
              longpics4,
              longpics5,
              mantispic1,
              mantispic2,
              mantispic3,
              mantispic4,
              mantispic5,
              live,
            } = project;
            return (
              <article key={id} className="project-item">
                <Link to="/" className="btn good-btn ">
                  <h6>Go back</h6>
                </Link>
                <div className="item-info">
                  <h4 className="item-text">{longtext}</h4>
                  <h4 className="description-text">{longtech}</h4>{" "}
                  <a className="filter-btn" href={live}>
                    Link to live website
                  </a>
                  <a className="filter-btn" href={github}>
                    Link to github
                  </a>
                  <div className="underline"></div>
                  <img src={mantispic1} className="mantis-img" />
                  <img src={mantispic2} className="mantis-img " />
                  <img src={mantispic3} className="mantis-img" />
                  <img src={mantispic4} className="mantis-img" />
                  <img src={mantispic5} className="mantis-img" />
                  <div className="images-container">
                    <img src={longpics1} className="project-img" />
                    <img src={longpics2} className="project-img" />
                    <img src={longpics3} className="project-img" />
                    <img src={longpics4} className="project-img" />
                    <img src={longpics5} className="project-img" />
                  </div>
                </div>
              </article>
            );
          }
        })}
      </div>
    </>
  );
};

export default SingleProject;
