import React from 'react';
import { RelatedProductContainer } from './recently-viewed.styles';



const RecentleViewed = () => {

	return ( 
         <RelatedProductContainer>
             <div className='related-products'>
                 <h2 className='related-title'>Recently Viewed</h2>
                 <h2 className='related'>Swipe right to see more</h2>
             </div>
           
        </RelatedProductContainer>
           
	);
}; 

export default RecentleViewed;
