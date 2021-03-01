import React from 'react';
import { MenCollectionsContainer } from './men-collections.styles';


const MenCollectionPage = ({match}) => {
    console.log(match.params.collectionsId)
      return ( 
           <MenCollectionsContainer>
              <div className='container'>
                  <h1>This is the men collections container</h1>
              </div>
            </MenCollectionsContainer>
             
      );
  }; 
  
  
  export default MenCollectionPage;