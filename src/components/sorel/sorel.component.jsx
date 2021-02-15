import React from 'react';
import { SorelContainer } from './sorel.styles';
import { Link } from 'react-router-dom';
import SorelShoe from  '../../assets/sorel-boots-1.jpg';
import NewBalance from  '../../assets/newbalance.jpg';


const Sorel = () => {
    return(
        <SorelContainer>
              <div className='sorel-container'>
                <div className='sorel-photo'>
                    <img src={SorelShoe} alt="" />

                    <div className='sorel-text'>
                        <h4 className='sorel-arrival'>
                            SOREL
                        </h4>
                    <Link className='nav-links'>
                          SHOP NOW
                     </Link>
                    </div>
                </div>

                <div className='newbalance-photo'>
                    <img src={NewBalance} alt="" />

                    <div className='newbalance-text'>
                        <h4 className='newbalance-arrival'>
                            NEW BALANCE
                        </h4>
                        <Link className='nav-link'>
                          SHOP NOW
                     </Link>
                    </div>
                </div>
            </div>
        </SorelContainer>
    )
}

export default Sorel;