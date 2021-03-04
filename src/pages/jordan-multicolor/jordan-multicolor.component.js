import React from 'react';
import { TreyfoilContainer } from './jordan-multicolor.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {menSections} from '../../redux/men-arrival/men-arrival.selector';
import CollectionItems from '../../components/collection-items/collection-items.component';



const JordanMulticolorPage = ({sections}) => {
  console.log(sections)

      return ( 
           <TreyfoilContainer>
              <div className='left-side'>
                  {
                    sections.filter((item, id) => id === 4).map(({id, imageUrl}) => (
                      <CollectionItems key={id} imageUrl={imageUrl}/>
                    ))
                  }
              </div>

              <div className='right-side'>
                <div className='title'>
                  <h2 className='burgundy'>Men's Jordan Delta Breathe Multicolor</h2>
                  <span className='price'>130</span>
                  <h6 className='adidas'>by jordan</h6>
                  <h6 className='color'>Color: Multicolor</h6>

                <div className='description'>
                  <h4 className='description-title'>Description</h4>
                  <span className='description-text'>
                       Everyday comfort with a fearless attitude. Inspired by high-tech functionality
                       and handmade craftsmanship, the Jordan Delta Breathe combines natural and synthetic
                       materials. The result is a lifestyle shoe that's lightweight, breathable and comfortable all day.
                       The layered mix of diverse elements creates a distinct look and feel with subtle nods to Jordan DNA.
                       Nike React foam offers responsive cushioning on the move.
                  </span>
                </div>
                </div>
                
              </div>
            </TreyfoilContainer>
             
      );
  };
  
  const mapStateToProps = createStructuredSelector({
    sections: menSections
  })
  
 
  
  export default connect(mapStateToProps)(JordanMulticolorPage);