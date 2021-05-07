import React from 'react';
import { CollectionItemContainer } from './collection-items.styles';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';




const CollectionItems = ({section, addItem, itemCount}) => {
  const { title, price, imageUrl, description, brands, color } = section;
  // console.log(section)
  

return ( 
    <CollectionItemContainer>
  <div className='o-container'>
    <div className='menu-items'>
      <div className='background-image' style = {{
        backgroundImage: `url(${imageUrl})`
    }} >

    </div>
   
    </div>

    <div className='content'>
            <span className='title'>{title}</span>
            <span className='price'>${price}</span>
            <br />
            <span className='by'>by {brands}</span>
            <br />
            <span className='by'>color - {color}</span>
            <br />
            <div className='box-container'>
              <div className='border-box'>
                Quantity: <br />
                {itemCount}
              </div>
            </div>
            <br />
            <CustomButton onClick={() => addItem(section)}className='button'>Add to cart</CustomButton>
            <br />
            <br />
             <h4 className='description-title'>Description</h4>
             <div className='margin'></div>
             <br />
             <br />
            <span className='description'>{description}</span>
    </div>
   </div> 
   </CollectionItemContainer>
           
	)
}; 

const mapDispatchToProps = dispatch => ({
  addItem: section => dispatch(addItem(section))
})

const mapStateToProps = (state) =>  ({
  itemCount: selectCartItemsCount(state)
})




export default connect(mapStateToProps, mapDispatchToProps)(CollectionItems);