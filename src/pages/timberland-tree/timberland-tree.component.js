import React from 'react';
import { TreyfoilContainer } from './timberland-tree.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {menSections} from '../../redux/men-arrival/men-arrival.selector';
import CollectionItems from '../../components/collection-items/collection-items.component';



const TimberlandTreePage = ({sections}) => {
  console.log(sections)

      return ( 
           <TreyfoilContainer>
              <div className='left-side'>
                  {
                    sections.filter((item, id) => id === 8).map(({id, imageUrl}) => (
                      <CollectionItems key={id} imageUrl={imageUrl}/>
                    ))
                  }
              </div>

              <div className='right-side'>
                <div className='title'>
                  <h2 className='burgundy'>Men's Timberland Tree Logo Hoodie Wheat</h2>
                  <span className='price'>60</span>
                  <h6 className='adidas'>by timberland</h6>
                  <h6 className='color'>Color: brown</h6>

                <div className='description'>
                  <h4 className='description-title'>Description</h4>
                  <span className='description-text'>
                       Add to your collection of hoodies with the Timberland Tree Logo Hoodie.
                       The iconic Timberland tree is planted front and center on the chest.
                       The kangaroo pocket will store any essentials and keep hands warm.
                       You'll love the brushed fabric on the inside that provides extra softness 
                       and warmth. The Timberland hoodie comes in Wheat.
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
  
 
  
  export default connect(mapStateToProps)(TimberlandTreePage);