import React from 'react';
import { SubHeroContainer } from './crown.styles';
import { Link } from 'react-router-dom';

const Crown = () => {
    return(
        <SubHeroContainer>
            
             <div className='image'></div>
                <div className='shop-left'>
                <div className='container'>
                    <h2 className='shop-text'>
                        ROMANTIC CROWN
                    </h2>
                <div className='link'>
                    <Link to='/romantic-crown' className='shop-link'>SHOP NOW</Link>
               </div>
               </div>
                
                </div>

            
        </SubHeroContainer>
    )
}

export default Crown;