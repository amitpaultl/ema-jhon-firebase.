
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoragCard } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const shop = useLoaderData();
    const [count ,setCount] = useState([]);
    
  

    useEffect(()=>{
        const stroedCart = getStoragCard()
        let seveCard = []
        for (const id in stroedCart) {
            const addedProduct = shop.find(product => product.id === id)
            if(addedProduct){
                const quenty =  stroedCart[id]
                addedProduct.quantity = quenty
                seveCard.push(addedProduct)
            }
            
        }
        setCount(seveCard)
    },[shop])

    const addToCard =(ids)=>{
        let newCount = []
        const exists =  count.find(product => product === ids);
        if(!exists){
            ids.quantity = 1;
            newCount = [...count, ids]
        }else{
            const rest = count.filter(product => product.id !== ids.id)
            exists.quantity = exists.quantity + 1;
            newCount =[ ...rest, exists];
        }
        setCount(newCount)
        addToDb(ids.id)
    }

    const clear = ()=>{
        deleteShoppingCart();
        setCount([])
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    shop.map(product => <Product 
                    key={product.id}
                    products={product}
                    addto={addToCard}
                    ></Product>)
                }
            </div>
            <div className="cart-container">

                <Card count={count} clear={clear}>
                    <Link to={'/order-review'}>
                        Reivew Order
                    </Link>
                </Card>
            </div>
        </div>
    );
};

export default Shop;