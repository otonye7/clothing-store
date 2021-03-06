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
                        Romantic Crown
                    </h2>
                    <br />
                <div className='link'>
                    <Link to='/romantic-crown' className='shop-link'>SHOP NOW</Link>
               </div>
               </div>
                
                </div>


                 <div className='up'>
                    <div className='link'>
                      <span className='link'>CROWN ORIGINALS SUPERSTAR CLOTHES <br /> $90</span>
                    </div>
                </div>

            
        </SubHeroContainer>
    )
}

export default Crown;