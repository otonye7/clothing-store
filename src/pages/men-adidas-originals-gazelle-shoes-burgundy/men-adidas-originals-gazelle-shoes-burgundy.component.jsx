import React from 'react';
import { GazelleContainer } from './men-adidas-originals-gazelle-shoes-burgundy.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {menSections} from '../../redux/men-arrival/men-arrival.selector';
import CollectionItems from '../../components/collection-items/collection-items.component';



const GazellePage = ({sections}) => {
  console.log(sections)

      return ( 
           <GazelleContainer>
              <div className='left-side'>
                  {
                    sections.filter((item, id) => id < 1).map(({id, imageUrl}) => (
                      <CollectionItems key={id} imageUrl={imageUrl}/>
                    ))
                  }
              </div>

              <div className='right-side'>
                <div className='title'>
                  <h2 className='burgundy'>Men's adidas Originals Gazelle Shoes Burgundy</h2>
                  <span className='price'>80</span>
                  <h6 className='adidas'>by adidas</h6>
                  <h6 className='color'>Color: Burgundy</h6>

                <div className='description'>
                  <h4 className='description-title'>Description</h4>
                  <span className='description-text'>
                       Your favorite adidas Gazelles are built with a premium Collegiate Burgundy suede
                       upper with contrasting white adidas details. They're kissed with touches of gold
                       on the sides via the Gazelle stamp.
                  </span>
                </div>
                </div>
                
              </div>
            </GazelleContainer>
             
      );
  };
  
  const mapStateToProps = createStructuredSelector({
    sections: menSections
  })
  
 
  
  export default connect(mapStateToProps)(GazellePage);