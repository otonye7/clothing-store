import React from 'react';
import { CollectiblesContainer } from './collectibles.styles';
import { Link } from 'react-router-dom';
import Collectibless from  '../../assets/collectibles.jpg';


const Collectibles = () => {
    return(
        <CollectiblesContainer>
              <div className='collectibles-container'>
                    <div className='collectibles-text'>
                        <h4 className='collectibles-arrival'>
                            COLLECTIBLES
                        </h4>
                    <Link className='nav-links'>
                          SHOP NOW
                     </Link>
                </div>

                <div className='collection-photo'>
                    <img src={Collectibless} alt="" />
                </div>
            </div>
        </CollectiblesContainer>
    )
}

export default Collectibles;