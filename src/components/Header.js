import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
const Header = () => {
  let token = sessionStorage.getItem("Auth Token");
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>NordStone</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {token ? (
              <Nav className="ml-auto">
                <LinkContainer to="/">
                  <Nav.Link href="/">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/notifications">
                  <Nav.Link href="/notifications">Notifications</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/photos">
                  <Nav.Link href="/photos">Photos</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/texts">
                  <Nav.Link href="/texts">Texts</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/calculator">
                  <Nav.Link href="/calculator">Calculator</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/logout">
                  <Nav.Link href="/logout">Logout</Nav.Link>
                </LinkContainer>
                )
              </Nav>
            ) : (
              <Nav className="ml-auto">
                <LinkContainer to="/">
                  <Nav.Link href="/">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link href="/login">Login</Nav.Link>
                </LinkContainer>
                )
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
