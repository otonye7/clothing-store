import React from 'react';
import { SubHeroContainer } from './sub-hero.styles';
import NikeSub from  '../../assets/nike-subhero.jpg';
import AirZoom from  '../../assets/air-zoom.jpg';
import { Link } from 'react-router-dom';

const SubHero = () => {
    return(
        <SubHeroContainer>
            <div className='subhero-container'>
                <div className='first-photo'>
                    <img src={NikeSub} alt="" />

                    <div className='subhero-text'>
                        <h4 className='men-arrival'>
                            MEN'S NEW ARRIVAL
                        </h4>
                    <Link to='/men-new-arrival' className='nav-links'>
                          SHOP NOW
                     </Link>
                    </div>
                </div>
                <div className='second-photo'>
                    <img src={AirZoom} alt="" />

                    <div className='secondsubhero-text'>
                        <h4 className='men-arrival'>
                            WOMEN NEW ARRIVAL
                        </h4>
                        <Link to='/women-new-arrival' className='nav-link'>
                          SHOP NOW
                     </Link>
                    </div>
                </div>
            </div>
        </SubHeroContainer>
    )
}

export default SubHero;