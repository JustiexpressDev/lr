import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export const BarraNavTutelas = () => {
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
            <Nav className="mx-auto">
              <Nav.Link>
                <Link
                  id="RouterNavLink"
                  className="inicio"
                  onClick={handleNavClick}
                  to="/"
                >
                  Inicio
                </Link>
              </Nav.Link>
              <NavDropdown title="Servicios" id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={handleNavClick}
                  className="dropdown-item"
                >
                  <Link id="RouterNavLink" to="/tutelas">
                    Acciones de Tutela
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={handleNavClick}
                  className="dropdown-item"
                >
                  <Link id="RouterNavLink" to="/derechos-de-peticion">
                    Derechos de Petición
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={handleNavClick}
                  className="dropdown-item"
                >
                  <Link id="RouterNavLink" to="/reclamaciones">
                    Reclamaciones
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={handleNavClick}
                  className="dropdown-item"
                >
                  <Link id="RouterNavLink" to="/contratos">
                    Contratos
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={handleNavClick}
                  className="dropdown-item"
                >
                  <Link id="RouterNavLink" to="/desacatos">
                    Desacatos
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={handleNavClick}
                  className="dropdown-item"
                >
                  <Link id="RouterNavLink" to="/impugnaciones">
                    Impugnaciones
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={handleNavClick}
                  className="dropdown-item"
                >
                  <Link id="RouterNavLink" to="/proformas-respuestas">
                    Proformas de Respuesta
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={handleNavClick}
                  className="dropdown-item"
                >
                  <Link id="RouterNavLink" to="/consultoria">
                    Consultoría
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={handleNavClick}
                  className="dropdown-item"
                >
                  <Link id="RouterNavLink" to="/empresas">
                    Empresas y Startups
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={handleNavClick}>
                <HashLink smooth to="/tutelas/#Contáctanos">
                  Contáctanos
                </HashLink>
              </Nav.Link>
              <Nav.Link onClick={handleNavClick}>
                <HashLink smooth to="/tutelas/#Testimonios">
                  Testimonios
                </HashLink>
              </Nav.Link>
              <Nav.Link onClick={handleNavClick}>
                <HashLink smooth to="/tutelas/#Quiénes-Somos">
                  Quiénes somos
                </HashLink>
              </Nav.Link>
              <Nav.Link
                onClick={handleNavClick}
                href="https://justiexpress.web.app/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="cuenta">Ingresa a la plataforma</p>
                <p>Inicia sesión</p>
              </Nav.Link>
              <Nav.Link
                onClick={handleNavClick}
                href="https://justiexpress.web.app/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="cuenta text-center">Crea aquí tu cuenta</p>
                <p>Regístrate</p>
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
