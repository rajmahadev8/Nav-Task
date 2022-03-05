import React from 'react'
import { useState } from 'react';
import {Dropdown, Nav, ListGroup,Container } from 'react-bootstrap';
import SubMenu from './SubMenu';
import InsightsMenu from './InsightsMenu';
function NavMenu(props) {
    
    const [showDropdown, setShowDropdown] = useState(false);
    const {subTitle} = props;
    return (
        <Dropdown
            onMouseLeave={() => setShowDropdown(false)}
            onMouseOver={() => setShowDropdown(true)}
            // className="nav-link"
            cssclass="e-caret-hide"
        >
            <Dropdown.Toggle
                className="main-style"
                id="dropdown-basic"
                bsPrefix="p-0"
            >
                <Nav.Link className="nav-title" href={`#${props.title}`}>{props.title}</Nav.Link>

            </Dropdown.Toggle>
           
           {(props.title!=="Solutions"&&props.title!=="Carrers"&&props.title!=="Contact Us"&&props.title!=="Insights") &&
            (<Dropdown.Menu show={showDropdown} className="border-0 dropdown-menu">
                <ListGroup>
                    <ListGroup.Item className='px-2 py-4' >
                        <Container>
                            {/* {console.log(subTitle)} */}

                        {props.title!=="Insights" &&(Object.values(subTitle).map((e)=>{return <SubMenu key={e} menu={e}/>}))}
                        </Container>
                    </ListGroup.Item>
                </ListGroup>
            </Dropdown.Menu>)}
                {/* {props.title==="Insights" && <InsightsMenu/> } */}
            {props.title==="Insights" &&(<Dropdown.Menu show={showDropdown} className="dropdown-insights border-0 ">
                <ListGroup>
                    <ListGroup.Item className='px-2 py-4' >
                        <Container>
                            {/* {console.log(subTitle)} */}
                            {props.title==="Insights" && (<InsightsMenu tab={subTitle}/>) }
                        </Container>
                    </ListGroup.Item>
                </ListGroup>
            </Dropdown.Menu>)}
        </Dropdown>
    )
}

export default NavMenu