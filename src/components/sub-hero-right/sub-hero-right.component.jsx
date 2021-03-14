import React from 'react';
import { SubHeroContainer } from './sub-hero-right.styles';
import { Link } from 'react-router-dom';

const SubHeroRight = () => {
    return(
        <SubHeroContainer>
            
             <div className='image'></div>
                <div className='shop-left'>
                    <h2 className='shop-text'>
                        WOMENS NEW ARRIVAL
                    </h2>
                    <Link className='shop-link'>SHOP NOW</Link>
                </div>

            
        </SubHeroContainer>
    )
}

export default SubHeroRight;