import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';

const Portfolio = () => {
  const projects = [
    { title: 'Just Another Text Editor', description: 'Description of project 1', link: '#', imageURL: './images/jate.png' },
    { title: 'Project 2', description: 'Description of project 2', link: '#' },
    { title: 'Project 3', description: 'Description of project 3', link: '#' },
    { title: 'Project 4', description: 'Description of project 4', link: '#' },
  ];

  return (
    <div className='bg-primary-subtle'>
      <Container fluid>
        <div className="no-margin w-100">
          <h1 className="text-center p-3 my-4 page-title">Portfolio</h1>
          <Row>
            {projects.map((project, index) => (
              <Col key={index} md={4} className="mb-4 d-flex justify-content-center">
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
