import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Review from '../Review/Review';
import './OrderReview.css'

const OrderReview = () => {
    const prodect = useLoaderData();
    const { products, previousCart } = prodect;
    const [card, setCard] = useState(previousCart)
    const removeproduct = (id) =>{
        const reming =  card.filter(product => product.id !== id)
        setCard(reming)
        removeFromDb(id)
    }

    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    card.map(produc => <Review
                    key={produc.id}
                    produc={produc}
                    removeproduct={removeproduct}
                    ></Review>)
                }
            </div>
            <div className="cart-container">

                <Card count={card}>
                    <Link to={'/shipping'}>
                    Proceed shipping
                    </Link>
                </Card>
            </div>
        </div>
    );
};

export default OrderReview;