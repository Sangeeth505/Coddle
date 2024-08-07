import React from 'react';
import { Card } from 'react-bootstrap';
import ParOne from "../../assets/images/par-one.jpg"
import ParTwo from "../../assets/images/par-two.jpg"
import ParThree from "../../assets/images/par-three.jpg"
import ParFour from "../../assets/images/part-five.jpg"
import ParFive from "../../assets/images/par-four.jpg"
import "../../assets/scss/partners/styles.scss"

const partnersData = [
  { src: ParOne, alt: 'ParOne' },
  { src: ParTwo, alt: 'ParTwo' },
  { src: ParThree, alt: 'ParThree' },
  { src: ParFour, alt: 'ParFour' },
  { src: ParFive, alt: 'ParFive' },
];

const Partners = () => {
  return (
    <div className="partners">
      {partnersData.map((partner, index) => (
        <Card key={index} className="partner-card">
          <Card.Img variant="top" src={partner.src} alt={partner.alt} />
        </Card>
      ))}
    </div>
  );
};

export default Partners;
