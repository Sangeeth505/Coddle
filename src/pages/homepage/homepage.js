import React from 'react'
import "../../assets/scss/homepage/styles.scss"
import HeroSection from "../../components/herosection/HearoSection";
import Services from "../../components/services/Services";
import TopDestinations from "../../components/topdestination/TopDestinations";
import BookingSteps from "../../components/bookingstep/BookingSteps";
import Testimonials from "../../components/testimonials/TestMonials";
import Search from '../../components/search/Search';
import Footer from "../../components/footer/Footer"
import Partners from '../../components/partners/Partners';


const HomePage = () => {
  return (
    <div className="homepage-background">
      <div className="homepage-content">
        <HeroSection />
        <Services />
        <TopDestinations />
        <BookingSteps />
        <Testimonials />
        <Partners />
        <Search />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage