import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// app = home

// pages
import Error from "./pages/Error";
import SingleProject from "./pages/SingleProject";
// import { FaBars } from "react-icons/fa";

//components
// import Header from "./components/Header";
import Languages from "./components/Languages";

import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
// import Footer from "./components/Footer";

//css
import "./index.css";

//images
import github from "./images/github.png";
import gmail from "./images/gmail.png";
import linkicon from "./images/linkicon.png";
import resume from "./images/resume.png";
//projects data
import items from "./data/data";

const allTechnologies = [
  "all",
  ...new Set(items.map((item) => item.technology)),
];

function App() {
  const [projects, setProjects] = useState(items);
  const [technologies] = useState(allTechnologies);

  const filterItems = (technology) => {
    if (technology === "all") {
      setProjects(items);
      return;
    }
    const newItems = items.filter((item) => item.technology === technology);
    setProjects(newItems);
  };

  return (
    <>
      <div classname="App">
        <nav
          class="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink"
          id="mainNav"
        >
          <div class="container px-4 px-lg-5">
            <a class="navbar-brand ajaypatel" href="/">
              Ajay Patel
            </a>
            <button
              class="navbar-toggler navbar-toggler-right filter-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              {/* <i class="FaBars"></i> */}
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class=" title-menu " href="/">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="  title-menu" href="#projects">
                    Projects
                  </a>
                </li>
                <li class="nav-item">
                  <a class="  title-menu" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header class="masthead">
          <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
            <div class="d-flex justify-content-center">
              <div class="text-center">
                <h1 class="mx-auto my-0 text-uppercase">Software Developer</h1>
                <h2 class="text-white-50 mx-auto mt-2 mb-5">
                  Currently located in Hamilton, Ontario after graduating in
                  with a Bachelors of Computer Science primarily working with
                  Java. I have interests in Gaming, Fitness and Learning new
                  technologies. Currently learning React and NodeJS as well as
                  learning Unity/C# and Blender. Looking forward to build my
                  skills and become a Full-Stack Developer to work on exciting
                  projects.
                </h2>
                <a class="btn good-btn" href="#projects">
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </header>

        <section class="projects-section " id="projects">
          {/* <div class="container px-4 px-lg-5"> */}
          <Languages></Languages>
          <Router>
            <Switch>
              <Route exact path="/">
                <Technologies
                  filterItems={filterItems}
                  technologies={technologies}
                ></Technologies>
                <Projects items={projects}></Projects>
              </Route>
              <Route path="/project/:name">
                <SingleProject items={projects} />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </Router>
        </section>

        <section class="contact-section bg-black" id="contact">
          <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5">
              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    {/* <i class="fa fa-map-marked-alt text-primary mb-2"></i> */}
                    <h4 class="text-uppercase m-0">Location</h4>
                    <hr class="my-4 mx-auto" />
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <img src={gmail} alt="gmail" className="footer-img" />

                    <h4 class="text-uppercase m-0">Email</h4>
                    <hr class="my-4 mx-auto" />
                    <div class="small text-black-50">
                      <a
                        href="mailto:ajaypatel23623@gmail.com"
                        className="footer-seperation footer-btn"
                      >
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    {/* <i class="fa fa-mobile-alt text-primary mb-2"></i> */}
                    <h4 class="text-uppercase m-0">Phone</h4>
                    <hr class="my-4 mx-auto" />
                    <div class="small text-black-50"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <img src={github} alt="github" className="footer-img" />
                    <h4 class="text-uppercase m-0">Github</h4>
                    <hr class="my-4 mx-auto" />
                    <div class="small text-black-50">
                      <a
                        href="https://github.com/ajaypatel6"
                        // className="footer-seperation footer-btn "
                      >
                        See all my projects
                      </a>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <img src={linkicon} alt="linkicon" className="footer-img" />{" "}
                    <h4 class="text-uppercase m-0">LinkedIn</h4>
                    <hr class="my-4 mx-auto" />
                    <div class="small text-black-50">
                      {" "}
                      <a

                        // className="footer-seperation footer-btn"
                      >
                        Add me on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <img src={resume} alt="resume" className="footer-img" />
                    <h4 class="text-uppercase m-0"> Resume</h4>
                    <hr class="my-4 mx-auto" />
                    <div class="small text-black-50">
                      {" "}
                      <a

                      >
                        Download Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
