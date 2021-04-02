import React from 'react';
import { TreyfoilContainer } from './modular-backpack.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {womenSections} from '../../redux/women-arrival/women-arrival.selector';
import CollectionItems from '../../components/collection-items/collection-items.component';



const ModularBackPackPage = ({sections}) => {
  console.log(sections)

      return ( 
           <TreyfoilContainer>
              <div className='left-side'>
                  {
                    sections.filter((item, id) => id === 6).map((section) => (
                      <CollectionItems key={section.id} section={section}/>
                    ))
                  }
              </div>

            </TreyfoilContainer>
             
      );
  };
  
  const mapStateToProps = createStructuredSelector({
    sections: womenSections
  })
  
 
  
  export default connect(mapStateToProps)(ModularBackPackPage);