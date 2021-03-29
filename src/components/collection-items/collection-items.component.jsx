import React from 'react';
import { CollectionItemContainer } from './collection-items.styles';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';




const CollectionItems = ({section, addItem}) => {
  const { title, price, imageUrl, description } = section;
  console.log(section)
  

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
            <CustomButton onClick={() => addItem(section)}className='button'>Add to cart</CustomButton>
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
  addItem: section => dispatch(addItem(section))
})




export default connect(null, mapDispatchToProps)(CollectionItems);