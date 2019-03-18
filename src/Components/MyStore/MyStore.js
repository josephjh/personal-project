import React, {Component} from 'react';
import './MyStore.css'
import axios from 'axios';

class MyStore extends Component {
    constructor(){
      super()

      this.state = {
        productName:'',
        price:'',
        productImage:'',
        description:'',
        type:'',
        make:''
      }
    }

    handleChange(prop, value) {
      this.setState({
        [prop]: value
      })
    }

    addItem = async() => {
      let item = {
        productName: this.state.productName,
        price: this.state.price,
        productImage: this.state.productImage,
        type:this.state.type,
        make:this.state.make,
        description: this.state.description
      }
      try {
        let res = await axios.post('/api/product', item);
        console.log(res)
      } catch (err) {
        alert('could not add item')
      }
    }

    render() {
      const {productName, price, productImage, type, make, description} = this.state;
      return (
        <div className="MyStore">
          <div>Add Item
            <select value={type} name='Type' onChange={e => this.handleChange('type', e.target.value)}>
              <option value='-Select Make-'>-Select Make-</option>
              <option value='Accessories'>Accessories</option>
              <option value='Armor'>Armor</option>
              <option value='Exterior'>Exterior</option>
              <option value='Interior'>Interior</option>
              <option value='Lighting'>Lighting</option> 
              <option value='Recovery'>Recovery</option>
              <option value='Swag'>Swag</option>
            </select>
            <select value={make} name='Make' onChange={e => this.handleChange('make', e.target.value)}>
              <option value='-Select Make-'>-Select Make-</option>
              <option value='Chevy'>Chevy</option>
              <option value='Ford'>Ford</option>
              <option value='Jeep'>Jeep</option>
              <option value='LandRover'>Land Rover</option>
              <option value='Toyota'>Toyota</option>
              <option value='Other'>Other</option>
            </select>
            <input value={productName} placeholder='Product Name' onChange={e => this.handleChange('productName', e.target.value)}/>
            <input value={price} placeholder='Price' onChange={e => this.handleChange('price', e.target.value)}/>
            <input value={productImage} placeholder='Product Image' onChange={e => this.handleChange('productImage', e.target.value)}/>
            <input value={description} placeholder='Description' onChange={e => this.handleChange('description', e.target.value)}/>
            <button onClick={this.addItem}>Add Item</button>
          </div>
        </div>
      );
    };
  };
  
  export default MyStore;