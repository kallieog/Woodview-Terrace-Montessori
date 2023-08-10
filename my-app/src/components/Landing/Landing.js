import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

export default function Landing() {
  const expand = "lg";

  return (
    <>
      <Container fluid className="pb-5 landing-bg">
        <div className="content">
          <Row className="hero-bg">
            <Col sm={12} md={5}>
              <div>
                <img
                  src="https://d2q79iu7y748jz.cloudfront.net/s/_logo/741cc5a954730632bff24248927707dc"
                  className="logo-image"
                />
              </div>
            </Col>
            <Col sm={12} md={5}></Col>
          </Row>
          <Row className="my-4 mx-5 mb-5">
            <Col sm={12} md={6}>
              <div style={{ display: "inline-block" }} className="left-col">
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
              <img
                src="https://static01.nyt.com/images/2019/10/07/well/07klass-school/07klass-school-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
                alt="children learning"
                className="hero-image"
              />
            </Col>
          </Row>
          <Row className="mx-5 mb-2">
            <Col sm={12}>
              <h2 className="large-text-dark">Education Programs:</h2>
              <p className="medium-text-dark">
                We offer several programs for your child to take part in from
                the ages of 6 weeks to 6 years old.
              </p>
            </Col>
          </Row>
          <Row className="mx-5 mb-5">
            <Col className="program-card">
              <Card
                style={{
                  width: "18rem",
                  backgroundColor: "#9dc183",
                  height: "400px",
                }}
                border="success"
                text="dark"
              >
                <Card.Body>
                  <Card.Title>
                    <h3 style={{borderBottom: '1px black solid'}}>Toddlers</h3>
                  </Card.Title>
                  <Card.Text>
                    With the toddlers, the goal is to provide for each child's
                    need to move, to feel comfortable and to feel competent. Our
                    focus is on involving the children with materials, teachers
                    and other toddlers so that the child can construct knowledge
                    based on those interactions. The children alternate between
                    group and individual learning times throughout the day.
                  </Card.Text>
                  <Button>
                    <Card.Link style={{ color: "whitesmoke" }} href="/Toddlers">
                      More Information
                    </Card.Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "18rem",
                  backgroundColor: "#9dc183",
                  height: "400px",
                }}
                border="success"
                text="dark"
              >
                <Card.Body>
                  <Card.Title>
                    <h3 style={{borderBottom: '1px black solid'}}>Pre-School</h3>
                  </Card.Title>
                  <Card.Text>
                    Our preschool classes are age mixed, as per Dr. Montessori’s
                    philosophy that children will learn from each other. Younger
                    children learn from the older children and the older
                    children enjoy demonstrating their newly mastered skills -
                    both benefit. Our preschool program takes place in two
                    separate classrooms each day.
                  </Card.Text>
                  <Button>
                    <Card.Link
                      style={{ color: "whitesmoke" }}
                      href="/Preschool"
                    >
                      More Information
                    </Card.Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "18rem",
                  backgroundColor: "#9dc183",
                  height: "400px",
                }}
                border="success"
                text="dark"
              >
                <Card.Body>
                  <Card.Title>
                    <h3 style={{borderBottom: '1px black solid'}}>Kindergarten</h3>
                  </Card.Title>
                  <Card.Text>
                    The full-day kindergarten program takes our preschool
                    program to the next level. In addition to all the preschool
                    activities it also includes a daily science class, formal
                    art class, social studies, math readiness, reading readiness
                    and additional field trips throughout the year. A detailed
                    daily schedule and curriculum is available upon request.
                  </Card.Text>
                  <Button>
                    <Card.Link
                      style={{ color: "whitesmoke" }}
                      href="/Preschool"
                    >
                      More Information
                    </Card.Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mx-5">
            <Col sm={12} md={6}>
              <Carousel controls={false} class="carousel-container">
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
              </Carousel>
            </Col>
            <Col sm={12} md={6}>
              <div style={{ display: "inline-block" }} className="left-col">
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
          </Row>
        </div>
      </Container>
    </>
  );
}
