import React from 'react';
import './Review.css'

const Review = ({produc, removeproduct}) => {
    const {img, name, quantity,price, id} = produc
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="reviwe-details-container">
                <div className="review-detaitls">
                    <p>{name}</p>
                    <p><small>Price : {price}</small></p>
                    <p><small>Quanty : {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={()=>removeproduct(id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Review;