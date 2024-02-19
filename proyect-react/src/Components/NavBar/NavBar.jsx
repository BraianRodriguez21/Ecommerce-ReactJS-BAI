import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from '../CartWidget/CarWidget';
import Logo from '../../Logo';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
          <Nav className="me-auto">
          <NavLink to="/categoria/Home">Home</NavLink>
            <NavLink to="/categoria/Guitarra">Guitarra</NavLink>
            <NavLink to="/categoria/Amplificador" >Amplificador</NavLink>
            <NavLink to="/categoria/Pianos">Pianos</NavLink>
            <NavLink to="/categoria/Microfono">Microfono</NavLink>
            <NavLink to="/Carrito"> <CarWidget/> </NavLink>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default NavBar;