import { Nav, Navbar, Container, Offcanvas } from 'react-bootstrap'
import React from 'react'

function Header() {
  return (
    <Navbar bg='light' expand={false}>
      <Container fluid>
        <Navbar.Brand href='/'>Books Community</Navbar.Brand>
        <Navbar.Toggle aria-controls='offcanvasNavbar' />
        <Navbar.Offcanvas
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
          placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel'>
              Books Community
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>

              <Nav.Link href='/login'>Login</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Header
