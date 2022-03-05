import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import NavMenu from './NavMenu';

import RightHeader from './RightHeader';
function NavLink() {
    const subMenu = [
        {title:"Solutions", subTitles:""},
        {title:"Insights" , subTitles:["Insights","Reports", "Events", "Webinars"]},
        {title:"Investors", subTitles:["Investor Relations", "Press Releases", "Annual Report"]},
        {title:"Carrers", subTitles:""},
        {title:"About", subTitles:["About us", "Offices", "Governance", "Sustainability", "Diversity, Equity & Inclusion", "Legal"]},
        {title:"Contact Us", subTitles:""}
    ]
    // const [isShown, setIsShown] = useState(false);
    
    return (
        <>
           
            <Navbar.Collapse id="navbarScroll" >
       

                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '300px', fontFamily: 'sans-serif' }}
                    navbarScroll
                >
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
                    {subMenu.map(({title, subTitles}) => { return <NavMenu key={title} title={title} subTitle={subTitles}/> })}


                    {/* 
                    <Nav.Link href="#carrers" className='mx-4'>Carrers</Nav.Link>
                    <Nav.Link href="#about" className='mx-4'>About</Nav.Link>
                <Nav.Link href="#contact" className='mx-4'>Contact Us</Nav.Link> */}




                </Nav>
                <RightHeader/>
            </Navbar.Collapse>
        </>
    )
}

export default NavLink