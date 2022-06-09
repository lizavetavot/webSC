import React, { Component } from 'react';
import { Container,  Nav, Navbar } from 'react-bootstrap';
import logo from './logo1.png';
import {BrowserRouter as Router,  Switch, Route} from "react-router-dom";
//import FilesNav from "../Pages/FilesNav";
//import DBNav from "../Pages/DBNav";
//import ParsingNav from "../Pages/ParsingNav";
const FilesNav = React.lazy(() => import("../Pages/FilesNav"));
const DBNav = React.lazy(() => import("../Pages/DBNav"));
const ParsingNav = React.lazy(() => import("../Pages/ParsingNav"));

class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg ="dark" variant ="dark">
                    <Container>
                        <Navbar.Brand >
                            <img
                                src={logo}
                                height="150"
                                width="150"
                                alt="Logo"
                            /> 
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id = "responsive-navbar-nav">
                            <Nav className = "mb-auto fs-4">
                                <Nav.Link href="/docfiles">Файлы</Nav.Link>
                                <Nav.Link href="/parsing">Парсинг</Nav.Link>
                                <Nav.Link href="/databases">База данных</Nav.Link>
                            </Nav>
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                    <React.Suspense fallback={<p>Loading page...</p>}>
                        <Route exact path ="/docfiles" component ={FilesNav}/>
                        <Route exact path ="/parsing" component ={ParsingNav}/>
                        <Route exact path ="/databases" component ={DBNav}/>
                    </React.Suspense>
                    </Switch>
                </Router>
                
              </>
        );
    }
}

export default Header;