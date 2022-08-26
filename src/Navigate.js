import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from './images/meme_logo.png'


function Navigate() {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container >
          <Navbar.Brand href="/" className="navbar logo">
            <img
              src={logo}
              alt="Memes logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="/">
              Home
            </Nav.Link>
            <Nav.Link href="/giflib">Library</Nav.Link>
            <Nav.Link href="/memegenerator">Generator</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigate