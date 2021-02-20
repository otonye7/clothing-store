import React from 'react';
import { MenuItemContainer } from './men-new-arrival.styles';


const MenuItem = () => {

	return ( 
         <MenuItemContainer>
             <div className='menu-items'>
               <div className='background-image' style= {{
                   backgroundImage: `url(${''})`
               }}>

               </div>
            </div>

            <div className='contents'>
                <span className='title'></span>
                <span className='price'></span>
            </div>
            </MenuItemContainer>
           
	);
}; 


export default MenuItem;