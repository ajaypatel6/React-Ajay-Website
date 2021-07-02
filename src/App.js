import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// app = home

// pages
import Error from "./pages/Error";
import SingleProject from "./pages/SingleProject";
import { FaBars } from "react-icons/fa";

//components
import Header from "./components/Header";
import Description from "./components/Description";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

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
  const [technologies, setTechnologies] = useState(allTechnologies);

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
            <a class="navbar-brand" href="#">
              Ajay Patel
            </a>
            <button
              class="navbar-toggler navbar-toggler-right"
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
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">
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
                  FORMATTING Currently located in Hamilton, Ontario after
                  graduating in October 2020 with a Bachelors of Computer
                  Science. I have interests in Gaming, Fitness and Learning new
                  technologies, currently learning React and NodeJS. Looking
                  forward to build my skills and become a Full-Stack Developer
                  to work on exciting projects
                </h2>
                <a class="btn btn-primary" href="#projects">
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </header>

        <section class="projects-section bg-light" id="projects">
          <div class="container px-4 px-lg-5">
            {/* <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
              <div class="col-xl-8 col-lg-7">
                <img
                  class="img-fluid mb-3 mb-lg-0"
                  src="src/assets/img/bg-masthead.jpg"
                  alt="..."
                />
              </div>
              <div class="col-xl-4 col-lg-5">
                <div class="featured-text text-center text-lg-left">
                  <h4>Shoreline</h4>
                  <p class="text-black-50 mb-0">
                    Grayscale is open source and MIT licensed. This means you
                    can use it for any project - even commercial projects!
                    Download it, customize it, and publish your website!
                  </p>
                </div>
              </div>
            </div>
            <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
              <div class="col-lg-6">
                <img
                  class="img-fluid"
                  src="assets/img/demo-image-01.jpg"
                  alt="..."
                />
              </div>
              <div class="col-lg-6">
                <div class="bg-black text-center h-100 project">
                  <div class="d-flex h-100">
                    <div class="project-text w-100 my-auto text-center text-lg-left">
                      <h4 class="text-white">Misty</h4>
                      <p class="mb-0 text-white-50">
                        An example of where you can put an image of a project,
                        or anything else, along with a description.
                      </p>
                      <hr class="d-none d-lg-block mb-0 ms-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row gx-0 justify-content-center">
              <div class="col-lg-6">
                <img
                  class="img-fluid"
                  src="./assets/img/bg-masthead.jpg"
                  alt="..."
                />
              </div>
              <div class="col-lg-6 order-lg-first">
                <div class="bg-black text-center h-100 project">
                  <div class="d-flex h-100">
                    <div class="project-text w-100 my-auto text-center text-lg-right">
                      <h4 class="text-white">Mountains</h4>
                      <p class="mb-0 text-white-50">
                        Another example of a project with its respective
                        description. These sections work well responsively as
                        well, try this theme on a small screen!
                      </p>
                      <hr class="d-none d-lg-block mb-0 me-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
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
                    <div class="small text-black-50">Hamilton, Ontario</div>
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
                        ajaypatel23623@gmail.com
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
                    <div class="small text-black-50">289-489-8571</div>
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
                        Github
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
                        href="https://www.linkedin.com/in/ajay-patel-13b13b113/"
                        // className="footer-seperation footer-btn"
                      >
                        LinkedIn
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
                        href="Ajay.doc"
                        // className="footer-seperation footer-btn"
                        download
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
        <footer class="footer bg-black small text-center text-white-50"></footer>
      </div>
      {/* <Router>
        <Description></Description>
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
        <Footer></Footer>
      </Router> */}
    </>
  );
}

export default App;
