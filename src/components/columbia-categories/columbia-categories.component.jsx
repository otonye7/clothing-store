import React, {useState} from 'react';
import {  ColumbiaCategoriesContainer } from './columbia-categories.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {columbiaSections} from '../../redux/columbia-arrival/columbia-arrival.selector';
import MenuItems from '../menu-items/menu-items.component';
import Refine from '../../components/refine/refine.component';
// import Color from '../../components/color/color.component';
import Brands from '../../components/brands-sidebar/brands-sidebar.component.jsx';




const ColumbiaCategories = ({sections})  => {

    const [brand, setBrands] = useState('')
   
    const filterBrands = sections.filter(section => {
        return section.brands.includes(brand)
    })
  
    
         
  
       const handleChange = event => {
           setBrands(event.target.value)
      }
      
      return (
          <ColumbiaCategoriesContainer>
              <div className='colors-items'>
                  <Refine />
                  {/* <Color /> */}
                  <Brands sections={sections} filterBrands={filterBrands} handleChange={handleChange}/>
              </div>
              
              <div className='categories-items'>
                  <div className='preview'>
                  {   
                         filterBrands.map(({id,  ...otherSectionProps}) =>  (
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