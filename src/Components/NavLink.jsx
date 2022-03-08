import React from 'react'
import { Navbar, Nav, FormControl } from 'react-bootstrap';
import NavMenu from './NavMenu';

import RightHeader from './RightHeader';
function NavLink() {
    // Array of Objects for Navlink menu
    const subMenu = [
        { title: "Solutions", subTitles: "" },
        { title: "Insights", subTitles: ["Insights", "Reports", "Events", "Webinars"] },
        { title: "Investors", subTitles: ["Investor Relations", "Press Releases", "Annual Report"] },
        { title: "Carrers", subTitles: "" },
        { title: "About", subTitles: ["About us", "Offices", "Governance", "Sustainability", "Diversity, Equity & Inclusion", "Legal"] },
        { title: "Contact Us", subTitles: "" }
    ]
    return (
        <>
            {/*---- Right Header for mobile view------ */}
            <RightHeader className="right-header-mobile"/>

            {/* Collapsable Header for Mobile view */}
            <Navbar.Collapse id="navbarScroll" >
            
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ fontFamily: 'sans-serif' }}
                >
                            {/* Static Search for Mobile view  */}
                            <FormControl
                                type="search"
                                placeholder="Search on this site"
                                className={`me-2 search-show search menu-search`}
                                style={{
                                    "position": "absolute",
                                    "padding": "15px",
                                    "top": "16%",
                                    "right": "95px",
                                    "borderRadius": "36px"
                                }}
                                aria-label="Search"
                            />
                    
            

                    {/* <Nav.Link href="#solutions" className='mx-4'>Solutions</Nav.Link> */}
                    {/* <div className="tab1">
                        <Nav.Link href="#insights" className='mx-4' onMouseOver={() => setIsShown(true)}
                        onClick={() => setIsShown(false)}
                        >Insights</Nav.Link>
                        {isShown && (
                            <SubMenu />
                            )}
                        </div> */}

                    {/* <Nav.Link href="#investors" className='mx-4' onMouseOver={() => setShowDropdown(true)}
                        onMouseOut={()=> setShowDropdown(false)}>Investors</Nav.Link>
                        {showDropdown && (
                            <NavMenu/>
                        )} */}
                   
                   {/* Mapping Array of objects one by one and rendering it on navbar */}
                    {   subMenu.map(({ title, subTitles }) => { 
                        return <NavMenu key={title} title={title} subTitle={subTitles} /> 
                    })}


                    {/* 
                    <Nav.Link href="#carrers" className='mx-4'>Carrers</Nav.Link>
                    <Nav.Link href="#about" className='mx-4'>About</Nav.Link>
                <Nav.Link href="#contact" className='mx-4'>Contact Us</Nav.Link> */}




                </Nav>
                {/* ------- Right header------- */}
                <div className="language mx-3">
                    <Nav.Link href="#EN" className='border-3 border-end link-secondary'>EN</Nav.Link>
                    <Nav.Link href="#FR" className='link-secondary' >FR</Nav.Link>
                </div>

                <RightHeader className="right-header" /> 
            </Navbar.Collapse>
        </>
    )
}

export default NavLink