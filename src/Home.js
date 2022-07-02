import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image'
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""/>
        
            <div className='home__row'>
                <Product
                    id='574637'
                    title='The lean startup'
                    price={29.99}
                    image='https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY218_.jpg'
                    rating={5}
                />
                <Product
                    id='574546'
                    title='HP DeskJet 2755e Wireless Color All-in-One Printer with bonus 6 months Instant Ink with HP+ (26K67A)'
                    price={84.89}
                    image='https://m.media-amazon.com/images/I/61UdeL7aO-L._AC_SX425_.jpg'
                    rating={4}
                />

            </div>

            <div className='home__row'>
                <Product
                    id='434637'
                    title='UGREEN Tablet Pillow Stand for Lap Soft Tablet Stand Holder Bed with 3 Viewing Angles Adjustable Pillow Holder Compatible with iPad Pro 9.7, 10.5, 11, 12.9 Air Mini 5 4 3 2 E-Reader Grey'
                    price={23.99}
                    image='https://m.media-amazon.com/images/I/71Bs2Ed3q6L._AC_SY110_.jpg'
                    rating={4}
                />
                <Product
                    id='5746459'
                    title='ASICS Men Gel-Cumulus 23 Running Shoes'
                    price={99.99}
                    image='https://m.media-amazon.com/images/I/61l8NUUmmBL._AC_SY110_.jpg'
                    rating={4}
                />
                <Product
                    id='974637'
                    title='Ninja C38000 Foodi NeverStick Premium 8-Piece Cookware Set with Glass Lids, Hard-Anodized, Nonstick, Durable & Oven Safe to 500°F, Slate Grey'
                    price={269}
                    image='https://m.media-amazon.com/images/I/81ygRfRLjUL._AC_SY110_.jpg'
                    rating={3}
                />

            </div>

            <div className='home__row'>
                <Product
                    id='454637'
                    title='SAMSUNG CH890 Series 34-Inch Ultrawide QHD (3440x1440) Computer Monitor, 100Hz, Curved,'
                    price={589}
                    image='https://m.media-amazon.com/images/I/71qkzkC7bHL._AC_UY218_.jpg'
                    rating={5}
                />

            </div>
        </div>
    </div>
  )
}

export default Home