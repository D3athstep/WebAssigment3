import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import {AiOutlineContacts, AiOutlineHome} from "react-icons/ai";
import {FaCity} from "react-icons/fa";
import {BsPersonBadge} from "react-icons/bs";
import {MdOutlineTour} from "react-icons/md";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
         
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                  as={Link}
                  to="/personalities"
                  onClick={() => updateExpanded(false)}
              >
                <BsPersonBadge style={{ marginBottom: "2px" }} />Personalities
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                  as={Link}
                  to="/cities"
                  onClick={() => updateExpanded(false)}
              >
                <FaCity style={{ marginBottom: "2px" }} /> Cities
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/tourist-spots"
                onClick={() => updateExpanded(false)}
              >
                <MdOutlineTour style={{ marginBottom: "2px" }} /> Tourist Spots
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contact Me
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
