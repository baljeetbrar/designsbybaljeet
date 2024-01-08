import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const pdfUrl = 'images/Baljeet_React_Developer_Resume.pdf';
  return (
    <footer className="footer_wrapper">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <h3 className='text-bold footer-header'>Contact Information</h3>
            <address className='contact-section'>
              <p className='text-bold'> Baljeet Singh</p>
              <p>Email: <a href="mailto:baljeetbrar1@outlook.com">baljeetbrar1@outlook.com</a></p>
              <p>Phone: <a href="tel:(647) 466-2102">(647) 466-2102</a></p>
            </address>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h3 className='text-bold footer-header'>Connect with Me</h3>
            <ul className='footer_list d-flex flex-row'>
              <li><a className='footer-icon' href="https://www.linkedin.com/in/baljeetbrar1" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
              <li><a className='footer-icon' href="https://github.com/baljeetbrar" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h3 className='text-bold footer-header'>Resume</h3>
            <p>Download my <a href={pdfUrl} download>
              <button className='text-left download-cv'>Resume</button>
            </a></p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h3 className='text-bold footer-header'>Portfolio Links</h3>
            <ul className='links'>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
