import React from 'react';
import { GazelleContainer } from './men-adidas-originals-gazelle-shoes-burgundy.styles';
import MenuItems from '../../components/menu-items/menu-items.component';

const GazellePage = ({match, id, title}) => {
    console.log(match.params.collectionId)
      return ( 
           <GazelleContainer>
              <div className='container'>
                  <MenuItems key={id} title={title}/>
              </div>
            </GazelleContainer>
             
      );
  }; 
  
  
  export default GazellePage;