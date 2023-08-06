import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

export default function Landing() {
  const expand = "lg";

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12} md={5}>
            <h2>Our Mission:</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              nibh molestie, lobortis enim at, rutrum tellus. Maecenas quis
              dolor velit. Nam convallis felis risus, eget lobortis est rhoncus
              ut.
            </p>
          </Col>
          <Col sm={12} md={5}>
            <Carousel controls={false} class="carousel-container">
              <Carousel.Item>
                <img src="https://media.istockphoto.com/id/1031384160/photo/primary-school-kids-run-holding-hands-in-corridor-close-up.jpg?s=612x612&w=0&k=20&c=a7ROQEvnnf7H8KECAlMl9KZAXn8sc38IknUGm7aimQA=" class="carousel-image" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://media.istockphoto.com/id/1170717275/photo/lets-learn-something-new-today.jpg?s=612x612&w=0&k=20&c=cdAb-boDeHfhz1iS2zs-GN_tb7x8PuCefZ4RlsmZdno=" class="carousel-image" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://thumbs.dreamstime.com/b/happy-children-girls-girlfriend-schoolgirl-student-elementary-school-happy-children-girlfriend-schoolgirl-student-elementary-121447690.jpg" class="carousel-image" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}
