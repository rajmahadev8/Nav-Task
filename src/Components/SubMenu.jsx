import React from 'react'
import { Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

function SubMenu(props) {
    const {menu} = props;
    return (
        <>
            <Row className='my-3  align-items-center custom-row'>
                <Col xs={1}><FontAwesomeIcon icon={faGreaterThan} size="xs" /></Col>
                <Col md="auto" className="border-bottom  p-0 ms-3"><Nav.Link href="#">{menu}</Nav.Link></Col>
                {menu ==="Insights" && (<><Col>Featured Content</Col></>)}
            </Row>
        </>
    )
}

export default SubMenu