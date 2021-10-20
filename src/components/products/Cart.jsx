import React, { useState, useEffect } from "react";
import {
  ListGroup,
  Row,
  Col,
  Form,
  Image,
  Button,
  Card,
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import PayPal from "../PayPal";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import "./cart.css";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <div className="cart">
      <div className="cartwrapper">
        {cart.length > 0 ? (
          <div className="cart_container">
            <ListGroup>
              {cart.map((prod) => (
                <ListGroup.Item key={prod.id}>
                  <Row>
                    <Col md={2}>
                      <Image
                        className="cartimage"
                        src={prod.image}
                        alt={prod.name}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={2}>
                      <h3 className="carttitle">{prod.name}</h3>
                    </Col>
                    <Col md={2}>
                      <p className="carttitle">€{prod.price}</p>
                    </Col>
                    <Col md={2}>
                      <p className="carttitle">
                        <Rating rating={prod.ratings} />
                      </p>
                    </Col>
                    <Col md={2}>
                      <Form.Control
                        className="carttitle"
                        as="select"
                        value={prod.qty}
                        onChange={(e) =>
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: prod.id,
                              qty: e.target.value,
                            },
                          })
                        }
                      >
                        {[...Array(prod.inStock).keys()].map((x) => (
                          <option key={x + 1}>{x + 1}</option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        className="carttitle"
                        type="button"
                        variant="light"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      >
                        <lord-icon
                          className="carttitle"
                          src="https://cdn.lordicon.com/gsqxdxog.json"
                          trigger="hover"
                          colors="primary:#121331,secondary:#08a88a"
                          style={{
                            width: "24px",
                            height: "24px",
                            top: "-4px",
                          }}
                        ></lord-icon>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        ) : (
          ""
        )}

        <div className="summary-container">
          <div className="ordersummarycard">
            <Card
              border="dark"
              style={{ width: "15rem", height: "18rem", float: "right" }}
            >
              <Card.Header>
                {" "}
                <h6 className="carttitle">Order Summary</h6>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <p className="carttitle">Subtotal :({cart.length}) in cart</p>
                </Card.Title>
                <Card.Text>
                  <span
                    className="carttitle"
                    style={{ fontWeight: 700, fontSize: 20 }}
                  >
                    Total:€{total}
                  </span>

                  <StripeCheckout
                    className="paymentbtn"
                    token={onToken}
                    name="Maya Shopping"
                    currency="EUR"
                    amount={total * 100}
                    allowRememberMe
                    stripeKey="pk_test_51JksifHPGT6xDKKvBBeUHi53KN3hOotr8I4rWRtOF65DBHwIyUG4Y6cbv0liAsLEVCWeMUfjOjLcYvAq15GCgGtU00EmN6HDM5"
                  />
                </Card.Text>
              </Card.Body>
              <Link to="purchase">
                <span className="transaction">
                  <a href="#">Done with Transaction ?</a>
                </span>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
