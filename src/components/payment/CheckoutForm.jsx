import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { useStripe } from '@stripe/react-stripe-js';
import { useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';

const CheckoutForm = ({ bookedData }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorCard, setCardError] = useState()
    const [clientSecret, setClientSecret] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    const { resalePrice, name, email, _id } = bookedData;
    console.log(bookedData)



    useEffect(() => {
        fetch('http://localhost:5000/payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ resalePrice })
        })
            .then(res => res.json())
            .then(data => {
                setClientSecret(data.clientSecret)
            })
    }, [resalePrice])



    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!stripe || !elements) {
            return
        }


        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }


        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })


        if (error) {
            console.error(error)
            setCardError(error.message)
        }
        else {
            setCardError('')
        }

        setSuccess('')
        setProcessing(true)
        //card payment confirmation
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        console.log(paymentIntent)
        if (confirmError) {
            setCardError(confirmError)
            return;
        }

        //make object for send data

        const payment = {

            resalePrice,
            transactionId: paymentIntent.id,
            email,
            paymentId: _id

        }

        if (paymentIntent.status === 'succeeded') {

            fetch('http://localhost:5000/payment', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {

                    if (data.acknowledged === true) {
                        console.log('card info', card);
                        setSuccess('Your payment successfully completed');
                        setTransactionId(paymentIntent.id);
                    }

                })
        }







    }

    return (
        <div className='border text-xl p-10'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            complete: {
                                fontSize: '24px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-sm btn-secondary mt-4'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}
                >
                    Pay
                </button>
                <p className='text-error'>
                    {errorCard}
                </p>
            </form>


            {
                success && <div>
                    <p className='text-green-600 text-sm'>{success}</p>
                    <p className='text-blue-500 text-sm'>Your TransactionId is:- <strong>{transactionId}</strong></p>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;