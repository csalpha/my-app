import React, { useContext, useEffect, useState } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function App() {


    // STATE
    const [sidebarIsOpen, setSidebarIsOpen] = useState(() =>{
      return false
    });

  return (
    <div
    className={
      sidebarIsOpen ? 'site-container active-cont d-flex flex-column' // true
      : 'site-container d-flex flex-column' // false
    } >
        <header>
          {/* <Navbar className="cor" bg="dark" variant="dark" expand="lg"> */}
          <Navbar  bg="dark" variant="dark" expand="lg">
            <Container>
            <Button
                variant="dark"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <FontAwesomeIcon icon={faBars} />
              </Button>
              <Navbar.Brand>Loja</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
               
                <Nav className="me-auto">
             
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

                <div
          className={
            sidebarIsOpen
              ? ' active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
          <Nav className="flex-column text-white w-100 p-2">
            <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item>
          </Nav>
        </div>

        <main
          className="container mt-3"
          onClick={() => setSidebarIsOpen(false)}
        >

        </main>

        <footer>
          <div className="text-center">All Rights Reserved</div>
        </footer>
    </div>
  );
}

export default App;
