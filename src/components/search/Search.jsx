import React from 'react'
import { Container, Row, Form, Button } from 'react-bootstrap'
import SearchOne from "../../assets/images/sear-one.png"
import SearchTwo from "../../assets/images/sear-two.png"
import SearchThree from "../../assets/images/sear-three.png"
import SearTen from "../../assets/images/sear-ten.png"
import { MdOutlineMailOutline } from "react-icons/md";
import "../../assets/scss/search/styles.scss"

const Search = () => {
    return (
        <div className='search'>
            <Container>
                <div className="search-container">
                    <img src={SearchOne} alt="" className='right-sec' />
                    <img src={SearchTwo} alt="" className='righ-corner' />
                    <Row>
                        <div className='text-center' >
                            <h2>Subscribe to get information, latest news and other interesting offers about Jadoo</h2>
                        </div>
                    </Row>
                    <Row>
                        <div >
                            <span className="form-icon"><MdOutlineMailOutline /></span>
                            <Form className='form-sec'>
                                <Form.Control type="email" placeholder="     Your email" />
                                <Button className='sub-btn-ser'>Subscribe</Button>
                            </Form>

                        </div>
                    </Row>
                    <img src={SearchThree} alt="" className='left-sec' />
                </div>
            </Container>
            <img src={SearTen} alt="SearTen" className='down-sec'/>
        </div>
    )
}

export default Search