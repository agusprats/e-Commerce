import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";
import Fade from 'react-reveal/Fade';


function CheckoutProduct({id, image, title, price, rating, hideButton}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
    })
}

    return (
        <Fade left cascade>
        <div className='checkoutProduct'>
            <img className="checkoutProduct__image" src={image} 
            alt="product"/>
    
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                <span role="img" aria-hidden="true">🌟</span>
                ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from basket</button>
                )}
                
            </div>
        </div>
        </Fade>
    )
}

export default CheckoutProduct
