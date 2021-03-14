import React from 'react';
import { CollectiblesContainer } from './collectibles.styles';
import { Link } from 'react-router-dom';



const Collectibles = () => {
    return(
        <CollectiblesContainer>
                    
                        <h4 className='collectibles-arrival'>
                            COLLECTIBLES
                        </h4>
                    <Link className='nav-links'>
                          SHOP NOW
                     </Link>
                
            
        </CollectiblesContainer>
    )
}

export default Collectibles;