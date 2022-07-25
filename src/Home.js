import React from 'react'
import Header from './Header';
import "./home.css"
import Product from './Product';


function Home() {
    return (
      <>
        <Header />
        <div className="home">
          <div className="home__container">
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt=""
            />
            <div className="home__row">
              <Product
                id="12321341"
                title="Women's Pajama Set Cotton Lounge Set V Neck Sleepwear Capri Pajama Pants Pjs Nightwear Short Top"
                price={31.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/71ThTY5FkKL._AC_SR350,526_FMwebp_QL65_.jpg"
                alt="WebPage To JPG"
              />

              <Product
                id="49538094"
                title="Plush Lined Microfiber Bath Robe for Women / Men (Unisex) Luxury Spa, Hotel Robe"
                price={97.95}
                rating={4}
                image="https://m.media-amazon.com/images/I/61+-u66R3PL._AC_UY550_.jpg"
              />
            </div>
            <div className="home__row">
              <Product
                id="4903850"
                title="SOLEJAZZ Pull Out Under Sink Cabinet Organizer, 2-Tier Sliding Storage Drawer Basket Organizer for Kitchen Bathroom, with Hooks, Hanging Cup, Dividers Multi-purpose Under Sink Shelf Organizer, White       "
                price={24.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/71Tk6Fwcx9L._AC_SL1500_.jpg"
              />
              <Product
                id="23445930"
                title=" JavaScript Coding for Teens: A Beginner's Guide to Developing Websites and Games "
                price={18.79}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/515FgoKcCtL._SX403_BO1,204,203,200_.jpg"
              />
              <Product
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
              />
            </div>
            <div className="home__row">
              <Product
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={1094.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
              />
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;