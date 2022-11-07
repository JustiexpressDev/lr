import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export const BarraNavTyC = () => {
  return (
    <>
      <Navbar expand="xl" bg="dark" variant="dark" id="nav-bar">
        <Container>
          <Navbar.Brand href="#" className="mx-auto">
            Justiexpress
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
