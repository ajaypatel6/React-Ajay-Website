import React from "react";

import java from "../images/techImages/java.png";
import kotlin from "../images/techImages/kotlin.png";
import firestore from "../images/techImages/firestore.png";

import javascript from "../images/techImages/javascript.png";
import react from "../images/techImages/react.png";

import python from "../images/techImages/python.png";

import mongodb from "../images/techImages/mongodb.png";
import mysql from "../images/techImages/mysql.png";

const Languages = () => {
  return (
    <>
      <div className="languages-container ">
        <h4 className="language-stack">Frontend</h4>
        <img
          src={javascript}
          alt="javascript"
          className="languagesShrink "
          title="Javascript"
        />

        <img
          src={react}
          alt="react"
          className="languagesShrink"
          title="React.js"
        />
        <h4 className="language-stack">Backend</h4>
        <img src={java} alt="java" className="languagesShrink" title="Java" />
        <img
          src={kotlin}
          alt="kotlin"
          className="languagesShrink"
          title="Kotlin"
        />
        <img
          src={python}
          alt="python"
          className="languagesShrink "
          title="Python"
        />
        <h4 className="language-stack">Database</h4>
        <img
          src={mongodb}
          alt="mongodb"
          className="languagesShrink "
          title="MongoDB"
        />
        <img
          src={mysql}
          alt="mysql"
          className="languagesShrink "
          title="MySQL"
        />
        <img
          src={firestore}
          alt="firestore"
          className="languagesShrink"
          title="Firestore"
        />
      </div>
    </>
  );
};

export default Languages;
