import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
//import homeLogo from '../assets/about.png'
import Particle from '../../components/Particle';
import About from './About';
import Type from './Type';
import logo from '../../assets/my Dp.jpg'


const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Ibrahim Khalilullah</strong>
              </h1>

              <h1 className={'ml-5'} style={{ textAlign: "left" }}>
                <Type />
              </h1>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src= {logo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
     
    </section>
  );
}

export default Home