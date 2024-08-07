import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../../assets/scss/topdestinations/styles.scss"
import DestOne from "../../assets/images/dest-one.jpg"
import DestTwo from "../../assets/images/dest-two.jpg"
import DestThree from "../../assets/images/dest-three.jpg"
import { FaLocationArrow } from "react-icons/fa";
import RollDesign from "../../assets/images/tod-des-de.jpg"

const destinations = [
  { name: 'Rome, Italy', price: '$5,42k', duration: '10 Days Trip', image: DestOne },
  { name: 'London, UK', price: '$4.2k', duration: '12 Days Trip', image: DestTwo },
  { name: 'Full Europe', price: '$15k', duration: '28 Days Trip', image: DestThree },
];

const TopDestinations = () => (
  <section className="top-destinations py-5 ">
    <Container>
      <p className='text-center'>Top Selling</p>
      <h2 className="text-center mb-5">Top Destinations</h2>
      <Row className="justify-content-center">
        <Col md={11} className='card-main' >
          <Row>
            {destinations.map((destination, index) => (
              <Col key={index} md={4}>
                <Card className="mb-4">
                  <Card.Img variant="top" className="card-img" src={destination.image} />
                  <Card.Body>
                    <div className="card-titles">
                      <Card.Title className="name">{destination.name}</Card.Title>
                      <Card.Title className="price">{destination.price}</Card.Title>
                    </div>
                    <Card.Text className='card-text'><span className='arrow-ic'><FaLocationArrow /></span> {destination.duration}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={1} className="d-none d-md-block d-flex justify-content-center align-items-center">
          <img src={RollDesign} alt='design' className="roll-design-img" />
        </Col>
      </Row>
    </Container>
  </section>
);

export default TopDestinations;
