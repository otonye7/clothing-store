import React  from 'react';
import {  MenCategoriesContainer } from './men-arrival-categories.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {menSections, filteredBrands} from '../../redux/men-arrival/men-arrival.selector';
import MenuItems from '../menu-items/menu-items.component';
import Refine from '../../components/refine/refine.component';
import Color from '../../components/color/color.component';
import Brands from '../../components/brands-sidebar/brands-sidebar.component.jsx';



const MenCategories = ({sections, filterSections}) => {
    console.log(filterSections)

    
      return (
          <MenCategoriesContainer >
               <div className='colors-items'>
                  <Refine />
                  <Color filterSections={filterSections}/>
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
          </MenCategoriesContainer>
      )
  }
    
	
 const mapStateToProps = createStructuredSelector({
     sections: menSections,
     filterSections: filteredBrands
 })


export default connect(mapStateToProps)(MenCategories);