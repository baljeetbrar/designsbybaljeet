import React from 'react';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegRectangleList } from "react-icons/fa6";
import { LuFolderOpenDot } from "react-icons/lu";
import { GiSkills } from "react-icons/gi";
import { MdConnectWithoutContact } from "react-icons/md";

const NavbarLink = () => {
  return (
    <Navbar className='nav-sidebar d-flex flex-column'>
      <NavbarBrand className='brand text-bold'>Baljeet Brar</NavbarBrand>
      <Nav className='d-flex flex-column text-left'>
        <Link to='/' className='nav-list-item'>
          <span><IoHomeOutline /></span>
          <strong className='nav-name'>Home</strong>
          
        </Link>
        <Link to='/about' className='nav-list-item'>
          <span><FaRegRectangleList /></span>
            <strong className='nav-name'>About</strong>
        </Link>
        <Link to='/projects' className='nav-list-item'>
          <span><LuFolderOpenDot /></span>
          <strong className='nav-name'>Projects</strong>
          </Link>
          <Link to='/projects' className='nav-list-item'> 
          <span><GiSkills /></span>
          <strong className='nav-name'>Skills</strong>
          </Link>
          <Link to='/projects' className='nav-list-item'>
          <span><MdConnectWithoutContact /></span>
          <strong className='nav-name'>Contact</strong>
          </Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarLink;
