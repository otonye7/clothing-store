import React from 'react';
import { CollectionItemContainer } from './collection-items.styles';
import CustomButton from '../custom-button/custom-button.component';



const CollectionItems = ({imageUrl, title, price, description}) => {
  

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
            <br />
            <span className='price'>{price}</span>
            <br />
            <CustomButton>Add to cart</CustomButton>
            <br />
             <h4 className='description-title'>Description</h4>
             <br />
             <div className='margin'></div>
             <br />
            <span className='description'>{description}</span>
    </div>
    
   </CollectionItemContainer>
           
	)
}; 


export default CollectionItems;