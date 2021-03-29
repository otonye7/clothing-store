import React from 'react';
import { CollectiblesContainer } from './cart-item.styles';
// import { Link } from 'react-router-dom';



const CartItem = ({section: { imageUrl, price, title, quantity }}) => {
    
    return(
        <CollectiblesContainer>
            <div className='cart-item'>
                <img src={imageUrl} alt='section'/>
                <div className='item-details'>
                <span className='name'>{title}</span>
                 <span className='name'>{quantity} x ${price}</span>
                </div>
            </div>
        </CollectiblesContainer>
    )
}

export default CartItem;