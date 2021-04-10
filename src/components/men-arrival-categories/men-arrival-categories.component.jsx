import React  from 'react';
import {  MenCategoriesContainer } from './men-arrival-categories.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {menSections} from '../../redux/men-arrival/men-arrival.selector';
import MenuItems from '../menu-items/menu-items.component';
import Refine from '../../components/refine/refine.component';
import Color from '../../components/color/color.component';
import Brands from '../../components/brands-sidebar/brands-sidebar.component.jsx';



const MenCategories = ({sections}) => {
  console.log(sections)

     const filterBrands = sections.filter(section => section.brands === 'ADIDAS')
    
      return (
          <MenCategoriesContainer >
               <div className='colors-items'>
                  <Refine />
                  <Color/>
                  <Brands  sections={sections} filterBrands={filterBrands}/>
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
          </MenCategoriesContainer>
      )
  }
    
	
 const mapStateToProps = createStructuredSelector({
     sections: menSections,
 })



export default connect(mapStateToProps)(MenCategories);