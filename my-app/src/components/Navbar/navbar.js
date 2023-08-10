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
        style={{color: "#A92117" , backgroundSize: "0", backgroundColor: "#EFDECD"}}
        variant="dark"
        expand={expand}
      >
        <Container fluid>
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-around flex-grow-1 pe-3">
                <Nav.Link className="navText" href="/">Home</Nav.Link>

                <NavDropdown title="Programs" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Infant">Infant</NavDropdown.Item>
                  <NavDropdown.Item href="/Toddler">Toddler</NavDropdown.Item>
                  <NavDropdown.Item href="/Preschool">
                    Preschool
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Kindergarten">
                    Kindergarten
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  {/* <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
                </NavDropdown>
                <NavDropdown className="navText" title="Parent Information" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Newsletters">
                    Newsletters
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Calendar">
                    Calendar
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/SchoolForms">
                    School forms
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/ReadingMaterial">
                    Reading material
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  {/* <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
                </NavDropdown>

                <Nav.Link className="navText" href="/Menu">Menu</Nav.Link>

                <Nav.Link className="navText" href="/Testimonials">Testimonials</Nav.Link>

                <Nav.Link className="navText" href="/Contact">Contact</Nav.Link>


              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
