import React, {Component} from 'react';
import axios from 'axios';
import './Products.css'

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

    render() {
      return (
        <div className="Products">
          <h1>Products</h1>


          <div className='container'>
          {this.state.products.map(ele => 
            <div className='single-product' key={ele.product_id}>
              <div className='image' style={{backgroundImage: `url(${ele.product_img})`}} alt="Product"> </div>
              <div className='product-name'>{ele.product_name}</div>
              <div className='price'>${ele.price}.00</div>
              <button className='cart-button'>Add to Cart</button>
            </div>
          )}
          </div>
        </div>
      );
    }
  }
  
  export default Products;