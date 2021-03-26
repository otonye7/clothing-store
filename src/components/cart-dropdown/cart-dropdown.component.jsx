import React from 'react';
import { CollectiblesContainer } from './cart-dropdown.styles';
// import { Link } from 'react-router-dom';



const CartDropDown = () => {
    return(
        <CollectiblesContainer>
                <div className='cart-dropdown'>
                    <div className='cart-items'>
                        <span className='empty-message'>YOUR CART IS EMPTY</span>
                    </div>
                </div>
        </CollectiblesContainer>
    )
}

export default CartDropDown;