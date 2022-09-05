import React from "react";
import { Form, Button, Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold text-light">
            <img
              src="https://astrapedia.co/static/media/logo-grey-white.241c85b2380a4f9c1154.png"
              width={100}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="fontNavigation-crypto text-light">
                Cyrptocurency
              </Nav.Link>
              <Nav.Link className="fontNavigation text-light">
                Exchange
              </Nav.Link>
              <Nav.Link className="fontNavigation text-light">Vote</Nav.Link>
              <Nav.Link className="fontNavigation text-light">News</Nav.Link>
              <Nav.Link className="fontNavigation text-light">Swap</Nav.Link>
              <Nav.Link className="fontNavigation text-light">Signal</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
            />
          </Form>
          <Button
            style={{ backgroundColor: "#074EB7" }}
            className="rounded-pill"
          >
            Log In
          </Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
