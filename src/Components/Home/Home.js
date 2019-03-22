import React, {Component} from 'react';
import './Home.css'
import Carousel from '../Carousel/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
 

class Home extends Component {
  render() {
      return (
        <div id='body' className="Home">
          <img className='background-photo' src='https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Toyota Tacoma'/>
          <Carousel />
          <div className='container'>
            <img className='category' src='https://cdn.shopify.com/s/files/1/0790/9773/collections/Exterior_-_Home.png?v=1531583107' alt='Exterior'/>
            <img className='category' src='https://cdn.shopify.com/s/files/1/0790/9773/collections/Interior_-_Home.png?v=1531584540' alt='Interior'/>
            <img className='category' src='https://cdn.shopify.com/s/files/1/0790/9773/collections/Recovery_Gear_Icon_-_Home.png?v=1531583567' alt='Recovery'/>
            <img className='category' src='https://cdn.shopify.com/s/files/1/0790/9773/collections/Accessories_Icon_-_Home.png?v=1531582593' alt='Accessories'/>
            <img className='category' src='https://cdn.shopify.com/s/files/1/0790/9773/collections/Swag_Icon_-_Home.png?v=1531582834' alt='Swag'/>
            <img className='category' src='https://cdn.shopify.com/s/files/1/0790/9773/collections/Lighting_-_Home.png?v=1531592646' alt='Lighting'/>
            <img className='category' src='https://cdn.shopify.com/s/files/1/0790/9773/collections/Camping_Icon.png?v=1538237109' alt='Camping'/>
            <img className='category' src='https://cdn.shopify.com/s/files/1/0790/9773/collections/Sound_System_Icon_-_Home.png?v=1531583590' alt='Sound System'/>
            <img className='category' src='https://cdn.shopify.com/s/files/1/0790/9773/collections/Recovery_Gear_Icon_-_Home.png?v=1531583567' alt='Recovery'/>
             
          </div>
        </div>
      );
    }
  }
  
  export default Home;