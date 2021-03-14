import React from 'react';
import { HeroContainer } from './hero.styles';



const SubHeader = () => {
    return(
        <HeroContainer>
            <div className='image'></div>
                <div className='shop-left'>
                    <h2 className='shop-text'>
                        NIKE BOOTS
                    </h2>
                    <button className='shop-link'>SHOP NOW</button>
                </div>
        </HeroContainer>
    )
}

export default SubHeader;