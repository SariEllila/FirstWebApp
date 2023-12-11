import React from "react";
import Products from "../components/product";
import axios from "axios";
import { URL } from "../config.js";
import { useNavigate } from "react-router-dom";
import { useStripe } from "@stripe/react-stripe-js";

const Checkout = (props) => {
  const navigate = useNavigate();
  const stripe = useStripe();

  const calculate_total = () => {
    let total = 0;
    products.forEach((ele) => (total += ele.quantity * ele.amount));
    return total;
  };

  // 1. When we click PAY button this function triggers first
  const createCheckoutSession = async () => {
    try {
      debugger;
      const response = await axios.post(
        `${URL}/payment/create-checkout-session`,
        { products }
      );
      return response.data.ok
        ? // we save session id in localStorage to get it later
          (localStorage.setItem(
            "sessionId",
            JSON.stringify(response.data.sessionId)
          ),
          // 9. If server returned ok after making a session we run redirect() and pass id of the session to the actual checkout / payment form
          redirect(response.data.sessionId))
        : navigate("/payment/error");
    } catch (error) {
      navigate("/payment/error");
    }
  };

  const redirect = (sessionId) => {
    debugger;

    stripe
      .redirectToCheckout({
        sessionId: sessionId,
      })
      .then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      });
  };
  //=====================================================================================
  //=====================================================================================
  //=====================================================================================
  return (
  <div className="checkout_container">

      <div className="footer">
        <div className="total">Total : {calculate_total()} €</div>
        <button className="button" onClick={() => createCheckoutSession()}>
          PAY
        </button>
      </div>

</div>
  );
};

export default Checkout;