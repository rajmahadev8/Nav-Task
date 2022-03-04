import React from 'react'
import {Container, Navbar } from 'react-bootstrap';

import LeftHeader from './LeftHeader';
import NavLink from './NavLink';
function Header() {
  return (<>
    <Navbar bg="light" expand="lg" className='font-family-sans-serif' >
      <Container fluid className='h-75'>
        <LeftHeader/>
        <NavLink/>
      </Container>
    </Navbar>
  </>
  )
}

export default Header;