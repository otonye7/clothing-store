import React from 'react';
import { FeaturedContainer } from './featured.styles';
import Jordan from  '../../assets/air-zoom.jpg';
import Gazelle from '../../assets/white-nike.jpg';
import NewBalance from '../../assets/air-zoom.jpg';
import Adidas from  '../../assets/white-nike.jpg';



const Featured = () => {
    return(
        <FeaturedContainer>
             <div className='first-container'>
                <img src={Jordan} alt="" />
            </div>

            <div className='second-image'>
                <img src={Gazelle} alt="" />
            </div>
            
            <div className='third-image'>
                <img src={NewBalance} alt="" />
            </div>

            <div className='fourth-image'>
                <img src={Adidas} alt="" />
            </div>
        </FeaturedContainer>
    )
}

export default Featured;