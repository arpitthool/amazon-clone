import moment from 'moment'
import './Order.css'
import CheckoutProduct from './CheckoutProduct'
import React from 'react'
import { getBasketTotal } from './reducer'


function Order({order}) {
    
    const basket = order.data.basket;

    return (
        <div className='order'>
            <h2>
                Order
            </h2>
            
            <p className='order__created'>
                {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
            </p>

            <p className='order__id'>
                <small>
                    {order.id}
                </small>
            </p>

            {order.data.basket?.map(
                            item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                    hideRemoveButton
                                />
                            )
                        )}

            <h3 className='order__total'>
                    ({order.data.basket.length} items): ${order.data.amount / 100}
            </h3>
        </div>
    )
}

export default Order