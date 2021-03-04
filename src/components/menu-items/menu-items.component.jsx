import React from 'react';
import { MenuItemContainer } from './menu-items.styles';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


const MenuItems = ({title, imageUrl, color, history, price, match, linkUrl}) => {
  

return ( 
    <MenuItemContainer>
    <div className='menu-items' onClick={() => history.push(`${match.url}${linkUrl}`)}>
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


export default withRouter(MenuItems);