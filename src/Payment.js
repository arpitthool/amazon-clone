import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);

    const handleSubmit = e => {

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