import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData } from 'react-router-dom';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);


const Payment = () => {
    const bookedData =useLoaderData();
    return (
        <div>
            <h1 className='text-3xl font-semibold mt-9'>Pay Your Amount </h1>
            <div className='w-96 h-14 my-32 mx-auto '>
                <Elements stripe={stripePromise}>
                    <CheckoutForm bookedData={bookedData}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;