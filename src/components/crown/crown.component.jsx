import React from 'react';
import { CrownContainer } from './crown.styles';
import { Link } from 'react-router-dom';
import Romantic from  '../../assets/romantic-crown.jpg';
import Bugaboo from  '../../assets/bugaboo.jpg';


const Crown = () => {
    return(
        <CrownContainer>
              <div className='crown-container'>
                <div className='crown-photo'>
                    <img src={Romantic} alt="" />

                    <div className='crown-text'>
                        <h4 className='crown-arrival'>
                            Romantic Crown
                        </h4>
                    <Link className='nav-links'>
                          SHOP NOW
                     </Link>
                    </div>
                </div>

                <div className='columbia-photo'>
                    <img src={Bugaboo} alt="" />

                    <div className='columbia-text'>
                        <h4 className='columbia-arrival'>
                            Columbia
                        </h4>
                        <Link className='nav-link'>
                          SHOP NOW
                     </Link>
                    </div>
                </div>
            </div>
        </CrownContainer>
    )
}

export default Crown;