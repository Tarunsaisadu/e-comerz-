import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./topnav.css";
export default function Topnav() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navbar fixed-top ">
        <Link to="/">
          <Navbar.Brand className="logo" href="#home">
            S'mart Shopping
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto list">
            <Link to="/">
              <Nav.Link className="listitems" href="#features">
                Home
              </Nav.Link>
            </Link>
            <Link to="/products">
              <Nav.Link className="listitems" href="#pricing">
                Products
              </Nav.Link>
            </Link>
            <Link to="/backoffice">
              <Nav.Link className="listitems" href="#pricing">
                Backoffice
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import "./topnav.css";
// import { Navbar, Col } from "react-bootstrap";
// export default function Topnav() {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

//   const toggleNav = () => {
//     setToggleMenu(!toggleMenu);
//   };

//   useEffect(() => {
//     const changeWidth = () => {
//       setScreenWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", changeWidth);

//     return () => {
//       window.removeEventListener("resize", changeWidth);
//     };
//   }, []);

//   return (
//     <div>
//       <nav>
//         <div className="leftpart">
//           {/* <h3 className="logo">S'mart Shopping</h3> */}
//         </div>
//         <div className="rightpart">
//           {(toggleMenu || screenWidth > 500) && (
//             <ul className="list">
//               <li className="items">Home</li>
//               <li className="items">Products</li>
//               <li className="items">Back office</li>
//             </ul>
//           )}
//         </div>
//         <button onClick={toggleNav} className="btn">
//           button
//         </button>
//       </nav>
//     </div>
//   );
// }
