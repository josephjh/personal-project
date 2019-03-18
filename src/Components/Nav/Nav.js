import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

function Nav() {
    
        return(
            <div className='nav-bar'>
                <div>
                  <Link to='/' style={{textDecoration:'none', fontSize:40}}><i className='fas fa-truck-monster' ></i></Link>
                </div>
                <div className='search-bar'>
                    <input />
                    <button>Search</button>
                </div>
                <div className='header'>
                    <div className='links'>
                        <Link to='/products' className='link' style={{textDecoration:'none'}}>  <h2>  Products  </h2> </Link>
                        <Link to='/profile' className='link' style={{textDecoration:'none'}}> <h2>  Profile  </h2> </Link>
                        <Link to='/login' className='link' style={{textDecoration:'none'}}> <h2>  Login  </h2> </Link>
                        <Link to='cart' className='cart'  style={{textDecoration:'none', fontSize:35}}> =<i className='fa fa-shopping-cart'></i></Link>
                    </div>
                    
                </div>
            </div>
        )
    // }
}

export default Nav