import UpArrow from "../assets/up-arrow-4.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const Navbartop = () => {
  return (
    <section>
      <header>
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Projects</Nav.Link>
                <Nav.Link href="#link" className="contact_nav_btn">Let's Connect!</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <a className="back_to_top_btn" href="#"><img className="gotopbtn" src={UpArrow}></img></a>
    </section>
  )
};

export default Navbartop;

