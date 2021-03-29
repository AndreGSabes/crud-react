import React from 'react';
import { Navbar, Button } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Simple Crud - React</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="success" href="/Add">
            Add User
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
