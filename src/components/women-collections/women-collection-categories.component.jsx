import React, {useState} from 'react';
import {  MenCategoriesContainer } from './women-collection-categories.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {WomenCollections} from '../../redux/women/women.selector';
import MenuItems from '../menu-items/menu-items.component';
import Refine from '../refine/refine.component';
// import Color from '../color/color.component';
import Brands from '../brands-sidebar/brands-sidebar.component.jsx';


const WomenCollectionsCategories = ({sections}) => {

    const [brand, setBrands] = useState('')
   
    const filterBrands = sections.filter(section => {
        return section.brands.includes(brand)
    })
  
    
         
  
       const handleChange = event => {
           setBrands(event.target.value)
      }
    
    return (
        <MenCategoriesContainer >
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
        </MenCategoriesContainer>
    )
}
  
  
const mapStateToProps = createStructuredSelector({
   sections: WomenCollections
})


export default connect(mapStateToProps)(WomenCollectionsCategories);