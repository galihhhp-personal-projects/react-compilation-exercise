import React, { useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './meditation.css';

export default function MeditationNavbar() {
    useEffect(() => {
        document.title = 'Heal.Me';
    });

    const brand = {
        color: '#2E6888',
        fontWeight: 'bolder',
    };

    const nav = {
        backgroundColor: '#E2E2E2',
    };

    const navItem = {
        color: '#2E6888',
    };

    const cta = {
        color: 'white',
        fontWeight: 'bolder',
        backgroundColor: '#2E884D',
    };

    return (
        <Navbar collapseOnSelect expand='lg' className='med-nav' style={nav}>
            <Navbar.Brand
                href='#home'
                className='med-nav-brand mr-5'
                style={brand}>
                Heal.Mind
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link style={navItem} className='med-nav-item mr-4'>
                        Home
                    </Nav.Link>
                    <Nav.Link style={navItem} className='med-nav-item mr-4'>
                        Blog
                    </Nav.Link>
                    <Nav.Link style={navItem} className='med-nav-item mr-4'>
                        Agenda
                    </Nav.Link>
                    <Nav.Link style={navItem} className='med-nav-item mr-4'>
                        About Us
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link
                        className='px-4'
                        style={cta}
                        eventKey={2}
                        href='#memes'>
                        How To Get Started
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
