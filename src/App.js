import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {setCart} from './Ducks/cartReducer'
import { setUser } from './Ducks/userReducer';


class App extends Component {

  async componentDidMount(){
    try{
      const sessionResponse = await axios.get('/api/session')
      this.props.setUser(sessionResponse.data);
      const cartResponse = await axios.get('/api/cart')
      this.props.setCart(cartResponse.data)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {routes}
        <Footer />
      </div>
    );
  };
};


export default withRouter(connect(null, {setUser, setCart})(App));
