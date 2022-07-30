import React, { useRef, useEffect } from "react";

const PayPal = (props) => {

    const paypal = useRef();

  useEffect(() => {
    if(window.myButton) window.myButton.close();
    window.myButton = window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
                {
                  description: "Donate to Meal on the Wheel",
                  amount: {
                    currency_code: "CAD",
                    value: props.amount,
                  },
                },
              ],
          });
        },
        style: {
            size: 'medium',
            color: 'blue',
            shape: 'pill',
          },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          window.alert('Thank you for your Donation!');
          console.log(order);
        },
        onError: err => {
          console.error(err);
        }
      });
    window.myButton.render(paypal.current);
  })

  return (
    
      <div ref={paypal}></div>
  
  );

}

export default PayPal