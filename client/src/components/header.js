import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/styles.css';

import { Navbar, Button, Container, Nav } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar
        fixed='top'
        bg='dark'
        className='nav-style'
        expand='lg'
        variant='dark'>
        <Container>
          <Nav className='justify-content-end'>
            <Link to='/'>
              <li className='nav-links'>Blogs</li>
            </Link>
          </Nav>
          <Link to='/add'>
            <Button variant='outline-info'>Create</Button>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
