import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../../assets/scss/services/styles.scss";
import ServOne from '../../assets/images/serv-one.jpg';
import ServTwo from '../../assets/images/serv-twob.jpg';
import ServThree from '../../assets/images/serv-three.jpg';
import ServFour from '../../assets/images/serv-four.jpg';
import ServRight from "../../assets/images/serv-right.jpg"

const serviceData = [
  { src: ServOne, alt: 'ServOne', title: 'Calculated Weather', description: 'Built Wicket longer admire do barton vanity itself do in it.' },
  { src: ServTwo, alt: 'ServTwo', title: 'Best Flights', description: 'Engrossed listening. Park gate sell they west hard for the.' },
  { src: ServThree, alt: 'ServThree', title: 'Local Events', description: 'Barton vanity itself do in it. Preferred to men it engrossed listening.' },
  { src: ServFour, alt: 'ServFour', title: 'Customization', description: 'We deliver outsourced aviation services for military customers.' },
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section className="services py-5">
      <Container>
        <p className="text-center mb-5">CATEGORY</p>
        <h2 className="text-center mb-5">We Offer Best Services</h2>
        <div className='top-rigt-img'>
          <img src={ServRight} alt="ServRight" style={{width:'120px', height:'120px'}}/>
        </div>
        <Row>
          {serviceData.map((service, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <Card
                className={`service-card ${hoveredCard === index ? 'hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Card.Img variant="top" src={service.src} alt={service.alt} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
              {hoveredCard === index && (
                <div className="serv-border"></div>
              )}

            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;



