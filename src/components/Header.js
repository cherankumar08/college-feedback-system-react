import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Jerin.css";
import { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom

const SidebarData = [
  {
    title: "Dashboard",
    link: "/",
  },
  {
    title: "Assessment",
    link: "/pages/Assessment",
  },
  {
    title: "Report",
    link: "/Report",
  },
];

function Header(props) {
  const [sideShow, setSideShow] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 992);
      if (!isDesktop) {
        setShowSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDesktop]);

  return (
    <header className="">
      <Navbar expand="lg d-flex justify-content-between" className="p-2 ">
        <div>
          {!isDesktop && (
            <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
              <i className="bi bi-list"></i>
            </button>
          )}
          {sideShow && (
            <div className={`sidebar${showSidebar ? " show" : ""}`}>
              <div className="sidebar-content">
                <div>
                  <Offcanvas.Title className="KIOT">
                    Knowledge Institute Of Technology
                  </Offcanvas.Title>
                  <div className="sidebar">
                    <div className="logo-div">
                      <h4>STUDENT</h4>
                    </div>
                    <div className="sidebar-items">
                      {SidebarData.map((val, key) => (
                        <div key={key}>
                          {/* <NavLink
                            to={val.link}
                            className="items_box p-2 px-3 fs-6 text-decoration-none text-color d-flex justify-content-between"
                            activeStyle={{
                              background: "#CAF0F8",
                            }}
                          > */}
                            {val.title}
                          {/* </NavLink> */}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="rounded rounded-pill shadow-sm mb-0 search">
          <Form inline>
            <Row>
              <Col xs="auto" className="pe-0">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2 bg-transparent border-0 rounded-pill"
                />
              </Col>
              <Col xs="auto" className="ps-0">
                <Button className="bg-transparent border-0 ">
                  {/* <img src={search} height={24} /> */}
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="profile-block">
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto  text-color">
              <Nav.Link className="d-flex  w-auto me-4 rounded-pill py-0  profile text-color">
                <NavDropdown title={props.name} id="basic-nav-dropdown ">
                  <NavDropdown.Item href="#action/3.1" className="text-color">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" className="text-color">
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;

// import { BrowserRouter as Router } from "react-router-dom";
// import search from "../assets/images/search.png";
// import student from "../assets/images/student.png";
// import logo from "../assets/images/logo.png";
// import { SidebarData } from "../components/SidebarData";
// import image from "../assets/images/left4.png";
