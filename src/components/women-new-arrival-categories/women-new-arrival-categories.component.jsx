import React, {useState} from 'react';
import {  WomenCategoriesContainer } from './women-new-arrival-categories.styles';
import MenuItems from '../menu-items/menu-items.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {womenSections} from '../../redux/women-arrival/women-arrival.selector';
import Refine from '../../components/refine/refine.component';
// import Color from '../../components/color/color.component';
import Brands from '../../components/brands-sidebar/brands-sidebar.component.jsx';




const WomenCategories = ({sections}) => {
    const [brand, setBrands] = useState('')
   
    const filterBrands = sections.filter(section => {
        return section.brands.includes(brand)
    })
  
    
         
  
       const handleChange = event => {
           setBrands(event.target.value)
      }

      return (
          <WomenCategoriesContainer>
              <div className='colors-items'>
                  <Refine />
                  {/* <Color /> */}
                  <Brands sections={sections} filterBrands={filterBrands} handleChange={handleChange}/>
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
          </WomenCategoriesContainer>
      )
  }
    
	
 const mapStateToProps = createStructuredSelector({
     sections: womenSections
 })


export default connect(mapStateToProps)(WomenCategories);