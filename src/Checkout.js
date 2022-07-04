import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://m.media-amazon.com/images/I/71zXsuikWhL._SX3000_.jpg'/>
            
                <div>
                    <h2 className='checkout__title'>
                        Your shopping basket
                    </h2>

                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                </div>
            </div>

            <div className='checkout__left'>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout