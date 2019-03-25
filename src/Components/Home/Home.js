import React, {Component} from 'react';
import './Home.css'
import Carousel from '../Carousel/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Link} from 'react-router-dom';
 

class Home extends Component {
  render() {
      return (
        <div id='body' className="Home">
          <div className='container'>
          <div className='carousel-section'>
            <div className='carousel-container'>
              <Carousel className='carousel-box'/>
            </div>
          </div>
            <Link to ='/products?search=exterior'><img className='category' src='https://cdn.shopify.com/s/files/1/0790/9773/collections/Exterior_-_Home.png?v=1531583107' alt='Exterior' /></Link>
            <Link to='/products?search=interior'><img className='category' src='https://cdn.shopify.com/s/files/1/0790/9773/collections/Interior_-_Home.png?v=1531584540' alt='Interior'/></Link>
            <Link to='/products?search=performance'><img className='category' src='https://cdn.shopify.com/s/files/1/0790/9773/collections/Performance_-_Home.png?v=1531591823' alt='Performance'/></Link>
            <Link to='/products?search=accessories'><img className='category' src='https://cdn.shopify.com/s/files/1/0790/9773/collections/Accessories_Icon_-_Home.png?v=1531582593' alt='Accessories'/></Link>
            <Link to='/products?search=swag'><img className='category' src='https://cdn.shopify.com/s/files/1/0790/9773/collections/Swag_Icon_-_Home.png?v=1531582834' alt='Swag'/></Link>
            <Link to='/products?search=lighting'><img className='category' src='https://cdn.shopify.com/s/files/1/0790/9773/collections/Lighting_-_Home.png?v=1531592646' alt='Lighting'/></Link>
            <Link to='/products?search=camping'><img className='category' src='https://cdn.shopify.com/s/files/1/0790/9773/collections/Camping_Icon.png?v=1538237109' alt='Camping'/></Link>
            <Link to='/products?search=recovery'><img className='category' src='https://cdn.shopify.com/s/files/1/0790/9773/collections/Recovery_Gear_Icon_-_Home.png?v=1531583567' alt='Recovery'/></Link>
          </div>
        </div>
      );
    }
  }
  
  export default Home;