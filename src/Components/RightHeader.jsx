import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap';
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
function RightHeader(props) {
    const [shown, setShown] = useState("hide")
    const [search, setSearch] = useState(faMagnifyingGlass)

    const show=()=>{
        if(shown==="hide"){
            setShown("show");
            console.log(search);
            setSearch(faXmark);
        }else{
            setShown("hide");
            setSearch(faMagnifyingGlass);
        }
    }
    const {className} = props;
  return (
   <>
            {/* Form control for search */}
          <Form className={`search-bar-form ${className}`} >
              <div className='d-flex justify-content-end'>

            {/* Form control for normal view */}
            <FormControl
              type="search"
              placeholder="Search on this site"
              className={`me-2 border-0 search-${shown} search nav-search`}
              style={{"position": "absolute",
                "padding": "15px",
                "top":"16%",
                "right": "95px",
                "borderRadius": "36px"}}
              aria-label="Search"
              />
              {/* Form control for Mobile view */}
              <FormControl
              type="search"
              placeholder="Search on this site"
              className={`me-2 mobileNav-${shown}`}
              style={{"borderRadius": "36px"}}
              aria-label="Search"
              />
              
              {/* Search icon and cross icon onclick function for search bar open and close*/}
             <div className="border-end border-2  d-flex align-items-center h-75 pe-auto">
                <Button className='search-icon' onClick={show}><FontAwesomeIcon icon={search} size="lg"/></Button>
             </div>
                </div>

            <Button variant=""  className='sign-in mx-2'>SignIn</Button>
          </Form>
   </>
  )
}

export default RightHeader