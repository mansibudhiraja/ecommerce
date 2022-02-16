import React, {useContext, useState} from 'react'
import { Navbar, Nav, Container, Dropdown, Badge } from 'react-bootstrap'
import './styles.css'
import { BrowserRouter as Router, Link } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'
import { Store } from './store';

const Navigation = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const {state} = useContext(Store);
    const {cart} = state;

    return (
        <div>
        <div className="news-header">
            <div className="row d-flex justify-content-center">
                FREE SHIPPING ON ORDERS ABOVE $30
            </div>
        </div>
        
        <Navbar expand="lg">
        <Container className="d-flex justify-content-center">
        <LinkContainer to="/">
            <Navbar.Brand className="row d-flex text-center mt-3">
                <span><img className="logo" src='/images/Abhishti_logo.png' /></span>
            </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="navbarResponsive" className="navbar-light top-nav-bar"/>
            <Navbar.Collapse id="navbarResponsive" className="col flex-end">
                <Nav as="ul" className="navbar-nav ms-auto top-nav-bar">
                    <Nav.Item as="li" className="top-bar-item">
                            <a className="navbar-list">Search</a>
                    </Nav.Item>
                    <Nav.Item as="li" className="top-bar-item dropdown">
                        <a href="/" className="dropbtn navbar-list">Account</a>
                            <div className="dropdown-content py-2">
                                <div className="text-center"><Link to="/login" className="dropdown-list-link">Sign In</Link></div>
                                <div className="text-center"><Link to="/register" className="dropdown-list-link">Create Account</Link></div>
                            </div>
                    </Nav.Item>
                    <Nav.Item as="li" className="top-bar-item">
                            <Link className="nostyle navbar-list" to="/cart">
                                Cart
                                {cart.cartItems.length>0 && (
                                <Badge pill bg="danger">
                                    {cart.cartItems.length}
                                </Badge>)
                                }
                            </Link>

                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
    </Container>
    </Navbar>
    </div>
    )
}


export default Navigation