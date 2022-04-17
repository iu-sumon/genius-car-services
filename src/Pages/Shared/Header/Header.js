import React from 'react';
import { signOut } from 'firebase/auth';
import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo-black.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const Header = () => {
    const [user] = useAuthState(auth)
    return (
        < >
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={logo}
                            width="100%"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link className='text-white' href='home#home' >Home</Nav.Link> */}
                            <Nav.Link className='text-white' href="home#services" >Services</Nav.Link>
                            <Nav.Link className='text-white' href="home#experts">Experts</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item to="#action/3.2">Another</NavDropdown.Item>
                                <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item to="#action/3.4">Separated</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-white' as={Link} to="/about">About</Nav.Link>
                            {user ?
                                <Link to='/login' onClick={()=>signOut(auth)} className='text-white text-decoration-none py-2'>SignOut</Link> 
                                :
                                <Nav.Link className='text-white' as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;