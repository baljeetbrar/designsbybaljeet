import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

const PagesLayout = () => {
  return (
    <>
        <div className='d-flex flex-column'>
            <Home />
            <About />
            <Contact />
            <Projects />
        </div>
    </>
  )
}

export default PagesLayout