import React from 'react';
import { CollectiblesContainer } from './collectibles.styles';
import { Link } from 'react-router-dom';



const Collectibles = () => {
    return(
        <CollectiblesContainer>
                    <div className='container'>
                        <h4 className='collectibles-arrival'>
                            COLLECTIBLES
                        </h4>
                        <br />
                    <Link className='nav-links'>
                          SHOP NOW
                     </Link>
                 </div>
            
        </CollectiblesContainer>
    )
}

export default Collectibles;