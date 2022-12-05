import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,img,price,ratings,seller} = props.products
    return (
        <div className='card-style'>
            <div className='single-product'>
                <img src={img} alt="" />
                <p className='product-name'>{name}</p>
                <p className='single-product-price'>Price : ${price}</p>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings}</small></p>
            </div>
            <button onClick={()=>props.addto(props.products)} className='add-card'>
                <p className='card-mar'>Add Card  </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    
        
    );
};



export default Product;