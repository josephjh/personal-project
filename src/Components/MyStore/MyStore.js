import React, {Component} from 'react';
import './MyStore.css';
import axios from 'axios';
import StoreProducts from '../StoreProducts/StoreProducts';

class MyStore extends Component {
  constructor(){
    super()

    this.state = {
      products: []
    }
  }

    componentDidMount(){
      axios.get('/api/mystore').then(res => {
        console.log(111111, res.data)
        this.setState({
          products: res.data
        })
      })
    }
    
    updateProduct(id, product){
      axios.put(`/api/products/${id}`, {product}).then(res => {
        this.setState({
          products:res.data
        })
      })
    }

    delete = async (id) => {
      try {
        let res = await axios.delete(`/api/products/${id}`)
        this.setState({
          products: res.data
        })
      } catch {
        alert('Cannot Delete')
      }
    }

    addItem = async (e) => {
      e.preventDefault();
      const elements = e.target.elements;
      console.log(2222, elements)
      let item = {
        product_name: elements.product_name.value,
        price: elements.price.value,
        productImage: elements.product_image.value,
        type: elements.type.value,
        make: elements.make.value,
        description: elements.description.value
      }
      e.target.reset()
      try {
        let res = await axios.post('/api/product', item);
        this.setState({
          products: res.data
        })        
      } catch (err) {
        alert('could not add item')
      }
    }

    render() {
      return (
        <div className="MyStore">
          <form onSubmit={e => this.addItem(e)}>
            <select required defaultValue='' name='type'>
              <option disabled defaultValue=''>-Select Type-</option>
              <option defaultValue='Accessories'>Accessories</option>
              <option defaultValue='Armor'>Armor</option>
              <option defaultValue='Exterior'>Exterior</option>
              <option defaultValue='Interior'>Interior</option>
              <option defaultValue='Lighting'>Lighting</option> 
              <option defaultValue='Recovery'>Recovery</option>
              <option defaultValue='Swag'>Swag</option>
            </select>
            <select required defaultValue='' name='make'>
              <option disabled defaultValue=''>-Select Make-</option>
              <option defaultValue='Chevy'>Chevy</option>
              <option defaultValue='Ford'>Ford</option>
              <option defaultValue='Jeep'>Jeep</option>
              <option defaultValue='LandRover'>Land Rover</option>
              <option defaultValue='Toyota'>Toyota</option>
              <option defaultValue='Other'>Other</option>
            </select>
            <input name='product_name' placeholder='Product Name'/>
            <input name='price' placeholder='Price'/>
            <input name='product_image'  placeholder='Product Image'/>
            <input name='description' placeholder='Description'/>
            <button type='submit'>Add Item</button>
          </form>
            <StoreProducts products={this.state.products}/>
        </div>
      );
    };
  };
  

  export default MyStore