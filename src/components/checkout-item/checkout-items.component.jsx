import React from 'react';
import { CheckoutItemContainer } from './checkout-items.styles';
 import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem}) => {
    const { title, imageUrl, price, quantity } = cartItem
    
    return (
        <CheckoutItemContainer>
           <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
                <span className='name'>{title}</span>
            </div>
           <span className='price'>{price}</span>
           <span className='quantity'>
                <div className='arrow'>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' >&#10095;</div >
            </span>
            <div className='remove-button' >
                &#10005;
        </div>
        </div>
        </CheckoutItemContainer>
    )
};



export default  CheckoutItem;