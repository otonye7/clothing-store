import React, {useState} from 'react';
import {  RomanticCrownCategoriesContainer } from './sales-categories.styles';
import MenuItems from '../menu-items/menu-items.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {SalesSections} from '../../redux/sales/sales.selector';
import Refine from '../../components/refine/refine.component';
// import Color from '../../components/color/color.component';
import Brands from '../../components/brands-sidebar/brands-sidebar.component.jsx';




const SalesCategories = ({sections})  => {

    const [brand, setBrands] = useState('')
   
    const filterBrands = sections.filter(section => {
        return section.brands.includes(brand)
    })
  
    
         
  
       const handleChange = event => {
           setBrands(event.target.value)
      }
    
      
      return (
          <RomanticCrownCategoriesContainer>
              <div className='colors-items'>
                  <Refine />
                  {/* <Color  /> */}
                  <Brands sections={sections} filterBrands={filterBrands} handleChange={handleChange}/>
              </div>
              
              <div className='categories-items'>
                  <div className='preview'>
                  {
                          filterBrands.map(({id, ...otherSectionProps}) => (
                              <MenuItems key={id} {...otherSectionProps}/>
                          ))
                      }
                  </div>
              </div>
          </RomanticCrownCategoriesContainer>
      )
  }
    
	
  const mapStateToProps = createStructuredSelector({
    sections: SalesSections
})


export default connect(mapStateToProps)(SalesCategories);