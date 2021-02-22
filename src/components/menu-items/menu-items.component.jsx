import React from 'react';
import { MenuItemContainer } from './menu-items.styles';


const MenuItems = ({title, imageUrl, price, color}) => {

return ( 
    <MenuItemContainer>
    <div className='menu-items' >
      <div className='background-image' style = {{
        backgroundImage: `url(${imageUrl})`
    }} >

    </div>  
    </div>

    <div className='content'>
            <span className='title'>{title}</span>
            <span className='price'>{price}</span>
        </div>
   </MenuItemContainer>
           
	)
}; 


export default MenuItems;