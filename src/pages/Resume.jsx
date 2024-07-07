import React from "react";

const Resume = () => {
  return (
    <div className="bg-primary-subtle text-dark">
      <h1 className="text-start p-3 page-title">Resume</h1>
      <div className="text-start resume px-5 pb-5 container-fluid">
        <p className="lead">
          Download my{" "}
          <a href="./documents/resume3.pdf" download>
            resume
          </a>
        </p>
        <p>Front-end proficiencies:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <p>Back-End Proficiencies</p>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoos</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
