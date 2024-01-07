import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const skillsData = [
  { header: 'Scripting Languages', skills: ['ReactJs', 'JavaScript'] },
  { header: 'Front-End Programming', skills: ['HTML5', 'CSS3', 'SASS'] },
  { header: 'Back-end and Database', skills: ['Firebase', 'MongoDB'] },
  { header: 'CMS & SEO', skills: ['Elementor', 'WooCommerce', 'Yoast', 'SEO Optimization']},
  { header: 'Web Technologies', skills: ['jQuery', 'Bootstrap', 'JSON', 'RESTful APIs']},
  { header: 'Design & Creative Tools', skills: ['Adobe Illustrator', 'Photoshop', 'Microsoft Office 365', 'Adobe XD', 'Adobe Creative Cloud']}
];

const Skills = () => {
  return (
    <Container>
      <Row className={`skills-data d-flex flex-row justify-content-center `}>
        {skillsData.map((objData, index) => {
          console.log('Index:', index); // Log the index
          return (
            <React.Fragment key={index}>
              {(index)% 2 === 0 ? (
                <>
                  <Col xs={6} className="data-wrapper">
                    <ul className="skills-row">
                      <li>
                        <h3>{objData.header}</h3>
                        <ul className='d-flex flex-column'>
                          {objData.skills.map((techList, techIndex) => (
                            <li key={techIndex}>{techList}</li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </Col>
                  <Col xs={6} className=" right-divider">
                   { /* Right Side Column */}
                  </Col>
                </>
              ) : (
                <>
                  <Col xs={6} className=" left-divider">
                   {/* Left Side Column */}
                  </Col>
                  <Col xs={6}>
                    <ul>
                      <li>
                        <h3>{objData.header}</h3>
                        <ul className='d-flex flex-column'>
                          {objData.skills.map((techList, techIndex) => (
                            <li key={techIndex}>{techList}</li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </Col>
                </>
              )}
            </React.Fragment>
          );
        })}
      </Row>
    </Container>
  );
};

export default Skills;
