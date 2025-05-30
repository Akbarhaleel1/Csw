"use client";
import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';

const PayPalCheckout = () => {
  const createOrder = async () => {
    const res = await axios.post("http://localhost:3001/create-order");
    return res.data.id;
  };

  const onApprove = async (data) => {
    const res = await axios.post(`http://localhost:5000/capture-order/${data.orderID}`);
    console.log("Order Captured:", res.data);
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "Ab29gSxfGzsBC1tVnAvvuYrWzhylVs8b0DM7gETSwQgHDKemNuI32lVKoTUBluHA_J3piKsmMueGKawB" }}>
      <PayPalButtons
        createOrder={() => createOrder()}
        onApprove={onApprove}
        onError={(err) => console.error("PayPal error:", err)}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalCheckout;
