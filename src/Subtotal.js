import React from 'react'
import './Subtotal.css'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">

            <h3>
                Subtotal({basket.length} items): {getBasketTotal(basket)}
            </h3>

            <small className='subtotal__gift'>
                <input type='checkbox'/> This order contains a gift
            </small>

            <button>
                Proceed to checkout
            </button>

        </div>
    )
}

export default Subtotal