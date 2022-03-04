import React from 'react'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function LeftHeader() {
    return (
        <>
            <div className="border-end border-2 hamburger align-items-center h-75 pe-auto">
                <Button><FontAwesomeIcon icon={faBars} className="px-3" size="lg" /></Button>
            </div>

           
        </>
    )
}

export default LeftHeader