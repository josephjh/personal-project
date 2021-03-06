import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getUser} from '../../Ducks/userReducer';
import SearchBar from '../SearchBar/SearchBar'

class Nav extends Component {

    handleLogout(){
        axios.delete('/api/session')
        window.location.reload()

    }

    render() {
        return(
            <div className='nav-bar'>
                <div className='link1'>
                    <Link to='/' style={{textDecoration:'none', fontSize:40}}><i className='fas fa-truck-monster' ></i></Link>
                </div>
                <div className='search-bar'>
                    <SearchBar/>
                </div>
                <div className='header'>
                    <div className='links'>
                        <Link to='/products' className='link' style={{textDecoration:'none'}}>  <h2>  Products  </h2> </Link>
                        <Link to='/profile' className='link' style={{textDecoration:'none'}}> <h2>  Profile  </h2> </Link>
                        {!this.props.user.first_name ?
                        <Link to='/login' className='link' style={{textDecoration:'none'}}> <h2>  Login  </h2> </Link>
                        :
                        <Link to='/' className='link' style={{fontSize:16}}onClick={this.handleLogout}><h2>Logout</h2></Link>
                        }
                        <Link to='/cart' className='cart' style={{textDecoration:'none', fontSize:35}}> =<i className='fa fa-shopping-cart'></i></Link>
                    </div>
                    
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    return reduxState
}

const mapDispatchToProps = {
    getUser
}


export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))