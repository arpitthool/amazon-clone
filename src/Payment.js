import React, {useEffect, useState} from 'react'
import { Link,  useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import axios from './axios';

function Payment() {

    const history = useHistory();

    const [{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);

    // clientSecret is like a key that is given by client which allows to process payments
    const [clientSecret, setClientSecret] = useState(true);

    // whenever the basket changes we get a new secret
    useEffect(() => {
        // generate a special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            // axios is way of making a request
            const response = await axios({
                method : 'post',
                // Stripe expects the total in a currencies subunits hence, *100
                url : `/payments/create?total=${getBasketTotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        // using stripe
        event.preventDefault();

        // this will allow to click the buy button only once
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method : {
                card : elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // payment confirmed
            
            setSucceeded(true)
            setError(null)
            setProcessing(false)

            // empty basket
            dispatch({
                type: 'EMPTY_BASKET'
            })

            // we use replace() instead of push() because if user hits back button 
            // then we don't want them to come back to payment page
            history.replace('/orders')
        })

    }

    const handleChange = event => {
        // listen for changes in card elements and show errors if any
        
        // if event is empty then disable the button
        setDisabled(event.empty);

        // if there is error then show it
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className='payment'>

            <div className='payment__container'>

                <h1>
                    Checkout (
                        <Link to='/checkout'>
                            {basket?.length} items
                        </Link>
                    )
                </h1>

                {/* address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>
                            Delivery Address
                        </h3>
                    </div>
                    <div className='payment_-address'>
                        <p>{user?.email}</p>
                        <p>123 texas hill dr</p>
                        <p>Drighstown, GA</p>
                    </div>
                </div>

                {/* review cart items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                            <h3>
                                Review items and delivery
                            </h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(
                            item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            )
                        )}
                    </div>
                </div>

                {/* payment method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>
                            Payment Method
                        </h3>
                    </div>
                    <div className='payment__details'>
                        {/* Strip payment */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className='payment__priceContainer'>
                                <h3>
                                    Order Total : ${getBasketTotal(basket)}
                                </h3>

                                <button disabled={ processing || disabled || succeeded}>
                                    <span>
                                        {processing ? "Processing" : "But Now"}
                                    </span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Payment