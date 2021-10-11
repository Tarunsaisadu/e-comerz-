import React from "react";
import { Button, Card, Badge } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";
import "./singleproduct.css";
import { BsCartPlus, BsCartDash } from "react-icons/bs";
import { BiBlock } from "react-icons/bi";
const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log(cart);

  return (
    // <div>
    //   <div className="cardscontainer">
    //     <div class="card" style={{ paddingBottom: 0 }}>
    //       <img
    //         src={product.image}
    //         alt="Denim Jeans"
    //         style={{
    //           width: "100%",
    //           padding: "0px",
    //           paddingBottom: "0px",
    //           paddingRight: "3px",

    //           borderRadius: "10%",
    //         }}
    //       />
    //       <h5>{product.name}</h5>
    //       <p class="price">
    //         <Badge
    //           pill
    //           variant="dark"
    //           style={{ width: "20%", justifyContent: "center" }}
    //         >
    //           €{product.price.split(".")[0]}
    //         </Badge>
    //       </p>
    //       <div style={{ paddingBottom: 0 }}>
    //         {product.fastDelivery ? (
    //           <div>FAST Delivery</div>
    //         ) : (
    //           <div> 3days delivery</div>
    //         )}
    //         <Rating rating={product.ratings} />
    //         <p></p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // NEW MODERN CARD
    <div>
      <div class="cardcontainer">
        <div class="card">
          <div class="card-head">
            <img
              src={product.image}
              alt="Shoe"
              class="product-img"
              style={{
                width: "100%",
                padding: "0px",
                paddingBottom: "0px",

                borderRadius: "12%",
              }}
            />
          </div>
          <div class="card-body">
            <div class="product-desc">
              <span class="product-title">
                {product.name}
                <span class="badge">New</span>
              </span>

              <span class="product-rating">
                <Rating rating={product.ratings} />
              </span>
            </div>
            <div class="product-properties">
              {product.fastDelivery ? (
                <div>
                  <Badge
                    pill
                    variant="dark"
                    style={{
                      width: "50%",
                      fontSize: "18px",
                      marginTop: "17px",
                    }}
                  >
                    <strong>prime delivery</strong>
                  </Badge>
                </div>
              ) : (
                <div> 3 days delivery</div>
              )}
              <span id="cartbtns">
                {cart.some((p) => p.id === product.id) ? (
                  <Button
                    id="cartbtns"
                    variant="outline-danger"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: product,
                      });
                    }}
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/rivoakkk.json"
                      trigger="hover"
                      colors="primary:#c71f16,secondary:#c71f16"
                      style={{ width: "35px", height: "35px" }}
                    ></lord-icon>
                  </Button>
                ) : (
                  <Button
                    id="cartbtns"
                    variant="outline-success"
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: product,
                      });
                    }}
                    disabled={!product.inStock}
                  >
                    {!product.inStock ? (
                      <BiBlock />
                    ) : (
                      <lord-icon
                        src="https://cdn.lordicon.com/mecwbjnp.json"
                        trigger="hover"
                        colors="primary:#121331,secondary:#000000"
                        style={{ width: "35px", height: "35px" }}
                      ></lord-icon>
                    )}
                  </Button>
                )}
              </span>
              <span class="product-price">${product.price.split(".")[0]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="products">
    //   <Card style={{ width: "18rem" }}>
    //     <Card.Img variant="top" src={product.image} />
    //     <Card.Body>
    //       <Card.Title>{product.name}</Card.Title>
    //       <Card.Subtitle style={{ paddingBottom: 10 }}>
    //         <span>€{product.price.split(".")[0]} </span>
    //         {product.fastDelivery ? (
    //           <div>FAST Delivery</div>
    //         ) : (
    //           <div> 3days delivery</div>
    //         )}
    //         <Rating rating={product.ratings} />
    //       </Card.Subtitle>

    //       {cart.some((p) => p.id === product.id) ? (
    //         <Button
    //           variant="danger"
    //           onClick={() => {
    //             dispatch({
    //               type: "REMOVE_FROM_CART",
    //               payload: product,
    //             });
    //           }}
    //         >
    //           x
    //         </Button>
    //       ) : (
    //         <Button
    //           onClick={() => {
    //             dispatch({
    //               type: "ADD_TO_CART",
    //               payload: product,
    //             });
    //           }}
    //           disabled={!product.inStock}
    //         >
    //           {!product.inStock ? "Out Of Stock" : "add to cart"}
    //         </Button>
    //       )}
    //     </Card.Body>
    //   </Card>
    // </div>
  );
};

export default SingleProduct;