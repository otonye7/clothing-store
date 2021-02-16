import React from 'react';
import { FeaturedContainer } from './featured.styles';
import { Link } from 'react-router-dom';
import Jordan from  '../../assets/jordan.jpg';
import Adidas from  '../../assets/adidas-ultra-boost.jpg';
import Newbalance from '../../assets/newbalancee.jpg';
import NewBalance from '../../assets/newbalance997.jpg';


const Featured = () => {
    return(
        <FeaturedContainer>
            <div className='featured-container'>
                <h3 className='featured-text'>
                    FEATURED ITEMS
                </h3>
            </div>

            <div className='image-container'>

            <div className='jordan'>
               <img src={Jordan} alt="" /> 
               <Link className='nav-link'>
                    Jordan 1 mid
                </Link>
            </div>
            

            <div className='ultra'>
                <img src={Adidas} alt="" />
                <Link className='nav-link'>
                    Ultra Boost
                </Link>
            </div>

            <div className='usa'>
                 <img src={Newbalance} alt="" />
                 <Link className='nav-link'>
                    Usa
                </Link>
            </div>

            <div className='new-balance'>
                <img src={NewBalance} alt="" />
                <Link className='nav-link'>
                    9971
                </Link>
            </div>

            </div>
        </FeaturedContainer>
    )
}

export default Featured;