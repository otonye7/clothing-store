import React from 'react';
import { StrapbackContainer } from './mens-adidas-originals-tri-color-strapback-hat-black.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {menSections} from '../../redux/men-arrival/men-arrival.selector';
import CollectionItems from '../../components/collection-items/collection-items.component';



const StrapbackPage = ({sections}) => {
  console.log(sections)

      return ( 
           <StrapbackContainer>
              <div className='left-side'>
                  {
                    sections.filter((item, id) => id === 1).map(({id, imageUrl}) => (
                      <CollectionItems key={id} imageUrl={imageUrl}/>
                    ))
                  }
              </div>

              <div className='right-side'>
                <div className='title'>
                  <h2 className='burgundy'>Men's adidas Originals Tri-Color Strapback Hat Black</h2>
                  <span className='price'>26</span>
                  <h6 className='adidas'>by adidas</h6>
                  <h6 className='color'>Color: Burgundy</h6>

                <div className='description'>
                  <h4 className='description-title'>Description</h4>
                  <span className='description-text'>
                         Complete your look with the adidas Tri-Color Strapback Hat.
                         The adidas hat features a tri-colored Trefoil in red, white,
                         and blue. The hat adjusts easily with the strapback closure
                         for the perfect, comfortable fit. Comes in black with six-panel
                         construction.
                  </span>
                </div>
                </div>
                
              </div>
            </StrapbackContainer>
             
      );
  };
  
  const mapStateToProps = createStructuredSelector({
    sections: menSections
  })
  
 
  
  export default connect(mapStateToProps)(StrapbackPage);