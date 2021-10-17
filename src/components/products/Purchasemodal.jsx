import React from "react";

import useEffect from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./products.css";
export default function purchasemodal() {
  return (
    <div className="jumbodiv">
      {
        <Jumbotron fluid style={{ backgroundColor: "white" }}>
          <Container className="jumbotroncontainer">
            <h3 style={{ fontFamily: "cursive" }}>
              Thank you for the Purchase
            </h3>
          </Container>
          <lord-icon
            src="https://cdn.lordicon.com/qhviklyi.json"
            trigger="loop"
            colors="primary:#121331,secondary:#08a88a"
            style={{ width: "250px", height: "250px" }}
          ></lord-icon>
        </Jumbotron>
      }
    </div>
  );
}
