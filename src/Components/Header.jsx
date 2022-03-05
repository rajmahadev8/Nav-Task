import React from 'react'
// import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Container, Navbar, Button } from 'react-bootstrap';
import NavLink from './NavLink';
function Header() {
  // const [height, setHeight] = useState("auto")
    // const handleHeight = ()=>{
    //     if(height==="75"){
    //         console.log(height);
    //         setHeight("auto");
    //     }else{
    //         console.log(height);

    //         setHeight("75");
    //     }
    // }
  return (<>
    <Navbar bg="light" expand="lg" className='font-family-sans-serif' >
    <Container fluid className={`navbar `}>
      {/* Left Header */}
            <div className="border-end border-2 hamburger align-items-center h-75 pe-auto">
                <Button><FontAwesomeIcon icon={faBars} className="px-3" size="lg" /></Button>
            </div>
            <Navbar.Brand href="#" className='px-4'>Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" className='border-0'/>
           
          <NavLink/>
        </Container>
    </Navbar>
  </>
  )
}

export default Header;