
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './Card.css'
const Card = (props) => {


    const {count,clear, children} = props;
    let total = 0;
    let shipping = 0;
    let quenty = 0
    for (const product of count) {
        quenty = quenty + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        
    }
    let tax = (total * 0.1).toFixed(2);
    const taxNum = parseFloat(tax);
    const totalAmount = taxNum + shipping + total;
    return (
        <div className='card'>
            <h3 className='card-title'>Order summary</h3>
                <div className='card-detels'>
                    <p>Selected Items: {quenty}</p>
                    <p>Total Price: {total}</p>
                    <p>Total Shipping Charge: {shipping}</p>
                    <p>Tax: {tax}</p>
                    <p className='tota-price'>Grand Total: {totalAmount}</p>
                </div>
                <button onClick={clear} className='clear bg-red'>
                    <p>Clear Cart</p>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
                <button className='clear bg-orang'>
                    <p>{children}</p>
                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>

                </button>
        </div>
    );
};

export default Card;