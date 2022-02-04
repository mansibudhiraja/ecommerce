import React, {useState} from 'react'
import { Navbar, Nav, Container, Dropdown} from 'react-bootstrap'
import './styles.css'
import { BrowserRouter as Router, Link } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'

const Navigation = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        
            <Navbar variant="dark" bg="dark" expand="lg">
            <Container>
            <LinkContainer to="/">
                <Navbar.Brand className="col-6 logo">
                    BIG BASKET
                </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbarResponsive" className="navbar-light top-nav-bar"/>
                <Navbar.Collapse id="navbarResponsive" className="col-6">
                    <Nav as="ul" className="navbar-nav ms-auto top-nav-bar">
                        <Nav.Item as="li" className="top-bar-item">
                                <a className="nostyle navbar-list">Search</a>
                        </Nav.Item>
                        <Nav.Item as="li" className="top-bar-item dropdown">
                            <a href="/" className="dropbtn navbar-list">Account</a>
                                <div className="dropdown-content py-2">
                                    <div className="text-center"><Link to="/login" className="dropdown-list-link">Sign In</Link></div>
                                    <div className="text-center"><Link to="/register" className="dropdown-list-link">Create Account</Link></div>
                                </div>
                        </Nav.Item>
                        <Nav.Item as="li" className="top-bar-item">
                                <a className="nostyle navbar-list" to="/cart">Cart</a>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}


export default Navigation