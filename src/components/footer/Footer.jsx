import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../assets/scss/footer/styles.scss";
import Facebook from "../../assets/images/facebook.png"
import Insta from "../../assets/images/insta.png"
import Twitter from "../../assets/images/twitter.png"
import Playstore from "../../assets/images/Google-Play.png"
import Apple from "../../assets/images/PlayStore.png"

const Footer = () => (
  <footer className="footer py-5">
    <Container>
      <Row className="footer-top">
        <Col md={3}>
          <h5 className='foot-head'>Jadoo.</h5>
          <p className='foot-ph'>Book your trip in minute, get full control for much longer.</p>
        </Col>
        <Col md={2}>
          <h5>Company</h5>
          <ul className="list-unstyled">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </Col>
        <Col md={2}>
          <h5>Contact</h5>
          <ul className="list-unstyled">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </Col>
        <Col md={2}>
          <h5>More</h5>
          <ul className="list-unstyled">
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </Col>
        <Col md={3}>
          <div className='social-image-sec'>
            <img src={Facebook} alt="Facebook" className='social-sec'/>
            <img src={Insta} alt="Insta" className='social-sec'/>
            <img src={Twitter} alt="Twitter" className='social-sec'/>
          </div>
          <p className='foot-social-ph'>Discover our app</p>
          <div className='social-image-sec'>
            <img src={Playstore} alt="Playstore"  className='social-two'/>
            <img src={Apple} alt="Apple" className='social-two'/>
          </div>
        </Col>
      </Row>
      <Row className="footer-bottom">
        <Col className="text-center ">
          <p className='foot-end'>All rights reserved@jadoo.co</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
