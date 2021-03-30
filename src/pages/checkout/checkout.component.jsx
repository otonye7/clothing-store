import React from 'react';
import { CheckoutContainer } from './checkout.styles';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import CheckoutText from '../../components/checkout-text/checkout-text.component';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-items.component';




const CheckoutPage = ({cartItems}) => {

      return (
        <CheckoutContainer> 
           <div className='checkout'>
               <br />
               <MenLink />
               <CheckoutText />
           </div>
           <br />
           <br />
           
           <div className='checkout-page'>
               <div className='checkout-header'>
                   <div className='header-block'>
                       <span>Products</span>
                   </div>
                   <div className='header-block'>
                       <span>Price</span>
                   </div>
                   <div className='header-block'>
                       <span>Quantity</span>
                   </div>
                   <div className='header-block'>
                       <span>Remove</span>
                   </div>
                   <div className='header-block'>
                       <span>Total</span>
                   </div>
               </div>
               <br />
               <div className='margin'></div>
               {
                   cartItems.map(cartItem =>
                     <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    )
               } 
           </div>
     </CheckoutContainer>   
      );
  };
  

  const mapStateToProps = createStructuredSelector({
      cartItems: selectCartItems,
  })
 
  export default connect(mapStateToProps)(CheckoutPage);