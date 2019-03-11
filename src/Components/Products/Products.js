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
      console.log(22222, res.data)
      this.setState({
        products: res.data
      })
    })
  }

    render() {
      // const {product_id, price, product_description, product_name} = this.state.products
      console.log(this.state.products)
      return (
        <div className="Products">
          <h1>Products</h1>
          {console.log(111111, this.state.products)}

        {this.state.products.map(ele => 
        <div key={ele.product_id} className='container'>
          <img className='image' src={ele.product_img} alt="Product"/>
           <div className='product-name'>{ele.product_name}</div> <div className='description'>{ele.product_description}</div> <div className='price'>{ele.price}</div>
        </div>
        )}
          
        </div>
      );
    }
  }
  
  export default Products;