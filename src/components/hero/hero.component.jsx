import React from 'react';
import { HeroContainer } from './hero.styles';
import Nike from  '../../assets/Nike-Roshe.jpg';


const SubHeader = () => {
    return(
        <HeroContainer>
            <div className='hero-container'>
                <div className='cover-photo'>
                    <img src={Nike} alt="" />
                </div>

                <div className='hero-text'>
                    <h4 className='jordan'>
                        NIKE BOOTS
                    </h4>
                <div className='buttons'>
                    <button>SHOP NOW</button>
                </div>
                </div>
            </div>
        </HeroContainer>
    )
}

export default SubHeader;