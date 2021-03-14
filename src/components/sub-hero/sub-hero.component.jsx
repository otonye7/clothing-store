import React from 'react';
import { SubHeroContainer } from './sub-hero.styles';
import { Link } from 'react-router-dom';

const SubHero = () => {
    return(
        <SubHeroContainer>
            
             <div className='image'></div>
                <div className='shop-left'>
                    <h2 className='shop-text'>
                        MENS NEW ARRIVAL
                    </h2>
                    <Link to='/men-new-arrival' className='shop-link'>SHOP NOW</Link>
                </div>

            
        </SubHeroContainer>
    )
}

export default SubHero;