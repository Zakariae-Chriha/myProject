import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";
import slide1 from "../assets/book-2948634_1280.png";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const { loggedIn } = useContext(AuthContext);
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
              <Nav.Link href="/">
                <HomeIcon />
                Home
              </Nav.Link>
              <Nav.Link href="/contact">
                <ContactMailIcon />
                Contact
              </Nav.Link>
              {loggedIn && (
                <Nav.Link href="/profile">
                  <AccountCircleIcon />
                  Profile
                </Nav.Link>
              )}
              {!loggedIn && (
                <Nav.Link href="/login">
                  <LoginIcon />
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
