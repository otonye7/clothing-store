import React from 'react';
import { CheckoutItemContainer } from './checkout-items.styles';
 import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, addItem, removeItem, clearItemFromCart}) => {
    const { title, imageUrl, price, quantity } = cartItem
    
    return (
        <CheckoutItemContainer>
           <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <div className='items'>
            <span className='name'>{title}</span>
           <span className='price'>{price}</span>
           <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div >
            </span>
            <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>
                &#10005;
            </div>
          
            </div>
            </div>
        </CheckoutItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: section => dispatch(addItem(section)),
    removeItem: section => dispatch(removeItem(section)),
    clearItemFromCart: section => dispatch(clearItemFromCart(section))
})

export default  connect(null, mapDispatchToProps)(CheckoutItem);