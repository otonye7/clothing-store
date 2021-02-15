import React from 'react';
import { SponsorsContainer } from './sponsors.styles';
import Converse from  '../../assets/converse.png';
import Adidas from  '../../assets/adidas.png';
import Champion from  '../../assets/champion.png';
import Jumpman from  '../../assets/jumpman.png';
import Nb from  '../../assets/nb.png';

const Sponsors = () => {
    return(
        <SponsorsContainer>
            <div className='sponsor-container'>
                <div className='adidas'>
                   <img src={Adidas} alt="" />
                </div>

                <div className='converse'>
                   <img src={Converse} alt="" />
                </div>

                <div className='champion'>
                   <img src={Champion} alt="" />
                </div>

                <div className='jumpman'>
                   <img src={Jumpman} alt="" />
                </div>

                <div className='nb'>
                   <img src={Nb} alt="" />
                </div>
            </div>
        </SponsorsContainer>
    )
}

export default Sponsors;