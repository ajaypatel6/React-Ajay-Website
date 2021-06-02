import React from "react";
import Languages from "./Languages";

const Description = () => {
  return (
    <>
      <div className="description-container">
        <h2 className="name-color">Ajay Patel</h2>
        <p className="styler">
          Currently located in Hamilton, Ontario after graduating in October
          2020 with a Bachelors of Computer Science. I have interests in Gaming,
          Fitness and Learning new technologies, currently learning React and
          NodeJS. Looking forward to build my skills and become a Full-Stack
          Developer to work on exciting projects
        </p>
      </div>

      {/* <p className="styler">
        I have interests in Gaming, Fitness and Learning new technologies,
        currently learning React
      </p>

      <p className="styler">
        Looking forward to build my skills and become a Full-Stack Developer
      </p> */}
      <Languages></Languages>
    </>
  );
};

export default Description;
