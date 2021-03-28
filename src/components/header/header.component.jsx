import React from 'react';
import { HeaderContainer } from './header.styles';
import { connect } from 'react-redux';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import PersonIcon from '@material-ui/icons/Person';
import {auth} from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';



const Header = ({currentUser, hidden}) => {

    return(
        <HeaderContainer>
            <div className='overall-container'>
             <div className='logo'>
                 <h2 className='logo-name'>S^MO SPORTS</h2>
             </div>

             <div className='cart-containers'>
                 {
                     currentUser ?
                     <div className='sign-out' onClick={() => auth.signOut()}>SIGN OUT</div>
                     :
                      <Link to='/signin'>
                          <PersonIcon className='person'/>
                      </Link>
                 }
                 <div className='cart-icon' >
                   <CartIcon className='shopping-icon' />
             </div>
                
             {
                 hidden ? null : <CartDropDown />
             }
             </div>
             
             </div>
        </HeaderContainer>
    )
}



const mapStateToProps = ({cart: {hidden}}) => ({
    hidden
    // itemCount: selectCartItemsCount(cartItems)
})


export default connect(mapStateToProps)(Header);