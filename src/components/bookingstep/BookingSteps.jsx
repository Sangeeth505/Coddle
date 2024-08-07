import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../../assets/scss/bookingsteps/styles.scss"
import BookOne from "../../assets/images/book-one.jpg"
import BookTwo from "../../assets/images/book-two.jpg"
import BookThree from "../../assets/images/book-three.jpg"
import BookFour from "../../assets/images/book-four.jpg"
import BookSix from "../../assets/images/book-six.jpg"
import BookA from "../../assets/images/book-a.jpg"
import BookB from "../../assets/images/book-b.jpg"
import BookC from "../../assets/images/book-c.jpg"
import BookD from "../../assets/images/book-d.jpg"
import BookE from "../../assets/images/book-e.jpg"

const steps = [
  { image: BookOne, title: 'Choose Destination', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies lorem tortor tempus.' },
  { image: BookTwo, title: 'Make Payment', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies lorem tortor tempus.' },
  { image: BookThree, title: 'Reach Airport on Selected Date', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies lorem tortor tempus.' },
];

const BookingSteps = () => (
  <section className="booking-steps py-5">
    <Container>
      <Row>
        <Col md={12} lg={6}>
          <p>Easy and Fast</p>
          <h2>Book Your Next Trip In 3 Easy Steps</h2>
          <Row className='book-row'>
            {steps.map((step, index) => (
              <Col key={index} >
                <div className='book-main'>
                  <img src={step.image} alt={step.title} className="book-ic" />
                  <div >
                    <h3 >{step.title}</h3>
                    <p className='book-p'>{step.text}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={12} lg={6}>
          <div className='main-book-sec-two'>
            <Card>
              <Card.Img className='book-img-card' src={BookFour} alt='card-img' />
              <Card.Body>
                <Card.Title className='book-titel-two'>Trip To Greece</Card.Title>
                <Card.Text className='book-text-two'>14-29 June | by Robbin joseph</Card.Text>
                <div className='book-icon-sec'>
                  <Card.Img src={BookA} alt='booka' className='icon-sec' />
                  <Card.Img src={BookB} alt='bookb' className='icon-sec' />
                  <Card.Img src={BookC} alt='bookc' className='icon-sec' />
                </div>
                <div className='book-bottom-sec'>
                  <Card.Text className='text-btm-sec'>
                    <Card.Img src={BookD} alt='bookD' className='btm-icon-sec' />
                    24 people going
                  </Card.Text>
                  <Card.Img className='btm-icon-sectwo' src={BookE} alt='bookE'/>
                </div>
              </Card.Body>
            </Card>
            <Card className='down-card'>
            <img src={BookSix} alt='card-img' className='center-sec'/>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default BookingSteps;
