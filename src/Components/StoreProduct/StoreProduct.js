import React, {Component} from 'react';
import './StoreProduct.css'

class StoreProduct extends Component {
    constructor(props){
        super(props)

        this.state = {
            editing: false,
            type: this.props.type,
            make: this.props.make,
            product_name:this.props.product_name,
            product_img: this.props.product_img,
            price: this.props.price,
            product_description: this.props.product_description
        }
    }

    setEdit= () => {
        this.setState({
            editing: true
        })
    }

    handleChange= (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
        
    }

    updateProduct(){
        const {product_name, product_img, price, product_description} = this.props.products;
        this.props.update(product_name, product_img, price, product_description);
        this.setState({
            editing: false
        })
    }


    submitForm = (e) => {
        e.preventDefault()
        const {product_name, product_img, price, product_description} = this.state

        let product = {
            product_name, product_img, price, product_description
        }

        this.props.update(this.props.id, product)

        this.setState({
            editing: false,
            type:'',
            make:'',
            product_name:'',
            product_img:'',
            price: 0,
            product_description:''
        })
    }

    render() {
        return (
        <div>
            <div>
                <div>{this.state.editing ? (
                    <form onSubmit={this.submitForm}>
                        <select className='select-box'required defaultValue='' name='type' id='type' onChange={this.handleChange} initialValue={this.props.type} value={this.state.type}>
                            <option disabled defaultValue=''>-Select Type-</option>
                            <option defaultValue='Accessories'>Accessories</option>
                            <option defaultValue='Camping'>Camping</option>
                            <option defaultValue='Exterior'>Exterior</option>
                            <option defaultValue='Interior'>Interior</option>
                            <option defaultValue='Lighting'>Lighting</option> 
                            <option defaultValue='Performance'>Performance</option>
                            <option defaultValue='Recovery Gear'>Recovery Gear</option>
                            <option defaultValue='Swag'>Swag</option>
                        </select>
                        <select className='select-box' required defaultValue='' name='make' onChange={this.handleChange} initialValue={this.props.make} value={this.state.make}>
                            <option disabled defaultValue=''>-Select Make-</option>
                            <option defaultValue='Chevy'>Chevy</option>
                            <option defaultValue='Ford'>Ford</option>
                            <option defaultValue='Hummer'>Hummer</option>
                            <option defaultValue='Jeep'>Jeep</option>
                            <option defaultValue='LandRover'>Land Rover</option>
                            <option defaultValue='Suzuki'>Suzuki</option>
                            <option defaultValue='Toyota'>Toyota</option>
                            <option defaultValue='Other'>Other</option>
                        </select>
                        <input placeholder='Product Name' id='product_name' onChange={this.handleChange} initialValue={this.props.product_name} value={this.state.product_name}></input>
                        <input placeholder='Image'id='product_img' onChange={this.handleChange} value={this.state.product_img}/>
                        <input placeholder='Price'id='price' onChange={this.handleChange} value={this.state.price}/>
                        <input placeholder='Description'id='product_description' onChange={this.handleChange} initialValue={this.props.product_description} value={this.state.product_description}/>
                        <button className='update-button' type="submit">Update</button>
                        <button onClick={() => this.props.delete(this.props.id)}>Delete</button>

                    </form>
                    ) : (
                    <div className='store-product'>
                        <div className='container'>
                            <div>{this.props.type}</div>
                            <div>{this.props.make}</div>
                            <div>{this.props.product_name}</div>
                            <div style={{backgroundImage: `url(${this.props.product_img})`}} alt="Product"></div>
                            <div>{this.props.price}</div>
                            <div>{this.props.product_description}</div>
                            <button onClick={this.setEdit}>Edit</button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
        ) 
    
    }
        
}

export default StoreProduct