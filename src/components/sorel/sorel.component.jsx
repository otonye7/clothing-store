import React from 'react';
import { SubHeroContainer } from './sorel.styles';
import { Link } from 'react-router-dom';

const SubHero = () => {
    return(
        <SubHeroContainer>
            
             <div className='image'></div>
                <div className='shop-left'>
                <div className='container'>
                    <h2 className='shop-text'>
                        Sorel
                    </h2>
                    <br />
                <div className='link'>
                    <Link to='/sorel-new-arrival' className='shop-link'>SHOP NOW</Link>
                </div>
                </div>
                </div>

                
                  <div className='up'>
                    <div className='link'>
                      <span className='link'>SOREL ORIGINALS SUPERSTAR CLOTHES <br /> $90</span>
                    </div>
                </div>

            
        </SubHeroContainer>
    )
}

export default SubHero;