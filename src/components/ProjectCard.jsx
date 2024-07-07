import React from "react";
import { Card } from "react-bootstrap";
import "./projectCard.css";

const ProjectCard = ({ title, description, link, imageURL, github }) => {
  return (
    <Card className="custom-card">
      <div
        className="card-img-bg"
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        <div className="card-content">
          <Card.Body className="overlay">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      ></a>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <img
          src="./images/github-icon2.png"
          alt="{title}"
          className="link-image"
        />
      </a>
    </Card>
  );
};

export default ProjectCard;
