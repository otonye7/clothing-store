import React from 'react';
import { TreyfoilContainer } from './women-sorel-out.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {sorelSections} from '../../redux/sorel-arrival/sorel-arrival.selector';
import CollectionItems from '../../components/collection-items/collection-items.component';



const WomenSorelOutPage = ({sections}) => {
      

      return ( 
           <TreyfoilContainer>
              <div className='left-side'>
                  {
                    sections.filter((item, id) => id === 2).map(({id, imageUrl}) => (
                      <CollectionItems key={id} imageUrl={imageUrl}/>
                    ))
                  }
              </div>

              <div className='right-side'>
                <div className='title'>
                  <h2 className='burgundy'>Womens Sorel Shoes</h2>
                  <span className='price'>210</span>
                  <h6 className='adidas'>by sorel</h6>
                  <h6 className='color'>Color: black</h6>

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
    sections: sorelSections
  })
  
 
  
  export default connect(mapStateToProps)(WomenSorelOutPage);