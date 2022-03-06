import React from 'react'
import { Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

function SubMenu(props) {
    const {menu} = props;
    return (
        <>
            <Row className='my-2  align-items-center custom-row'>
                <Col xs={1} className="bullet"><FontAwesomeIcon icon={faGreaterThan} size="xs" /></Col>
                <Col md="auto" className=" p-0 ms-3"><Nav.Link className="h6" href="#">{menu}</Nav.Link></Col>
            </Row>
        </>
    )
}

export default SubMenu