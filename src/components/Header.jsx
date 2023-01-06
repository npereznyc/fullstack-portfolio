import '../styles/Header.css'
import { Link } from "react-router-dom";
import { getSuggestedQuery } from "@testing-library/react";
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header(props) {


  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="myColor" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home" className="justify-content-center fs-4" id="homelink">Natalie Perez</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end fs-4">
            <Nav>
              <Nav.Link id="NavLink" href="#about">
                about
              </Nav.Link>
              <Nav.Link id="NavLink" href="#projects">
                projects
              </Nav.Link>
              <Nav.Link id="NavLink" href="#contact">
                contact
              </Nav.Link>
              {/* <Nav.Link id="NavLink" href={Resume} target="_blank">
                RESUME
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  );
}

export default Header;




// import React, { Component } from "react";
// import logo from "../logo.svg";
// import { Link, animateScroll as scroll } from "react-scroll";

// export default class Navbar extends Component {
//   scrollToTop = () => {
//     scroll.scrollToTop();
//   };

//   render() {
//     return (
//       <nav className="nav" id="navbar">
//         <div className="nav-content">
//           {/* <img
//             src={logo}
//             className="nav-logo"
//             alt="Logo"
//             onClick={this.scrollToTop}
//           /> */}
//           <ul className="nav-items">
//           <li className="nav-item">
//               <Link
//                 activeClass="active"
//                 to="home"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 activeClass="active"
//                 to="about"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 activeClass="active"
//                 to="projects"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Projects
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }