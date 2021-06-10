import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav>
          <Nav.Link eventKey="disabled" disabled>
            Google Books
          </Nav.Link>
          <Nav.Item>
            <Nav.Link href="/">Search</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/books">Saved</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;