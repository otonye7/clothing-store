import React from 'react';
import {  ColumbiaCategoriesContainer } from './columbia-categories.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {columbiaSections} from '../../redux/columbia-arrival/columbia-arrival.selector';
import MenuItems from '../menu-items/menu-items.component';
import Refine from '../../components/refine/refine.component';
import Color from '../../components/color/color.component';
import Brands from '../../components/brands-sidebar/brands-sidebar.component.jsx';




const ColumbiaCategories = ({sections})  => {
      
      return (
          <ColumbiaCategoriesContainer>
              <div className='colors-items'>
                  <Refine />
                  <Color />
                  <Brands />
              </div>
              
              <div className='categories-items'>
                  <div className='preview'>
                  {   
                          sections.map(({id,  ...otherSectionProps}) =>  (
                            <MenuItems key={id}  {...otherSectionProps}/>
                          )) 

                      }
                  </div>
              </div>
          </ColumbiaCategoriesContainer>
      )
  }

const mapStateToProps = createStructuredSelector({
    sections: columbiaSections
})

export default connect(mapStateToProps)(ColumbiaCategories);