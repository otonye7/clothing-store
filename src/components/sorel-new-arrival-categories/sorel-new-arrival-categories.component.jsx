import React, {useState} from 'react';
import {  SorelCategoriesContainer } from './sorel-new-arrival-categories.styles';
import MenuItems from '../menu-items/menu-items.component';
import Refine from '../../components/refine/refine.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {sorelSections} from '../../redux/sorel-arrival/sorel-arrival.selector';
// import Color from '../../components/color/color.component';
import Brands from '../../components/brands-sidebar/brands-sidebar.component.jsx';




const SorelCategories = ({sections}) => {
    
    const [brand, setBrands] = useState('')
   
    const filterBrands = sections.filter(section => {
        return section.brands.includes(brand)
    })
  
    
         
  
       const handleChange = event => {
           setBrands(event.target.value)
      }
      
      return (
          <SorelCategoriesContainer>
              <div className='colors-items'>
                  <Refine />
                  {/* <Color /> */}
                  <Brands  sections={sections} filterBrands={filterBrands} handleChange={handleChange}/>
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
          </SorelCategoriesContainer>
      )
  }
   
	
 const mapStateToProps = createStructuredSelector({
     sections: sorelSections
 })


export default connect(mapStateToProps)(SorelCategories);