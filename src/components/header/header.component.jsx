import React from 'react';
import { HeaderContainer } from './header.styles';
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


const Header = () => {
    return(
        <HeaderContainer>
            <div className='overall-container'>
             <div className='logo'>
                 <h3 className='logo-name'>S^MO SPORTS</h3>
             </div>

             <div className='cart-containers'>
                 <ShoppingIcon className='shopping-icon' />
             </div>

             </div>
        </HeaderContainer>
    )
}

export default Header;