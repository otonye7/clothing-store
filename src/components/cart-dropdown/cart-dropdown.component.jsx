import React from 'react';
import { CollectiblesContainer } from './cart-dropdown.styles';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
 import CustomButton from '../custom-button/custom-button.component';
 import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
// import { Link } from 'react-router-dom';



const CartDropDown = ({cartItems, history, dispatch}) => {
    console.log(cartItems)
    return(
        <CollectiblesContainer>
                <div className='cart-dropdown'>
                    <div className='cart-items'>
                        {
                           cartItems.length ? 
                           cartItems.map(cartItem => (
                             <CartItem key={cartItem.id} section={cartItem}/> 
                             
                            ))
                           :
                            <span className='empty-message'>YOUR CART IS EMPTY</span>
                        }
                       
                    </div>
                    <div className='buttons'>
                        <CustomButton 
                        onClick={() => {history.push('/checkout');
                         dispatch(toggleCartHidden())
                         }}
                         >GO TO CHECKOUT
                        </CustomButton>
                    </div>
                </div>
        </CollectiblesContainer>
    )
}

const mapStateToProps = (state) => ({
  cartItems : selectCartItems(state)
})



export default withRouter(connect(mapStateToProps)(CartDropDown));