import React, {Component} from 'react';
import axios from 'axios';
import './Products.css';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {setCart} from '../../Ducks/cartReducer';

class Products extends Component {
  constructor(){
    super()
    this.state = {
      products: []
    }
  }
   
  componentDidMount(){
    axios.get('/api/products').then(res => {
      this.setState({
        products: res.data
      })
    })
  }

  handleAddToCart = async (product_id) => {
    try {
      const response = await axios.post('/api/cart', {product_id})
      this.props.setCart(response.data)
    } catch (err) {
      alert('could not add to cart')
    }
  }

  handleSearch(product) {
    if(!this.searchkey){
      return true
    }
    
    return (product.product_name && product.product_name.toLowerCase().includes(this.searchKey))
      || (product.product_description && product.product_description.toLowerCase().includes(this.searchKey))
      || (product.type && product.type.toLowerCase().includes(this.searchKey))
      || (product.model && product.model.toLowerCase().includes(this.searchKey))
  }

    render() {
      const params = new URLSearchParams(this.props.location.search);
      this.searchKey = params.get('search') ? params.get('search').toLowerCase() : null;

      return (
        <div className="Products">
          <h1>Products</h1>
          <div className='container'>
          {this.state.products.filter((product) => this.handleSearch(product)).map(product => 
            <div className='single-product' key={product.product_id}>
              <div className='image' style={{backgroundImage: `url(${product.product_img})`}} alt="Product"> </div>
              <div className='product-name'>{product.product_name}</div>
              <div className='price'>${product.price}.00</div>
              <button className='cart-button' onClick={() => this.handleAddToCart(product.product_id)}>Add to Cart</button>
            </div>
          )}
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
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Products))