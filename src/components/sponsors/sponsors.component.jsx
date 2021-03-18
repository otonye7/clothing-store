import React from 'react';
import { SponsorsContainer } from './sponsors.styles';

const Sponsors = () => {
    return(
        <SponsorsContainer>
            <div className='adidas-container'>
                <div className='adidas'></div>
            </div>
             
             <div className='converse-container'>
                <div className='converse'></div>
            </div>

            <div className='champion-container'>
                 <div className='champion'></div>
            </div>
                
            <div className='jumpman-container'>
                 <div className='jumpman'></div>
            </div>
                
            <div className='nb-container'>
                <div className='nb'></div>
            </div>
                
           
        </SponsorsContainer>
    )
}

export default Sponsors;