import React from 'react'
import { useState } from 'react';
import {Dropdown, Nav, ListGroup,Container } from 'react-bootstrap';
import SubMenu from './SubMenu';
import InsightsMenu from './InsightsMenu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
function NavMenu(props) {
    
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdown, setDropdown] = useState(faAngleDown);
    const {subTitle} = props;
    const hide = () =>{
        setShowDropdown(false) 
        setDropdown(faAngleDown)
    }
    const show = () =>{
        setShowDropdown(true) 
        setDropdown(faAngleUp)
    }
    return (
        //--------- Dropdowns of Every navlinks on hover
        <Dropdown 
            onMouseLeave={hide }
            onMouseOver={show}
            // className="nav-link"
            cssclass="e-caret-hide"
        >
            <Dropdown.Toggle
                className="main-style"
                id="dropdown-basic"
                bsPrefix="p-0"
            >
                <Nav.Link className="nav-title" href={`#${props.title}`}>{props.title} <FontAwesomeIcon className='dropdown-caret' icon={dropdown} size="xs" /></Nav.Link>

            </Dropdown.Toggle>
            
          {/* Those who doesn't have dropdowns will not get displayed a dropdown */}
           {(props.title!=="Solutions"&&props.title!=="Carrers"&&props.title!=="Contact Us"&&props.title!=="Insights") &&
            (<Dropdown.Menu show={showDropdown} className="border-0 dropdown-menu">
                <ListGroup>
                    <ListGroup.Item className='px-2 py-2 responsive-list-menu' >
                        <Container className='custom-container'>


                        {/* Mapping each navlink with its sub navlink  */}
                        {props.title!=="Insights" &&(Object.values(subTitle).map((e)=>{return <SubMenu key={e} menu={e}/>}))}
                        </Container>
                    </ListGroup.Item>
                </ListGroup>
            </Dropdown.Menu>)}
                
                {/* Different dropdown for Insights Navlink */}

            {props.title==="Insights" &&(<Dropdown.Menu show={showDropdown} className="dropdown-insights border-0 ">
                <ListGroup>
                    <ListGroup.Item className='px-2 custom-list-insights responsive-list-menu' >
                        <Container className='custom-container'>
                            {/* {console.log(subTitle)} */}
                            {/* Mapping to Insights menu */}
                            {props.title==="Insights" && (<InsightsMenu tab={subTitle}/>) }
                        </Container>
                    </ListGroup.Item>
                </ListGroup>
            </Dropdown.Menu>)}
        </Dropdown>
    )
}

export default NavMenu