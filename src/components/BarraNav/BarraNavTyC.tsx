import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export const BarraNavTyC = () => {
  const [show, setShow] = useState(false);
  const handleNavClick = () => {
    setShow(false);
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="xl"
        bg="dark"
        variant="dark"
        id="nav-bar"
      >
        <Container>
          <Navbar.Brand href="#">Justiexpress</Navbar.Brand>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`collapse navbar-collapse ${show ? "show" : ""}`}
            id="navbarCollapse"
          >
            <Nav className="mx-auto"></Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
