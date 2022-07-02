import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
        <div className='product__info'>
            
            <p>
                The lean startup
            </p>

            <p className='product__price'>
                <small>$</small>
                <small>19.99</small>
            </p>

            <div className='product__rating'>
                <p>🌟</p>
            </div>
        </div>

        <img src='https://m.media-amazon.com/images/I/71Bs2Ed3q6L._AC_SX425_.jpg'
        alt=''/>
            
        <button>
            Add to Basket
        </button>
    </div>
  )
}

export default Product