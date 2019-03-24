import React from 'react';
import StoreProduct from '../StoreProduct/StoreProduct'

export default function StoreProducts(props){
    const mappedProducts = props.products.map(product => {
        return (
            <StoreProduct
              key={product.product_id}
              id={product.product_id}
              product_name={product.product_name}
              product_img={product.product_img}
              price={product.price}
              description={product.product_description}
              delete={props.delete}
              update={props.update}
            />
        )
    })
    return <div>{mappedProducts}</div>
}

