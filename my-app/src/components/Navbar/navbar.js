import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navigation() {
  const expand = "lg";

  return (
    <>
      <Navbar
        key={expand}
        bg="dark"
        variant="dark"
        expand={expand}
      >
        <Container fluid>
          <Navbar.Brand href="#">Woodview Terrace Montessori</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
          
              <NavDropdown title="Philosophy" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Mission statement</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    What is a montessori?
                  </NavDropdown.Item>
                 
                  <NavDropdown.Divider />
                  
                  {/* <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
                </NavDropdown>
                <NavDropdown title="Programs" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Infant</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Toddler
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Preschool
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Kindergarten
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  
                  {/* <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
                </NavDropdown>
                <NavDropdown title="Parent Information" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Newsletters</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Calendar
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    School forms
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Reading material
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  
                  {/* <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
                </NavDropdown>
                
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
