import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Container, Row, Col } from "react-bootstrap";

const Portfolio = () => {
  const projects = [
    {
      title: "Just Another Text Editor",
      description: "Progressive Web Applications (PWA) Text Editor",
      link: "https://progressive-web-applications-text-editor.onrender.com/",
      imageURL: "./images/jate.png",
      github:
        "https://github.com/Babbalicious/progressive-web-applications-text-editor",
    },
    {
      title: "Bank Client Database",
      description: "SQL Database for Bank Employees",
      link: "https://amityville-bank-employee-application.onrender.com/login",
      imageURL: "./images/bank-database.png",
      github:
        "https://github.com/sd8295642/bank-client-database?tab=readme-ov-file",
    },
    {
      title: "Fitness Tracker",
      description: "Exercise and nutrition API",
      link: "https://pauldsherrill.github.io/fitness-tracker-project/",
      imageURL: "./images/fitness.png",
      github: "https://github.com/pauldsherrill/fitness-tracker-project",
    },
    {
      title: "Weather Dashboard",
      description: "Searchable Weather API",
      link: "http://babbalicious.me/weather-dashboard/",
      imageURL: "./images/weather.png",
      gitub: "https://github.com/Babbalicious/weather-dashboard",
    },
    {
      title: "Task Board",
      description: "Editable task board with local storage",
      link: "http://babbalicious.me/task-board/",
      imageURL: "./images/task-board.png",
      gitub: "https://github.com/Babbalicious/task-board",
    },
    {
      title: "Horiseon Marketing",
      description: "Marketing Page with HTML, CSS and JavaScript",
      link: "http://babbalicious.me/horiseon-marketing/",
      imageURL: "./images/horiseon.png",
      gitub: "https://github.com/Babbalicious/horiseon-marketing",
    },
  ];

  return (
    <div className="bg-primary-subtle">
      <Container fluid>
        <div className="no-margin w-100">
          <h1 className="text-center p-3 my-4 page-title">Portfolio</h1>
          <Row>
            {projects.map((project, index) => (
              <Col
                key={index}
                md={4}
                className="mb-4 d-flex justify-content-center"
              >
                <ProjectCard {...project} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
