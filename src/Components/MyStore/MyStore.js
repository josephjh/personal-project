import React, {Component} from 'react';
import './MyStore.css';
import axios from 'axios';
import StoreProducts from '../StoreProducts/StoreProducts';
import './MyStore.css'

class MyStore extends Component {
  constructor(){
    super()

    this.state = {
      products: []
    }

    this.addProduct = this.addProduct.bind(this)
    this.updateProduct = this.updateProduct.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
  }

     getProducts = () => axios.get('/api/mystore').then(res => {
      this.setState({
        products: res.data
      })
    })

    componentDidMount(){
      this.getProducts()
    }
    
    updateProduct(id, product){
      axios.put(`/api/products/${id}`, product).then(res => {
        this.setState({
          products:res.data
        })
      })
    }

    deleteProduct(id){
      console.log(id)
      axios.delete(`/api/product/${id}`).then(res => {
        this.setState({
          products: res.data
        })
      })
    }

    async addProduct(e) {
      e.preventDefault();
      const elements = e.target.elements;
      let item = {
        product_name: elements.product_name.value,
        price: elements.price.value,
        product_img: elements.product_image.value,
        type: elements.type.value,
        make: elements.make.value,
        product_description: elements.description.value
      }
      e.target.reset()
      try {
        let res = await axios.post('/api/product', item);
        this.getProducts()
        console.log(res.data)       
      } catch (err) {
        alert('could not add item')
      }
    }

    render() {
      console.log(50000, this.state.products)
      return (
        <div className="MyStore">
          <hr></hr>
          <form className='container'onSubmit={this.addProduct}>
            <select className='select-box'required defaultValue='' name='type'>
              <option defaultValue=''>-Select Type-</option>
              <option defaultValue='Accessories'>Accessories</option>
              <option defaultValue='Camping'>Camping</option>
              <option defaultValue='Exterior'>Exterior</option>
              <option defaultValue='Interior'>Interior</option>
              <option defaultValue='Lighting'>Lighting</option> 
              <option defaultValue='Performance'>Performance</option>
              <option defaultValue='Recovery Gear'>Recovery Gear</option>
              <option defaultValue='Swag'>Swag</option>
            </select>
            <select className='select-box' required defaultValue='' name='make'>
              <option defaultValue=''>-Select Make-</option>
              <option defaultValue='Chevy'>Chevy</option>
              <option defaultValue='Ford'>Ford</option>
              <option defaultValue='Hummer'>Hummer</option>
              <option defaultValue='Jeep'>Jeep</option>
              <option defaultValue='LandRover'>Land Rover</option>
              <option defaultValue='Suzuki'>Suzuki</option>
              <option defaultValue='Toyota'>Toyota</option>
              <option defaultValue='Other'>Other</option>
            </select>
            <input name='product_name' placeholder='Product Name'/>
            <input name='price' placeholder='Price'/>
            <input name='product_image'  placeholder='Product Image'/>
            <input name='description' placeholder='Description'/>
            <button type='submit' className='add-new-product-button'>Add Item</button>
          </form>
          <hr></hr>
          <div className="mystore-container">
            <StoreProducts className='store-product' update={this.updateProduct} delete={this.deleteProduct} products={this.state.products}/>
          </div>
        </div>
      );
    };
  };
  

  export default MyStore