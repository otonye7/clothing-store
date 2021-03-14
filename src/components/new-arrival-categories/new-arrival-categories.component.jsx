import React from 'react';
import {  MenCategoriesContainer } from './new-arrival-categories.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {newSections} from '../../redux/new-arrival/new-arrival.selector';
import MenuItems from '../menu-items/menu-items.component';
import Refine from '../../components/refine/refine.component';
import Color from '../../components/color/color.component';
import Brands from '../../components/brands-sidebar/brands-sidebar.component.jsx';


const NewCategories = ({sections}) => {
    
    return (
        <MenCategoriesContainer >
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
        </MenCategoriesContainer>
    )
}
  
  
const mapStateToProps = createStructuredSelector({
   sections: newSections
})


export default connect(mapStateToProps)(NewCategories);