import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Toddler() {
    return (
        <>
        <Container fluid>
        <Row>
          <Col sm={12} md={5}>
            <h2>Toddler Program</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              nibh molestie, lobortis enim at, rutrum tellus. Maecenas quis
              dolor velit. Nam convallis felis risus, eget lobortis est rhoncus
              ut.
            </p>
          </Col>
          </Row>
          </Container>
        </>
    );
}