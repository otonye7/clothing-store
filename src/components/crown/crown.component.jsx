import React from 'react';
import { SubHeroContainer } from './crown.styles';
import { Link } from 'react-router-dom';

const Crown = () => {
    return(
        <SubHeroContainer>
            
             <div className='image'></div>
                <div className='shop-left'>
                    <h2 className='shop-text'>
                        ROMANTIC CROWN
                    </h2>
                    <Link to='/romantic-crown' className='shop-link'>SHOP NOW</Link>
                </div>

            
        </SubHeroContainer>
    )
}

export default Crown;