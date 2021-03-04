import React from 'react';
import { CollectionItemContainer } from './collection-items.styles';
import CustomButton from '../custom-button/custom-button.component';



const CollectionItems = ({imageUrl, title, price}) => {
  

return ( 
    <CollectionItemContainer>
    <div className='menu-items'>
      <div className='background-image' style = {{
        backgroundImage: `url(${imageUrl})`
    }} >

    </div>  
    </div>

    <div className='content'>
            <span className='title'>{title}</span>
            <span className='price'>{price}</span>
    </div>
    <CustomButton>Add to cart</CustomButton>
    
   </CollectionItemContainer>
           
	)
}; 


export default CollectionItems;