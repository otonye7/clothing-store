import React from 'react';
import { SubHeroContainer } from './sub-hero.styles';
import { Link } from 'react-router-dom';

const SubHero = () => {
    return(
        <SubHeroContainer>
            
             <div className='image'></div>
                <div className='shop-left'>
                    <div className='container'>
                    <h2 className='shop-text'>
                        MENS NEW ARRIVAL
                    </h2>

                    <div className='link'>
                      <Link to='/men-new-arrival' className='shop-link'>SHOP NOW</Link>
                    </div>
                    
                    </div>
                </div>

            
        </SubHeroContainer>
    )
}

export default SubHero;