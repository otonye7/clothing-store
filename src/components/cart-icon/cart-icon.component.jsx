import React from 'react';
import { IconContainer} from './cart-icon.styles';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden,itemCount}) => {
   
    return (
        <IconContainer>
            <div className='cart-icon' onClick={toggleCartHidden}>
                   <ShoppingIcon className='shopping-icon' />
                <span className='item-count'>{itemCount}</span>
             </div>
        </IconContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) =>  ({
    itemCount: selectCartItemsCount(state)
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);