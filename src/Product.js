import React from 'react'
import './Product.css'

function Product({ id, title, image, price, rating }) {
  
    const addToBasket = () => {
        // dispatch the item to data layer
    }
  
    return (
    <div className='product'>
        <div className='product__info'>
            
            <p>
                {title}
            </p>

            <p className='product__price'>
                <small>$</small>
                <small>{price}</small>
            </p>

            <div className='product__rating'>
                {Array(rating).
                    fill().
                    map((_,i) => (<p>🌟</p>))
                }
            </div>
        </div>

        <img src={image}
        alt=''/>
            
        <button onClick={addToBasket}>
            Add to Basket
        </button>
    </div>
  )
}

export default Product