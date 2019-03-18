import React, {Component} from 'react';
import './Home.css'

class Home extends Component {
    render() {
      return (
        <div className="Home">
          <img className='background-photo'src='https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Toyota Tacoma'/>
          <div className='container'>
            <div className='category'>Exterior</div>
            <div className='category'>Interior</div>
            <div className='category'>Recovery</div>
            <div className='category'>Accessories</div>
            <div className='category'>Swag</div>
            <div className='category'>Armor</div>        
            <div className='category'>Lighting</div>          
          </div>
        </div>
      );
    }
  }
  
  export default Home;