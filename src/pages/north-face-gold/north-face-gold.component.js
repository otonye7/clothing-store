import React from 'react';
import { TreyfoilContainer } from './north-face-gold.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {menSections} from '../../redux/men-arrival/men-arrival.selector';
import CollectionItems from '../../components/collection-items/collection-items.component';



const NorthfaceGoldPage = ({sections}) => {
  console.log(sections)

      return ( 
           <TreyfoilContainer>
              <div className='left-side'>
                  {
                    sections.filter((item, id) => id === 5).map(({id, imageUrl}) => (
                      <CollectionItems key={id} imageUrl={imageUrl}/>
                    ))
                  }
              </div>

              <div className='right-side'>
                <div className='title'>
                  <h2 className='burgundy'>Men's The North Face 1996 Retro Nuptse Jacket Summit Gold</h2>
                  <span className='price'>279</span>
                  <h6 className='adidas'>by north face</h6>
                  <h6 className='color'>Color: Gold</h6>

                <div className='description'>
                  <h4 className='description-title'>Description</h4>
                  <span className='description-text'>
                       Gear up for the season with the Men's North Face 1996 Retro Nuptse Jacket.
                       Designed for everyday wear, the iconic North Face jacket is insulated with
                       goose-down and is packable into itself. The retro Nuptse jacket has a boxy silhouette,
                       original shiny ripstop fabric, iconic oversize baffles and a stowable hood that will keep
                       you warm and dry when Mother Nature is at her worst. The North Face jacket comes in Summit
                       Gold and Black.
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
  
 
  
  export default connect(mapStateToProps)(NorthfaceGoldPage);