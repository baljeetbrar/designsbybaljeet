import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} >
          <ol className="projects-list d-flex flex-column">
          <li>
            <Link to="https://baljeetbrar.github.io/chessypizza" className="project-link text-bold" target='_blank'>Chessy Pizza</Link>
          </li>
          <li>
            <Link to="https://baljeetbrar.github.io/reactprojects/#/newsweb" className="project-link text-bold" target='_blank'>News App</Link>
          </li>
          <li>
            <Link to="https://baljeetbrar.github.io/reactprojects/#/loan" className="project-link text-bold"
            target='_blank'>Loan Calculator</Link>
          </li>
          <li>
            <Link to="https://baljeetbrar.github.io/reactprojects/#/weatherforecast" className="project-link text-bold"
            target='_blank'>Weather App</Link>
          </li>
        </ol>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;

