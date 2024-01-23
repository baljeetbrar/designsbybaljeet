import React,{useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const skillsData = [
  { header: 'Scripting Languages', skills: ['ReactJs', 'JavaScript'] },
  { header: 'Front-End Programming', skills: ['HTML5', 'CSS3', 'SASS'] },
  { header: 'Back-end and Database', skills: ['Firebase', 'MongoDB'] },
  { header: 'CMS & SEO', skills: ['Elementor', 'WooCommerce', 'Yoast', 'SEO Optimization']},
  { header: 'Web Technologies', skills: ['jQuery', 'Bootstrap', 'JSON', 'RESTful APIs']},
  { header: 'Design & Creative Tools', skills: ['Adobe Illustrator', 'Photoshop', 'Microsoft Office 365', 'Adobe XD', 'Adobe Creative Cloud']}
];

const Divider = () => (
    <Col xs={1} className="divider d-none d-md-block "></Col>
  );

const Skills = () => {

  return (
    <Container>
      <Row className={`skills-data d-flex flex-row justify-content-center `}>
        {skillsData.map((objData, index) => {
          return (
            <React.Fragment key={index} className="skill-section">
              {(index)% 2 === 0 ? (
                <>
                  <Col xs={9} md={5} className={`data-wrapper left-column`}>
                    <ul className="skills-row">
                      <li>
                        <h5 className='font-dark text-bold skills-head'>{objData.header}</h5>
                        <ul className='d-flex flex-column skill-data'>
                          {objData.skills.map((techList, techIndex) => (
                            <li key={techIndex} className='skills-list'>{techList}</li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </Col>
                  <Divider />
                </>
              ) : (
                <>
                  <Col xs={9} md={5} className={`data-wrapper right-column`}>
                    <ul className="skills-row">
                      <li>
                        <h5 className='font-dark text-bold skills-head'>{objData.header}</h5>
                        <ul className='d-flex flex-column skill-data'>
                          {objData.skills.map((techList, techIndex) => (
                            <li key={techIndex} className='skills-list'>{techList}</li>
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
