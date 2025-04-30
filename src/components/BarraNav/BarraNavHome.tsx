import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

export const BarraNavHome = () => {
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
            <Nav className="nav-container mx-auto">
            <Nav.Link onClick={handleNavClick} className="nav-item">
                <HashLink smooth to="/#ServiciosCard">
                  Servicios
                </HashLink>
              </Nav.Link>   
              <Nav.Link onClick={handleNavClick} className="nav-item">
                <HashLink smooth to="/#Testimonios">
                  Testimonios
                </HashLink>
              </Nav.Link>
              <Nav.Link onClick={handleNavClick} className="nav-item">
                <HashLink smooth to="/#Contáctanos">
                  Contáctanos
                </HashLink>
              </Nav.Link>
              <Nav.Link onClick={handleNavClick} className="nav-item">
                <HashLink smooth to="/#Quiénes-Somos">
                  Quiénes somos
                </HashLink>
              </Nav.Link>
              <Nav.Link onClick={handleNavClick} className="nav-item">
                <HashLink smooth to="/#FAQ">
                  Preguntas Frecuentes
                </HashLink>
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};