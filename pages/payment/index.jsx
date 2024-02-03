import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
// import { CheckoutForm } from '../components/CheckoutForm'


const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

const Checkout = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
  // import meta.env.VITE_STRIPE_PK is the publishable key you can either directly paste your stripe key here but not recommending if you are planning to upload the code on github as it should remain only available to you or save the key in .env file
  
  return (
    <div className='flex container mt-8'>
      <Elements stripe={stripePromise} options={options}>
        <h3>Welcome to Check out...</h3>
      </Elements>
    </div>
  )
}

export default Checkout