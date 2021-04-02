import React from 'react';
import { TreyfoilContainer } from './columbia-windbreaker.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {columbiaSections} from '../../redux/columbia-arrival/columbia-arrival.selector';
import CollectionItems from '../../components/collection-items/collection-items.component';



const ColumbiaWindBreakerPage = ({sections}) => {
  console.log(sections)

      return ( 
           <TreyfoilContainer>
              <div className='left-side'>
                  {
                    sections.filter((item, id) => id === 3).map((section) => (
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
  
 
  
  export default connect(mapStateToProps)(ColumbiaWindBreakerPage);