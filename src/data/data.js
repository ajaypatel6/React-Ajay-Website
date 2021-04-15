import connect4 from "../images/longDescription/Connect-4.jpg";
import med from "../images/longDescription/medi.jpg";

import book from "../images/longDescription/book.jpg";

// meditation
import mDash from "../images/longDescription/Meditation/mDash.jpg";
import mStats from "../images/longDescription/Meditation/mStats.jpg";

//shorts
import auth from "../images/longDescription/Shorts/shortsAuth.png";
import dash from "../images/longDescription/Shorts/shortsDash.png";
import editor from "../images/longDescription/Shorts/shortsEditor.png";
import login from "../images/longDescription/Shorts/shortsLogin.png";

//Mantis
import code from "../images/longDescription/Mantis/code.png";
import d1 from "../images/longDescription/Mantis/d1.png";
import results from "../images/longDescription/Mantis/results.png";
import token from "../images/longDescription/Mantis/token.jpg";
import ta from "../images/longDescription/Mantis/tadiagram.png";
import copy from "../images/longDescription/copy.jpg";

const projects = [
  {
    id: 1,
    name: "Meditation Timer",
    technology: "Android",
    github: "https://github.com/ajaypatel6/Meditation",
    image: med,

    text: "Meditation Timer and Stats ",
    longtext:
      "A meditation timer for that allows customizable meditation lengths that records overall statistics on your phones local storage.    ",
    longtech:
      "Created with Java in Android Studio. Worked with XML to create layouts for various pages. Pushed application to App-store",
    longpics1: mDash,
    longpics2: mStats,
  },
  {
    id: 2,
    name: "Short Story",
    technology: "Android",
    github: "https://github.com/ajaypatel6/Shorts",
    image:
      "https://user-images.githubusercontent.com/68916597/109037712-07ed5400-7699-11eb-8195-142f45e83aa6.jpeg",
    text: "A social-media like app for Short stories",
    longtext:
      "Short stories an app that allows users to view stories on the Real-time Dashboard, create their own short stories with the editor, edit older stories.",
    longtech:
      "Created with Kotlin in Android Studio. XML layouts. Using Firebase authentication for user authentication. Cloud Firestore(NoSQL) database to store data ",
    longpics1: auth,
    longpics2: login,
    longpics3: dash,
    longpics4: editor,
    longpics5: "",
  },
  {
    id: 3,
    name: "Manage Me",
    technology: "Web",
    github: "https://github.com/ajaypatel6/",
    image:
      "https://kalys-solutions.com/wp-content/uploads/2016/01/time_manage_c.jpg",
    text: "WORK IN PROGRESSWORK IN PROGRESSWORK IN PROGRESS",
    longtext:
      "A scheduling site for my daily needs to enable higher productivity. Allows scheduling events, finishing pomodoros daily and meditation.",
    longtech:
      "Using React for the front end, possibly postgreqsl for db and php for backend?? we will see what happens",
    longpics: "",
  },
  {
    id: 4,
    name: "Mantis",
    technology: "School Projects/ Other",
    github: "https://github.com/ajaypatel6/Mantis",
    image: copy,
    text: "Senior Capstone Project for Plagiarism detection in source code",
    longtext:
      "The Mantis has capability of detecting plagiarism between up to 3 different programming languages. Meaning, converting a java code to a C code will be considered plagiarism as well.",
    longtech:
      "Using Agile methodologies to go through the entire Software Development Life Cycle and creating a full Software Requirements Specification. Implemented scrum meetings. Using PHP for files processing and uploads. Using Java for the similarity check and tokenization ",
    longpics1: "",
    longpics2: "",
    longpics3: "",
    longpics4: "",
    longpics5: "",
    mantispic1: d1,
    mantispic2: token,
    mantispic3: code,
    mantispic4: "",
    mantispic5: results,
  },

  {
    id: 5,
    name: "Reading Speed Tracker",
    technology: "School Projects/ Other",
    github: "https://github.com/ajaypatel6/PDFSpeedReading",
    image: book,
    text: "Reading speed tracker with books and history",
    longtext:
      "Desktop application that allows user to select a book and the page range for which they have read. Calculates the Words per minute of the range. Records statistics graphically.",
    longtech: "Using Python, Tkinter and various python libraries",
    longpics: "",
  },
  {
    id: 6,
    name: "Connect 4 with Minimax",
    technology: "School Projects/ Other",
    github:
      "https://github.com/ajaypatel6/SchoolProjects/tree/main/Connect4Minimax",
    image: connect4,
    text: "Console based connect using minimax algorithm",
    longtext:
      "Project for Artificial Intelligence course in School. Can play Connect 4 with a computer with varying difficulties because of Minimax",
    longtech: "Using java, Minimax algorithm",
    longpics: "",
  },
];

export default projects;
