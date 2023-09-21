import React from "react";
import { Container, Row, Col } from "react-bootstrap";




const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME  INTRODUCE  MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is Ibrahim Khalilullah 
                 and I'm from  Lahore.
                  As a
                  Full-Stack developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />I am proficient in
                     Javascript, 
                    as well as have knowledge in programming languages such as C,Python.
                  <br />
                  <br />
                  I have a passion for working
                  with New Technologies, and
                  <i>
                      {" "}
                      modern Javascript libraries and frameworks
                    
                  </i>
                  &nbsp; like
                  <i>
                    React.js
                  </i>
                  <br />
                  <br />
                  I am also interested in building new
                  <i>
                    as well as exploring areas related to game development.
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                
              </Col>
            </Row>
            <Row>
              
            </Row>
          </Container>
        </Container>
      );
    
}

export default About