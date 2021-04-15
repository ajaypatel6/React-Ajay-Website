import React from "react";

const Technologies = ({ filterItems, technologies }) => {
  console.log(technologies);
  return (
    <>
      <h1>
        <div className="title">My Projects</div>
        <div className="underline"></div>
      </h1>
      <div className="btn-container">
        {technologies.map((category, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Technologies;
