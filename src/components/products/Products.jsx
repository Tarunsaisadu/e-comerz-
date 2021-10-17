import React from "react";
import {
  Container,
  Row,
  Col,
  FormControl,
  Button,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import "./products.css";
import FilterProducts from "./FilterProducts";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
const Products = () => {
  const {
    state: { products, cart },
    dispatch,
    productDispatch,
    productState: {
      sort,

      byStock,
      byFastDelivery,
      byRating,
      searchQuery,
      forReturn,
    },
  } = CartState();

  const changeProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowtoHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }
    if (forReturn) {
      sortedProducts = sortedProducts.filter((prod) => prod.forReturn);
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    console.log(sortedProducts);
    return sortedProducts;
  };
  console.log(byStock, byFastDelivery, sort, byRating, searchQuery);
  return (
    <div className="herocont">
      <div className="main_container">
        <FilterProducts product={products} />
        <div className="product_container">
          <div className="searchandcart">
            <Row style={{ margin: 0 }}>
              <FormControl
                style={{ width: 300 }}
                type="search"
                placeholder="search a product you are looking for..."
                className=" searchbar"
                onChange={(e) => {
                  productDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value,
                  });
                }}
              />
              <Dropdown
                alignRight
                id="cartbutton"
                style={{
                  paddingBottom: " 3.9525rem",

                  left: "20px",
                }}
              >
                <Dropdown.Toggle
                  style={{ backgroundColor: "#A4D6CD" }}
                  color="white"
                >
                  <Badge
                    className="cartbuttontext"
                    style={{
                      width: "14px",
                      fontSize: "14px",
                      backgroundColor: "black",
                    }}
                  >
                    {cart.length}
                  </Badge>
                  <GrCart
                    className="cartbuttonicon"
                    style={{ color: "white" }}
                  />
                  <span className="cartbuttontext" style={{ color: "black" }}>
                    Cart
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ minWidth: 380 }}>
                  {cart.length > 0 ? (
                    <>
                      {cart.map((product) => (
                        <span className="cartitem" key={product.id}>
                          <img
                            src={product.image}
                            className="cartItemImg"
                            alt={product.name}
                          />
                          <div className="cartItemDetail">
                            <span>{product.name}</span>
                            <span>€{product.price.split(".")[0]}</span>
                          </div>
                          <AiFillDelete
                            className="cartdeletebtn"
                            fontSize="20px"
                            style={{ cursor: "pointer", marginRight: "10px" }}
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: product,
                              })
                            }
                          />
                        </span>
                      ))}

                      <div className="gotocartbtn">
                        <Link to="/cart">
                          <Button
                            style={{
                              height: "30px",
                              width: "70%",
                              marginLeft: "20px",
                              backgroundColor: "#A4D6CD",
                              color: "black",
                            }}
                          >
                            Go To Cart
                          </Button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <span style={{ padding: 10 }}> cart is empty</span>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Row>
          </div>
          <div className="singleprod">
            <Row>
              {changeProducts().map((product) => {
                return <SingleProduct product={product} key={product.id} />;
              })}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
