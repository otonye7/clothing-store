import React, {useState} from 'react';
import {  NewBalanceCategoriesContainer } from './new-balance-arrival-categories.styles';
import MenuItems from '../menu-items/menu-items.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {newBalanceSections} from '../../redux/new-balance-arrival/new-balance-arrival.selector';
import Refine from '../../components/refine/refine.component';
// import Color from '../../components/color/color.component';
import Brands from '../../components/brands-sidebar/brands-sidebar.component.jsx';




const  NewBalanceCategories = ({sections})  => {
   
    const [brand, setBrands] = useState('')
   
    const filterBrands = sections.filter(section => {
        return section.brands.includes(brand)
    })
  
    
         
  
       const handleChange = event => {
           setBrands(event.target.value)
      }
      
      return (
          <NewBalanceCategoriesContainer>
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
          </NewBalanceCategoriesContainer>
      )
  }
  
 const mapStateToProps = createStructuredSelector({
     sections: newBalanceSections
 })

export default connect(mapStateToProps)(NewBalanceCategories);