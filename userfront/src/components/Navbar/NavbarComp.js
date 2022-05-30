import React, { Component } from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap'

export default class Navbarcomp extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand>Bingo Virtual</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
              <Nav.Link href="/signup">Registrarse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
