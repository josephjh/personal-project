import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'

function Nav() {
    // console.log(props)
    // if(props.location.pathname !== '/checkout' && props.location.pathname !== '/register'){
        return(
            <div className='nav-bar'>
                <div>
                  <Link to='/' style={{textDecoration:'none'}}><h2>Logo Here</h2></Link>
                </div>
                <div className='search-bar'>
                    <input />
                    <button>Search</button>
                </div>
                <div className='header'>
                    <Link to='/products' style={{textDecoration:'none'}}> <h2>  Products  </h2> </Link>
                    <Link to='/mystore' style={{textDecoration:'none'}}> <h2>  My Store  </h2> </Link>
                    <Link to='/login' style={{textDecoration:'none'}}> <h2>  Login  </h2> </Link>
                </div>
            </div>
        )
    // }
}

export default Nav