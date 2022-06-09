import React, { Component } from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
//import ComboBox from '../Components/ComboBox';
import PreText from '../Components/PreText';
import TakeSyndr from '../Components/TakeSyndr';
import TakeSympt from '../Components/TakeSympt';
const ComboBox = React.lazy(() => import('../Components/ComboBox'));
class ParsingNav extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={2}>
                            <Nav className="flex-column mt-3">
                                <Nav.Item className="btn btn-secondary mt-2">
                                    <Nav.Link className = "text-light" eventKey="first" >Извлечь данные</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="btn btn-secondary mt-2">
                                    <Nav.Link className = "text-light" eventKey="second" >Показать предобработанный текст</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="btn btn-secondary mt-2">
                                    <Nav.Link className = "text-light" eventKey="third" >Выделить синдромы</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="btn btn-secondary mt-2">
                                    <Nav.Link className = "text-light" eventKey="fourth" >Выделить симптомы</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey = "first">
                                <React.Suspense fallback={<p>Loading...</p>}><ComboBox></ComboBox></React.Suspense>
                                
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey = "second">
                                <PreText></PreText>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey = "third">
                                <TakeSyndr></TakeSyndr>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey = "fourth">
                                <TakeSympt></TakeSympt>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>

                    </Row>
                </Tab.Container>
            </Container>

        );
    }
}

export default ParsingNav;