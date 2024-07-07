import React from "react";
import { Card, Button } from "react-bootstrap";
import "./projectCard.css";

const ProjectCard = ({ title, description, link, imageURL, github }) => {
  return (
    <Card className="custom-card">
      <a href={link}>
        <div
          className="card-img-bg"
          style={{ backgroundImage: `url(${imageURL})` }}
        >
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img
              src="./images/Github-128.webp"
              alt="{title}"
              className="link-image"
            />
          </a>

          {/* <Card.Img variant="top" src={imageURL} alt={title} className="card-img" /> */}
          <Card.Body className="overlay">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </div>
      </a>
    </Card>
  );
};

export default ProjectCard;
