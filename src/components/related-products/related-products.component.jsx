import React from 'react';
import { RelatedProductContainer } from './related-products.styles';



const RelatedProducts = () => {

	return ( 
         <RelatedProductContainer>
             <div className='related-products'>
                 <h2 className='related-title'>Related Products</h2>
                 <h2 className='related'>Swipe right to see more</h2>
             </div>
           
        </RelatedProductContainer>
           
	);
}; 


export default RelatedProducts;