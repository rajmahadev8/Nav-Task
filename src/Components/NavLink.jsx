import React ,{useState}from 'react'
import { Navbar, Nav, FormControl, InputGroup, FormGroup, Button } from 'react-bootstrap';
import NavMenu from './NavMenu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";



import RightHeader from './RightHeader';
function NavLink() {
    const subMenu = [
        { title: "Solutions", subTitles: "" },
        { title: "Insights", subTitles: ["Insights", "Reports", "Events", "Webinars"] },
        { title: "Investors", subTitles: ["Investor Relations", "Press Releases", "Annual Report"] },
        { title: "Carrers", subTitles: "" },
        { title: "About", subTitles: ["About us", "Offices", "Governance", "Sustainability", "Diversity, Equity & Inclusion", "Legal"] },
        { title: "Contact Us", subTitles: "" }
    ]
    //  const [isShown, setIsShown] = useState('hide collapsing');
    // const [search, setSearch] = useState(faMagnifyingGlass)

    //  const show=()=>{
    //     if(isShown==="hide collapsing"){
    //         setIsShown("show ");
    //         setSearch(faXmark);
    //     }else{
    //         setIsShown("hide collapsing");
    //         setSearch(faMagnifyingGlass);
    //     }
    // }
    return (
        <>
            {/* <div className="mobile-search">
                <div className="border-end border-2  d-flex align-items-center h-75 pe-auto">
                <Button className='' onClick={show}><FontAwesomeIcon icon={search} size="lg"/></Button>
             </div>
                </div> */}
            <RightHeader className="right-header-mobile"/>
            <Navbar.Collapse id="navbarScroll" >
                

                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ fontFamily: 'sans-serif' }}

                >

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
                    {subMenu.map(({ title, subTitles }) => { return <NavMenu key={title} title={title} subTitle={subTitles} /> })}


                    {/* 
                    <Nav.Link href="#carrers" className='mx-4'>Carrers</Nav.Link>
                    <Nav.Link href="#about" className='mx-4'>About</Nav.Link>
                <Nav.Link href="#contact" className='mx-4'>Contact Us</Nav.Link> */}




                </Nav>
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