import React,{useEffect,useState} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Footer from './Footer';

const Home = () => {

  const [currentWord, setCurrentWord] = useState('Coder');
  const words = ['Coder', 'Developer', 'Designer', 'Thinker'];


  useEffect(()=>{
      const intervalId = setInterval(()=>{
          const currentIndex = words.indexOf(currentWord);
          const nextIndex = (currentIndex + 1) % words.length;
          setCurrentWord(words[nextIndex]); // by this we got the index of the value which holding the next index and give you the value
      },3000);

      return () =>clearInterval(intervalId);
  },[currentWord, words]);

  const pdfUrl = 'images/Baljeet_React_Developer_Resume.pdf';
  return (
    <Container>
      <Row className='homepage-wrapper d-flex '>
      <Col md={6} xs={12}> 
          <div className='my-information text-center'>
          <h1 className='text-bold uppercase text-left name-header '>hi, i'm Baljeet <br/> Creative <strong className="font-dark word-transition">{currentWord}</strong></h1>
            <p className='text-left'>I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>
            <a href={pdfUrl} download>
              <button className='text-left download-cv'>Download CV</button>
            </a>
          </div>
        </Col>  
        <Col className='image-wrapper' md={6} xs={12}> 
          <img src="images/wrapper-image.jpg" alt="" />
        </Col>
      </Row>
      
    </Container>
  )
}

export default Home