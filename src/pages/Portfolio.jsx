import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', description: 'Description of project 1', link: '#' },
    { title: 'Project 2', description: 'Description of project 2', link: '#' },
    // Add more projects as needed
  ];

  return (
    <Container>
      <h1 className="text-center my-4">Projects</h1>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
