import React, {useState} from 'react'
import { Navbar, Nav, Container, Dropdown} from 'react-bootstrap'
import './styles.css'
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navigation = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <Container className="p-0">
            <Navbar variant="light" expand="lg" className="top-bar">
                <Navbar.Brand className="logo">BIG BASKET</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarResponsive" className="navbar-light top-nav-bar"/>
                <Navbar.Collapse id="navbarResponsive" className="justify-content-end">
                    <Nav as="ul" className="navbar-nav ms-auto top-nav-bar">
                        <Nav.Item as="li" className="top-bar-item">
                                <a className="nostyle">Search</a>
                        </Nav.Item>
                        <Nav.Item as="li" className="top-bar-item dropdown">
                            <a href="/" className="dropbtn">Account</a>
                            <div className="dropdown-content">
                                <li><a href="/login">Sign In</a></li>
                                <li><a href="/register">Create Account</a></li>
                          
                            </div>
                        </Nav.Item>
                        <Nav.Item as="li" className="top-bar-item">
                                <a className="nostyle" to="/cart">Cart</a>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}


export default Navigation