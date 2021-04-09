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
                    <span className='shop-link'>Available 4/10 at 9:00 AM CDT</span>
                </div>
        </HeroContainer>
    )
}

export default SubHeader;