import React from 'react'
// import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Container, Navbar, Button } from 'react-bootstrap';
import NavLink from './NavLink';
function Header() {
  
  return (<>
    <Navbar bg="light" expand="lg" className='font-family-sans-serif' >
    <Container fluid>
      {/* Left Header */}
            <div className="border-end border-2 hamburger align-items-center h-75 pe-auto">
                <Button><FontAwesomeIcon icon={faBars} className="px-3" size="lg" /></Button>
            </div>
            <div className="leftHeader">
                <Navbar.Toggle aria-controls="navbarScroll" className='border-0'/>
                <Navbar.Brand href="#" className='px-4'>Navbar</Navbar.Brand>
            
            </div>
           
          <NavLink/>
        </Container>
    </Navbar>
  </>
  )
}

export default Header;