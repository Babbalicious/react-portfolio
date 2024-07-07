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
    },
    {
      title: "Bank Client Database",
      description: "SQL Database for Bank Employees",
      link: "https://github.com/sd8295642/bank-client-database?tab=readme-ov-file",
      imageURL: "./images/bank-database.png",
    },
    {
      title: "Fitness Tracker",
      description: "Exercise and nutrition API",
      link: "https://github.com/pauldsherrill/fitness-tracker-project",
      imageURL: "./images/fitness.png",
    },
    { title: "Project 4", description: "Description of project 4", link: "#" },
    { title: "Project 5", description: "Description of project 3", link: "#" },
    { title: "Project 6", description: "Description of project 4", link: "#" },
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
