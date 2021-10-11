import React, { useEffect, useRef } from "react";
import { CartState } from "./context/Context";
import { Cart } from "./products/Cart";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
export default function PayPal({ Total }) {
  // const {
  //   state: { cart },
  //   dispatch,
  // } = CartState();
  // const paypal = useRef();

  // useEffect(() => {
  //   window.paypal
  //     .Buttons({
  //       createOrder: (data, actions, err) => {
  //         return actions.order.createOrder({
  //           intent: "CAPTURE",
  //           purchase_units: [
  //             {
  //               description: "cart items",
  //               amount: {
  //                 currency_code: "EUR",
  //                 value: 434.0,
  //               },
  //             },
  //           ],
  //         });
  //       },
  //       onApprove: async (data, actions) => {
  //         const order = await actions.order.capture();
  //         console.log(order);
  //       },
  //       onError: (err) => {
  //         console.log(err);
  //       },
  //     })
  //     .render(paypal.current);
  // }, []);
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: { Total },
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    return actions.order.capture();
  };
  return (
    <div>
      {/* <div ref={paypal}></div> */}

      <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </div>
  );
}
