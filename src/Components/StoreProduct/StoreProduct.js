import React, {Component} from 'react';

class StoreProduct extends Component {
    constructor(props){
        super(props)

        this.state = {
            editing: false,
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
                        <input placeholder='Product Name' id='product_name' onChange={this.handleChange} initialValue={this.props.product_name} value={this.state.product_name}></input>
                        <input placeholder='Image'id='product_img' onChange={this.handleChange} value={this.state.product_img}/>
                        <input placeholder='Price'id='price' onChange={this.handleChange} value={this.state.price}/>
                        <input placeholder='Description'id='product_description' onChange={this.handleChange} initialValue={this.props.product_description} value={this.state.product_description}/>
                        <button type="submit">Update</button>
                        <button onClick={() => this.props.delete(this.props.id)}>Delete</button>

                    </form>
                    ) : (
                        <div>
                            <div>{this.props.product_name}</div>
                            <div>{this.props.product_img}</div>
                            <div>{this.props.price}</div>
                            <div>{this.props.product_description}</div>
                    <button onClick={this.setEdit}>Edit</button>
                    </div>
                    
                    )}
                </div>
            </div>
        </div>
        ) 
    
    }
        
}

export default StoreProduct