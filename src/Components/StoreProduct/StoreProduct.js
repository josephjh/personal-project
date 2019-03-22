import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class StoreProduct extends Component {
    constructor(props){
        super(props)

        this.state = {
            editing: false,
            product:[]
        }
    }

    handleProduct(value){
        this.setState({
            product: value
        })
    }

    setEdit(){
        this.setState({
            editing: true
        })
    }

    updateProduct(product_id){
        const {product} = this.state;
        this.props.update(product_id, product);
        this.setState({
            editing: false,
            product:[]
        })
    }

    render() {
        return (
        <div>
            <div>
                <div>{this.state.editing ? (
                    <form onSubmit={this.updateProduct}>
                        <input value={this.state.product.product_name}></input>
                        <input value={this.state.product.product_img}/>
                        <input value={this.state.product.price}/>
                        <input value={this.state.product.product_description}/>
                        <button type="submit">Update</button>
                    </form>
                    ) : (
                    <div>{product}</div>
                    )}
                </div>
            </div>
        </div>
        ) 
    
    }
        
}