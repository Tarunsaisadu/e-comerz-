import { createContext, useContext, useReducer, useState } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./Reducer";

const Cart = createContext();

faker.seed(99);

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    description: faker.commerce.productDescription(),
    material: faker.commerce.productMaterial(),
    department: faker.commerce.department(),
    forReturn: faker.datatype.boolean(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  const [productState, productDispatch] = useReducer(productReducer, {
    forReturn: false,
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",

    isCheckout: false,
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};
export default Context;
