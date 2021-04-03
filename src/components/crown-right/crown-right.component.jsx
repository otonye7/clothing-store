import React from 'react';
import { SubHeroContainer } from './crown-right.styles';
import { Link } from 'react-router-dom';

const CrownRight = () => {
    return(
        <SubHeroContainer>
            
             <div className='image'></div>
                <div className='shop-left'>
                    <div className='container'>
                       <h2 className='shop-text'>
                          Columbia
                       </h2>
                       <br />
                     <div className='link'>
                       <Link to='/columbia' className='shop-link'>SHOP NOW</Link>
                    </div>
                    </div>
                    
                </div>

            
        </SubHeroContainer>
    )
}

export default CrownRight;