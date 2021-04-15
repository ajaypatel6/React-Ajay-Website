import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// app = home

// pages
import Error from "./pages/Error";
import SingleProject from "./pages/SingleProject";

//components
import Header from "./components/Header";
import Description from "./components/Description";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

//css
import "./index.css";

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
      <Router>
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
      </Router>
    </>
  );
}

export default App;
