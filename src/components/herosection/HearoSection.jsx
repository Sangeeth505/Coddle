import React from 'react';
import { Container, Row, Col, Button,Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../../assets/scss/herosection/styles.scss';
import Decore from "../../assets/images/Decore.png"
import MainHeadImage from "../../assets/images/Decore-new.png"
import logo from "../../assets/images/Logo.jpg";
import MainImage from "../../assets/images/main-img.png"
import { IoMdPlay } from "react-icons/io";


const HeroSection = () => (
  <div className='top-section'>
    <img src={MainHeadImage} alt="Decore" className='main-im-top' />
    <section>
    <Navbar expand="lg">
    <Container fluid>
      <div className='head-main'>
        <Navbar.Brand href="#">
          <img src={logo} alt="Jadoo Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Destinations</Nav.Link>
            <Nav.Link href="#">Hotels</Nav.Link>
            <Nav.Link href="#">Flights</Nav.Link>
            <Nav.Link href="#">Bookings</Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link href="#">Sign up</Nav.Link>
            <NavDropdown title="EN" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">EN</NavDropdown.Item>
              <NavDropdown.Item href="#">ES</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Container>
  </Navbar>
    </section>
    <section className="hero py-5">
      <Container id='main-container'>
        <Row className="align-items-center">
          <Col md={6}>
            <p className='uppercase-text'>Best Destinations around the world</p>
            <img className='decore' src={Decore} alt="decore" />
            <h1 className='main-head'>Travel, enjoy and live a new and full life</h1>
            <p>
              Built Wicket longer admire do barton vanity itself do in it. Preferred to
              sportsmen it engrossed listening. Park gate sell they west hard for the.
            </p>
            <div className='button-sec'>
              <Button variant="primary" className="play-button-first">Find out more</Button>
              <div className="button-container">
                <button className="play-button">
                  <span className="icon-wrapper">
                    <IoMdPlay />
                  </span>
                  Play Demo
                </button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <img src={MainImage} alt="Hero" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  </div>
    
);

export default HeroSection;
