import React from 'react';
import { TreyfoilContainer } from './women-new-balance-five.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {womenSections} from '../../redux/women-arrival/women-arrival.selector';
import CollectionItems from '../../components/collection-items/collection-items.component';



const NewBalanceFivePage = ({sections}) => {
  console.log(sections)

      return ( 
           <TreyfoilContainer>
              <div className='left-side'>
                  {
                    sections.filter((item, id) => id === 0).map(({id, imageUrl}) => (
                      <CollectionItems key={id} imageUrl={imageUrl}/>
                    ))
                  }
              </div>

              <div className='right-side'>
                <div className='title'>
                  <h2 className='burgundy'>WOMENS NEW BALANCE 574 SHOES WHITE</h2>
                  <span className='price'>210</span>
                  <h6 className='adidas'>by new balance</h6>
                  <h6 className='color'>Color: White</h6>

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
    sections: womenSections
  })
  
 
  
  export default connect(mapStateToProps)(NewBalanceFivePage);