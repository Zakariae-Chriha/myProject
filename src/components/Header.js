import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";
import slide1 from "../assets/book-2948634_1280.png";

import React from "react";

function Header() {
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand href="/">
          Community-
          <img
            src={slide1}
            alt="First slide"
            style={{
              width: "80px",
              height: "40px",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Community-
              <img
                src={slide1}
                alt="First slide"
                style={{
                  width: "80px",
                  height: "40px",
                }}
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>

              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
