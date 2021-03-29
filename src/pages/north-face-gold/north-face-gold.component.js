import React from 'react';
import { TreyfoilContainer } from './north-face-gold.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {menSections} from '../../redux/men-arrival/men-arrival.selector';
import CollectionItems from '../../components/collection-items/collection-items.component';
import RelatedProducts from '../../components/related-products/related-products.component';
import RelatedImages from '../../components/related-images/related-images.component';
import RecentlyViewed from '../../components/recently-viewed/recently-viewed.component';
import RecentlyViewedImages from '../../components/recently-viewed-images/recently-viewed-images.component';


const NorthfaceGoldPage = ({sections}) => {
  console.log(sections)

      return ( 
           <TreyfoilContainer>
              <div className='left-side'>
                  {
                    sections.filter((item, id) => id === 5).map((section) => (
                      <CollectionItems key={section.id} section={section}/>
                    ))
                  }
              </div>

              <br />
              <div className='related-products'>
                <RelatedProducts />
              </div>
              <br />
              <div className='related-images'>
                <RelatedImages />
              </div>
              <br />
              <div className='recently-viewed'>
                <RecentlyViewed />
              </div>
              <div className='recently-viewed-images'>
                <RecentlyViewedImages />
              </div>
            </TreyfoilContainer>
             
      );
  };
  
  const mapStateToProps = createStructuredSelector({
    sections: menSections
  })
  
 
  
  export default connect(mapStateToProps)(NorthfaceGoldPage);