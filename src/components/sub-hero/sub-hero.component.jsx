import React from 'react';
import { SubHeroContainer } from './sub-hero.styles';
import NikeSub from  '../../assets/nike-subhero.jpg';
import AirZoom from  '../../assets/air-zoom.jpg';

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
                    </div>
                </div>
                <div className='second-photo'>
                    <img src={AirZoom} alt="" />

                    <div className='secondsubhero-text'>
                        <h4 className='men-arrival'>
                            WOMEN NEW ARRIVAL
                        </h4>
                    </div>
                </div>
            </div>
        </SubHeroContainer>
    )
}

export default SubHero;