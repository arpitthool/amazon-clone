import React from 'react'
import './Subtotal.css'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">

            <h3>
                Subtotal({basket.length} items): {getBasketTotal(basket)}
            </h3>

            <small className='subtotal__gift'>
                <input type='checkbox'/> This order contains a gift
            </small>

            {/* we are using history.push() to prgrammatically take the user to the next page
            , we also could have used the Link to do this */}
            <button onClick={e => history.push('/payment')}>
                Proceed to checkout
            </button>

        </div>
    )
}

export default Subtotal