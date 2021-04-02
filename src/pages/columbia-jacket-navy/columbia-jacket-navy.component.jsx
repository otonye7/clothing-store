import React from 'react';
import { TreyfoilContainer } from './columbia-jacket-navy.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {columbiaSections} from '../../redux/columbia-arrival/columbia-arrival.selector';
import CollectionItems from '../../components/collection-items/collection-items.component';



const ColumbiaJacketNavyPage = ({sections}) => {
  console.log(sections)

      return ( 
           <TreyfoilContainer>
              <div className='left-side'>
                  {
                    sections.filter((item, id) => id === 2).map((section) => (
                      <CollectionItems key={section.id} section={section}/>
                    ))
                  }
              </div>

            </TreyfoilContainer>
             
      );
  };
  
  const mapStateToProps = createStructuredSelector({
    sections: columbiaSections
  })
  
 
  
  export default connect(mapStateToProps)(ColumbiaJacketNavyPage);