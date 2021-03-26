import React from 'react';
import { CollectionItemContainer } from './collection-items.styles';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';




const CollectionItems = ({imageUrl, title, price, description, addItem}) => {
  
  

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
            <br />
            <CustomButton onClick={() => addItem({title, imageUrl, price})}className='button'>Add to cart</CustomButton>
            <br />
            <br />
             <h4 className='description-title'>Description</h4>
             <br />
             <br />
             <div className='margin'></div>
             <br />
             <br />
            <span className='description'>{description}</span>
    </div>
    
   </CollectionItemContainer>
           
	)
}; 

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(CollectionItems);