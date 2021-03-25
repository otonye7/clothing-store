import React from 'react';
import {  MenCategoriesContainer } from './women-collection-categories.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {WomenCollections} from '../../redux/women/women.selector';
import MenuItems from '../menu-items/menu-items.component';
import Refine from '../refine/refine.component';
import Color from '../color/color.component';
import Brands from '../brands-sidebar/brands-sidebar.component.jsx';


const WomenCollectionsCategories = ({sections}) => {
    
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
   sections: WomenCollections
})


export default connect(mapStateToProps)(WomenCollectionsCategories);