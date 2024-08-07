import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../../assets/scss/testimonials/styles.scss';
import TermOne from '../../assets/images/terminal-one.jpg';
import { Autoplay, Pagination } from 'swiper/modules';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const testimonials = [
  {
    name: 'Mike Taylor',
    location: 'Lahore, Pakistan',
    comment: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
    image: TermOne,
  },
  {
    name: 'Kithu Aravind',
    location: 'Kerala, Kannur',
    comment: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
    image: TermOne,
  },
  {
    name: 'Jone Jake',
    location: 'Lahore, Pakistan',
    comment: 'After going through a number of sites, I had to settle for Jadoo because honestly it was a no brainer trying someone else.',
    image: TermOne,
  }
];

const headings = [
  'What People Say About Us.',
  'Our Clients Love Us!',
  'Hear from Our Customers',
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials py-5">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <p>Testimonials</p>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              modules={[Autoplay, Pagination]}
              className="swiper-container"
            >
              {headings.map((heading, index) => (
                <SwiperSlide key={index}>
                  <h2>{heading}</h2>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col md={12} lg={6}>
            <div className="testimonial-container">
              <div className="testimonials">
                <div className="testimonial-item">
                  <div className="image-wrapper">
                    <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="rounded-circle" />
                  </div>
                  <div className="testimonial-content">
                    <p>"{testimonials[currentIndex].comment}"</p>
                    <h5>{testimonials[currentIndex].name}</h5>
                    <h6>{testimonials[currentIndex].location}</h6>
                  </div>
                </div>
              </div>
              <div className="arrows">
                <span onClick={handlePrev}><IoIosArrowUp /></span>
                <span onClick={handleNext}><IoIosArrowDown /></span>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default Testimonials