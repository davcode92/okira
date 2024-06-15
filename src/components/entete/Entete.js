import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";

const Entete = ({search,handleSearch}) => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" variant="light">
        <Container>
          <Navbar.Brand href="#home">OKIRA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Accueil</Nav.Link>
              <Nav.Link href="#link">Panier</Nav.Link>
              <NavDropdown title="Catégories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Assaisonnements
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Compléments
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Légumes</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Viandes & Poissons
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Recherche..."
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={handleSearch}
            />
            <Button variant="outline-success">Chercher</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default Entete;
