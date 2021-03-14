import React from 'react';
import { SubHeroContainer } from './crown-right.styles';
import { Link } from 'react-router-dom';

const CrownRight = () => {
    return(
        <SubHeroContainer>
            
             <div className='image'></div>
                <div className='shop-left'>
                    <h2 className='shop-text'>
                        COLUMBIA
                    </h2>
                    <Link to='/columbia' className='shop-link'>SHOP NOW</Link>
                </div>

            
        </SubHeroContainer>
    )
}

export default CrownRight;