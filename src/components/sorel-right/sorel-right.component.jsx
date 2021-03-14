import React from 'react';
import { SubHeroContainer } from './sorel-right.styles';
import { Link } from 'react-router-dom';

const SubHero = () => {
    return(
        <SubHeroContainer>
            
             <div className='image'></div>
                <div className='shop-left'>
                    <h2 className='shop-text'>
                        NEW BALANCE
                    </h2>
                    <Link to='/new-balance-arrival' className='shop-link'>SHOP NOW</Link>
                </div>

            
        </SubHeroContainer>
    )
}

export default SubHero;