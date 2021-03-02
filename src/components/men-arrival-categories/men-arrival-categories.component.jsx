import React from 'react';
import {  MenCategoriesContainer } from './men-arrival-categories.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {menSection} from '../../redux/men-arrival/men-arrival.selector';
import MenuItems from '../menu-items/menu-items.component';
import Refine from '../../components/refine/refine.component';
import Color from '../../components/color/color.component';
import Brands from '../../components/brands-sidebar/brands-sidebar.component.jsx';



const MenCategories = ({sections}) => {
    
      return (
          <MenCategoriesContainer >
              <div className='colors-items'>
                  <Refine />
                  <Color />
                  <Brands />
              </div>
              
              <div className='categories-items'>
                  
                  <div className='preview'>

                      {   
                          sections.map(({id, title, price, imageUrl, color}) =>  (
                            <MenuItems key={id} title={title} price={price} imageUrl={imageUrl} color={color}/>
                          )) 

                      }
                  </div>
              </div>
          </MenCategoriesContainer>
      )
  }
    
	
 const mapStateToProps = createStructuredSelector({
     sections: menSection
 })


export default connect(mapStateToProps)(MenCategories);