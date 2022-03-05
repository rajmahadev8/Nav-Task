import React from 'react'
import { Row, Col, Tab, Nav, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

function InsightsMenu(props) {
    // tab.map((a)=>{console.log(a)})
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="Tab1">
            <Row>
                <Col sm={5}>
                    <Nav className="flex-column">
                        <Row className='my-2  align-items-center custom-row'>
                            <Col md="auto">
                                <FontAwesomeIcon icon={faGreaterThan} size="xs" />
                            </Col>
                            <Col md="auto">
                                <Nav.Link eventKey="Tab1" className='h6' style={{"cursor":"pointer"}} >{props.tab[0]}</Nav.Link>
                            </Col>
                        </Row>
                       {/* {tab.map((a) => {
                          return <InsightRow tab={a}/>
                        })} */}
                        <Row className='my-2  align-items-center custom-row'>
                            <Col md="auto">
                                <FontAwesomeIcon icon={faGreaterThan} size="xs" />
                            </Col>
                            <Col md="auto">
                                <Nav.Link eventKey="Tab2" className='h6' style={{"cursor":"pointer"}} >{props.tab[1]}</Nav.Link>
                            </Col>
                        </Row>
                        <Row className='my-2  align-items-center custom-row'>
                            <Col md="auto">
                                <FontAwesomeIcon icon={faGreaterThan} size="xs" />
                            </Col>
                            <Col md="auto">
                                <Nav.Link eventKey="Tab3" className='h6' style={{"cursor":"pointer"}} >{props.tab[2]}</Nav.Link>
                            </Col>
                        </Row>
                        <Row className='my-2  align-items-center custom-row'>
                            <Col md="auto">
                                <FontAwesomeIcon icon={faGreaterThan} size="xs" />
                            </Col>
                            <Col md="auto">
                                <Nav.Link eventKey="Tab4" className='h6' style={{"cursor":"pointer"}} >{props.tab[3]}</Nav.Link>
                            </Col>
                        </Row>
                    </Nav>
                </Col>
                <Col sm={6}>
                    <Tab.Content>
                        <Tab.Pane eventKey="Tab1">
                            <Card className='border-0'>
                                <Card.Header as="h5" className='border-0 bg-transparent'>Featured Content</Card.Header>
                                <Card.Body>
                                    <Card.Title as="h6" >Headline</Card.Title>
                                    <Card.Text className='mb-4'>
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Title as="h6" >Headline</Card.Title>
                                    <Card.Text className='mb-4'>
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Title as="h6" >Headline</Card.Title>
                                    <Card.Text className='mb-4'>
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Tab2">
                            Tab2
                        </Tab.Pane>
                        <Tab.Pane eventKey="Tab3">
                            Tab3
                        </Tab.Pane>
                        <Tab.Pane eventKey="Tab4">
                            Tab4
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default InsightsMenu