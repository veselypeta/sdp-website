import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { PentoLogo } from '../../atoms/pento-logo';

export const Navigation: React.FC = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="/">
                    <PentoLogo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Nav className="mr-auto" style={{ fontSize: 20, fontWeight: 'bold' }}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/budget">Budget</Nav.Link>
                    <Nav.Link href="/evaluation">Evaluation</Nav.Link>
                    <Nav.Link href="/how-does-it-work">How Does It Work?</Nav.Link>
                    <Nav.Link href="/system">System</Nav.Link>
                    <Nav.Link href="/team">Team</Nav.Link>
                    <Nav.Link href="/comments">Comments</Nav.Link>
                </Nav>
                <h1 style={{ color: 'white', padding: '15px' }}>Omni-Opener</h1>
            </Navbar>
        </>
    );
};
