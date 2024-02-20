import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function navbar() {
  return (
    <NavBar bg="dark" expand="lg">
      <Container fluid>
        <NavBar.Brand as={Link} to="/">Notes</NavBar.Brand>
        <NavBar.Toggle aria-controls="navbarScroll" />
        <NavBar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
}

export default navbar;