import React from 'react';
import { TreyfoilContainer } from './timber-tan.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {menSections} from '../../redux/men-arrival/men-arrival.selector';
import CollectionItems from '../../components/collection-items/collection-items.component';



const TimberTanPage = ({sections}) => {
  console.log(sections)

      return ( 
           <TreyfoilContainer>
              <div className='left-side'>
                  {
                    sections.filter((item, id) => id === 10).map(({id, imageUrl}) => (
                      <CollectionItems key={id} imageUrl={imageUrl}/>
                    ))
                  }
              </div>

              <div className='right-side'>
                <div className='title'>
                  <h2 className='burgundy'>The north face 1996 retro nuptse jacket timber tan</h2>
                  <span className='price'>60</span>
                  <h6 className='adidas'>by the north face</h6>
                  <h6 className='color'>Color: Tan</h6>

                <div className='description'>
                  <h4 className='description-title'>Description</h4>
                  <span className='description-text'>
                        Keep life classic and simple with the adidas Trefoil Hoodie.
                        The everyday hoodie features a mini adidas Trefoil logo on the
                        chest with the favorite kangaroo pocket to store munchies.
                        Comes in dark grey 100% cotton French terry with a white Trefoil.
                        To help end plastic waste, adidas supports sustainable cotton farming
                        for all their cotton products.
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
  
 
  
  export default connect(mapStateToProps)(TimberTanPage);