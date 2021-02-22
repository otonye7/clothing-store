import React from 'react';
import { HeaderContainer } from './header.styles';
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


const Header = () => {
    return(
        <HeaderContainer>
            <div className='overall-container'>
             <div className='logo'>
                 <h2 className='logo-name'>S^MO SPORTS</h2>
             </div>

             <div className='cart-containers'>
                 <ShoppingIcon className='shopping-icon' />
             </div>

             </div>
        </HeaderContainer>
    )
}

export default Header;