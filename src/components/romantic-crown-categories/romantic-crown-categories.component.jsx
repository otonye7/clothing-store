import React from 'react';
import {  RomanticCrownCategoriesContainer } from './romantic-crown-categories.styles';
import MenuItems from '../menu-items/menu-items.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {romanticCrownSections} from '../../redux/romantic-crown-arrival/romantic-crown-arrival.selector';
import Refine from '../../components/refine/refine.component';
import Color from '../../components/color/color.component';
import Brands from '../../components/brands-sidebar/brands-sidebar.component.jsx';




const RomanticCrownCategories = ({sections})  => {
    
      
      return (
          <RomanticCrownCategoriesContainer>
              <div className='colors-items'>
                  <Refine />
                  <Color  />
                  <Brands />
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
          </RomanticCrownCategoriesContainer>
      )
  }
    
	
  const mapStateToProps = createStructuredSelector({
    sections: romanticCrownSections
})


export default connect(mapStateToProps)(RomanticCrownCategories);