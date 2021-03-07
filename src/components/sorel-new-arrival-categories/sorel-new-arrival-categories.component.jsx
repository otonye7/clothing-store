import React from 'react';
import {  SorelCategoriesContainer } from './sorel-new-arrival-categories.styles';
import MenuItems from '../menu-items/menu-items.component';
import Refine from '../../components/refine/refine.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {sorelSections} from '../../redux/sorel-arrival/sorel-arrival.selector';
import Color from '../../components/color/color.component';
import Brands from '../../components/brands-sidebar/brands-sidebar.component.jsx';




const SorelCategories = ({sections}) => {
    
      
      return (
          <SorelCategoriesContainer>
              <div className='colors-items'>
                  <Refine />
                  <Color />
                  <Brands  />
              </div>
              
              <div className='categories-items'>
                  <div className='preview'>
                  {
                          sections.map(({id, ...otherSectionProps}) => (
                              <MenuItems key={id} {...otherSectionProps}/>
                          ))
                      }
                  </div>
              </div>
          </SorelCategoriesContainer>
      )
  }
   
	
 const mapStateToProps = createStructuredSelector({
     sections: sorelSections
 })


export default connect(mapStateToProps)(SorelCategories);