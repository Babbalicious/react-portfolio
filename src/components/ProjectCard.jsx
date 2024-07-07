import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = ({ title, description, link, imageURL }) => {
  return (
    <Card style={{ width: '18rem', backgroundImage: `url(${imageURL})`, backgroundSize: 'cover', backgroundPosition: 'center'  }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link} target="_blank">View Project</Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
