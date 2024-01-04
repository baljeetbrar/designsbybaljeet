import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'


import NavbarLink from './NavbarLink'

import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Projects from '../Pages/Projects'
import Nopage from '../Pages/Nopage'
import About from '../Pages/About'

const NavbarRouter = () => {
  return (
    <>
      <HashRouter>
        <div className='layout-container d-flex'>
          <NavbarLink />
          <div className='content-wrapper'>
            <Routes>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='projects' element={<Projects />} />
              <Route path='*' element={<Nopage />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
     
    </>
  )
}

export default NavbarRouter;