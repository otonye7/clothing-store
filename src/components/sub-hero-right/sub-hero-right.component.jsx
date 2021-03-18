import React from 'react';
import { SubHeroContainer } from './sub-hero-right.styles';
import { Link } from 'react-router-dom';

const SubHeroRight = () => {
    return(
        <SubHeroContainer>
            
             <div className='image'></div>
                <div className='shop-left'>
                    <div className='container'>
                    <h2 className='shop-text'>
                        WOMENS NEW ARRIVAL
                    </h2>
                    <div className='link'>
                      <Link to='/women-new-arrival' className='shop-link'>SHOP NOW</Link>
                    </div>
                    </div>
                </div>

            
        </SubHeroContainer>
    )
}

export default SubHeroRight;