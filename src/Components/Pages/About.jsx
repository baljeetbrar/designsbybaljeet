import React from 'react'
import { Container ,Row, Col } from 'react-bootstrap'
import { LiaCertificateSolid } from "react-icons/lia";
import { GiStairsGoal } from "react-icons/gi";
import { GoGoal } from "react-icons/go";

const About = () => {
  return (
    <Container>
        <Row>
            <Col xl={9} lg={9}>
                <div className='about-section-heading'>
                    <h5 className=' text-bold font-dark'>About Me</h5>
                    <h1 className="about-header text-bold">
                      Crafting Stunning <br/>
                      Web <strong className='font-dark'>Experiences</strong>
                    </h1>
                </div>
            </Col>
        </Row>
        <Row className='d-flex justify-content-between'>
            <Col lg={6}>
            <ul className='d-flex flex-column about-list-main'>
              <li className='about-list'>
                <div className="about-section-details " data-trigerid="about">
                    
                    <span className="about-icon"><GiStairsGoal /></span>
                    <h3 className="font-dark text-bold about-me-header">My Ambition</h3>
                    <p className='about-des'>
                      As a React developer, my ambition is to create dynamic and user-friendly web applications. I strive to deliver solutions that make a positive impact on users' experiences.
                    </p>
                </div>
              </li>
              <li className='about-list'>
                <div className="about-section-details" data-trigerid="about"> 
                    <span className="about-icon"><GoGoal  /></span>
                    <h3 className="font-dark text-bold about-me-header">My Purpose</h3>
                    <p className='about-des'> 
                      With a focus on building scalable and maintainable React applications, my purpose is to contribute to the world of technology. I believe in continuous learning and staying updated with the latest in the React ecosystem.
                    </p>
                </div>
                
              </li>
            </ul>
            </Col>
            <Col lg={6} className='about-image-section bg-navy'>
                <div className='my-img'>
                    <img className='full-width' src="https://i.ibb.co/02DXs5C/IMG-0269.jpg" alt="" />
                </div>
                <div className="experience  ">
                    <span className='exp-icon'><LiaCertificateSolid /></span>
                    <h4 className='text-bold text-light experience-years'>
                        3+ <span>Years Of <br/>React Development experience</span>
                    </h4>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default About