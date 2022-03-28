import React from "react";
import {Container, Navbar, Nav} from "react-bootstrap";

export default function BarNav() {
  return (
      <>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Drusia</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#products">Productos</Nav.Link>
        <Nav.Link href="#gallery">Galeria</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </>
  )}