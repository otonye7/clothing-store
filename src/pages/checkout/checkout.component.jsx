import React from 'react';
import { CheckoutContainer } from './checkout.styles';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import CheckoutText from '../../components/checkout-text/checkout-text.component';
import  { Link} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-items.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import RelatedProducts from '../../components/related-products/related-products.component';
import RelatedImages from '../../components/related-images/related-images.component';
import Footer from '../../components/footer/footer.component';



const CheckoutPage = ({cartItems, total}) => {

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
                   <div className='header-blocks'>
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
        <div className='bottom-container'>
           
           <div className='shipping'>
               <h5 className='shipping-text'>Shipping and taxes calculated at checkout</h5>
               <br />
               <Link className='shipping-link'>ADD INSTRUCTIONS FOR SELLERS</Link>
           </div>

           <div className='total'>
            <span className='subtotal'>SUBTOTAL: ${total}</span>
            <br />
            <StripeCheckoutButton price={total}/>
        </div>

        </div>

        <div className='related-products'>
                <RelatedProducts />
              </div>
              <br />
              <div className='related-images'>
                <RelatedImages />
        </div>
        <br />
        <br />
        <div className='footer'>
              <Footer />
        </div> 
     </CheckoutContainer>   
      );
  };
  

  const mapStateToProps = createStructuredSelector({
      cartItems: selectCartItems,
      total: selectCartTotal
  })
 
  export default connect(mapStateToProps)(CheckoutPage);