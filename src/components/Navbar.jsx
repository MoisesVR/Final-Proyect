import {Nav,Navbar, Container} from 'react-bootstrap';
/* import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; */

function CollapsibleNavbar() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="">Gimnasio Hermoso</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={`/`}>Inicio</Nav.Link>
                        <Nav.Link href={`/Planes`}>Planes</Nav.Link>
                        <Nav.Link href={`/Servicios`}>Servicios</Nav.Link>
                        <Nav.Link href={`/Clases`}>Clases</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href={`/Registrar`}>Registrar</Nav.Link>
                        <Nav.Link eventKey={2} href={`/IniciarSesion`}>
                            Iniciar Sesión
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleNavbar;
