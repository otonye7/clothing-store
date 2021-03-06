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
                        Men's New Arrival
                    </h2>
                    <br />
                    <div className='link'>
                      <Link to='/men-new-arrival' className='shop-link'>SHOP NOW</Link>
                    </div>
                    
                    </div>
                </div>

                <div className='up'>
                    <div className='link'>
                      <span className='link'>MEN ADIDAS ORIGINALS SUPERSTAR SHOES <br /> $90</span>
                    </div>
                </div>

            
        </SubHeroContainer>
    )
}

export default SubHero;