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
        <Row className="hero-bg">
          <Col sm={12} md={5}>
            <div>
              <img src="https://d2q79iu7y748jz.cloudfront.net/s/_logo/741cc5a954730632bff24248927707dc" className="logo-image" />
            </div>
          </Col>
          <Col sm={12} md={5}>
            
          </Col>
        </Row>
        <Row className="my-4 mx-5">
          <Col sm={12} md={6}>
            <div style={{display: 'inline-block'}} className="left-col">
              <h2 className="large-text">Our Mission:</h2>
              <br />
              <p className="small-text">
                We are a family-centered and family-owned Montessori school
                providing quality care and education for children ages 6 weeks
                through 6 years. We offer a variety of options within each
                program to suit your family’s needs. Let your child’s lifelong
                love of learning begin!
              </p>
            </div>
          </Col>
          <Col sm={12} md={6}>
          <img src="https://static01.nyt.com/images/2019/10/07/well/07klass-school/07klass-school-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="children learning" className="hero-image" />
            {/* <Carousel controls={false} class="carousel-container">
              <Carousel.Item>
                <img
                  src="https://media.istockphoto.com/id/1031384160/photo/primary-school-kids-run-holding-hands-in-corridor-close-up.jpg?s=612x612&w=0&k=20&c=a7ROQEvnnf7H8KECAlMl9KZAXn8sc38IknUGm7aimQA="
                  class="carousel-image"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://media.istockphoto.com/id/1170717275/photo/lets-learn-something-new-today.jpg?s=612x612&w=0&k=20&c=cdAb-boDeHfhz1iS2zs-GN_tb7x8PuCefZ4RlsmZdno="
                  class="carousel-image"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://d2c0db5b8fb27c1c9887-9b32efc83a6b298bb22e7a1df0837426.ssl.cf2.rackcdn.com/14460694-community-of-multi-diverse-lear-612x408.jpeg"
                  class="carousel-image"
                />
              </Carousel.Item>
            </Carousel> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}
