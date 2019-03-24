import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {setCart} from '../../Ducks/cartReducer'


class Cart extends Component {
  async remove(cart_id){
    const cartReponse = await axios.delete(`/api/cart/${cart_id}`)
    this.props.setCart(cartReponse.data)
  }

  render() {
      return (
        <div className="Cart">
          {this.props.cart.map(product => 
            <div key={product.product_id}>
              <div>{product.product_name}</div>
              <div>{product.product_price}</div>
              <button onClick={() => this.remove(product.cart_id)}>REMOVE</button>
            </div>
          )}
        </div>
      );
    }
  }

  function mapStateToProps(reduxState){
    return reduxState
  };

  const mapDispatchToProps = {
    setCart
  };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))