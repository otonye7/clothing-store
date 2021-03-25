import React from 'react';
import { HeaderContainer } from './header.styles';
import { connect } from 'react-redux';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import PersonIcon from '@material-ui/icons/Person';
import {auth} from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';



const Header = ({currentUser, hidden, toggleCartHidden}) => {

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
                <div className='cart-icon' onClick={toggleCartHidden}>
                   <ShoppingIcon className='shopping-icon' />
                <span className='item-count'>0</span>
             </div>
             {
                 hidden ? null : <CartDropDown />
             }
             </div>
             
             </div>
        </HeaderContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({cart: {hidden}}) => ({
    hidden
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);