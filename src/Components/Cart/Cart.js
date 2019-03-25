import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {setCart} from '../../Ducks/cartReducer';
import './Cart.css';
import StripeCheckout from 'react-stripe-checkout';

class Cart extends Component {

  componentDidMount(){
    axios.get('/api/cart')
  }
  
  async remove(cart_id){
    const cartReponse = await axios.delete(`/api/cart/${cart_id}`)
    this.props.setCart(cartReponse.data)
  }
  
  subTotal = () => {
    const cart = this.props.cart
    let total = 0
    cart.forEach(item => {
      total += Number(item.price)
    })
    return total
  }

  onToken = (token) => {
    token.card = void 0
    axios.post('/api/stripe', {token, amount:(this.subTotal()*100)}).then(res => {
      console.log(res)
      window.location.reload()
    })
}

  render() {
    console.log(757575, this.props.cart)
      return (
          <div className="Cart">
          <div className='container'>
          {this.props.cart.map(product => 
            <div className='single-cart-product' key={product.product_id}>
            <div className='cart-product-image' style={{backgroundImage: `url(${product.product_img})`}} alt='Product'></div>
            <div className='cart-product'>{product.product_name}</div>
            <div className='cart-product-price'> ${product.price}.00 </div>
            <div className='cart-type'>{product.type}</div>
            <button onClick={() => this.remove(product.cart_id)}>REMOVE</button>
            </div>
            )}
            <div>Subtotal</div>
            <div>${this.subTotal()}.00</div>
            </div>
            <div>
            {this.subTotal() !== 0 ? 
            <StripeCheckout
               name="UTOR"
               description="Utah Toyota Off-Road"
              //  image={Logo}
               token= {this.onToken}
               stripeKey={process.env.REACT_APP_STRIPE_KEY}
               amount={(this.subTotal()*100)}
            /> : 
            <h2>Cart is Empty! Go buy something!</h2>
            }
           </div>
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