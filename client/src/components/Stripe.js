import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Cart from "./views/Cart";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Stripe = (props) => {
	return (

			<Elements stripe={stripePromise}>
				<Cart {...props} />
			</Elements>

	);
};

export default Stripe;