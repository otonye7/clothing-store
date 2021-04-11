import React, {useState}  from 'react';
import {  MenCategoriesContainer } from './men-collection-categories.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {menCollections} from '../../redux/men/men.selector';
import MenuItems from '../menu-items/menu-items.component';
import Refine from '../../components/refine/refine.component';
// import Color from '../../components/color/color.component';
import Brands from '../../components/brands-sidebar/brands-sidebar.component.jsx';


const MenCollectionsCategories = ({sections}) => {

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
   sections: menCollections
})


export default connect(mapStateToProps)(MenCollectionsCategories);