import React from 'react';
import { SalesContainer } from './sales.styles';
import { Link } from 'react-router-dom';
import SorelShoe from  '../../assets/sorel-boots-1.jpg';
import Adidas from  '../../assets/white-nike.jpg';
import Newbalance from '../../assets/sorel.jpg';
import NewBalance from '../../assets/Nike-Roshe.jpg';



const Sales = () => {
    return(
        <SalesContainer>
            <div className='sales-container'>
                <h2 className='sales-text'>
                    FOLLOW US @S^mo_Sports
                </h2>
            </div>

            <div className='image-container'>

            <div className='jordan'>
            <img src={SorelShoe} alt="" />
               <Link className='nav-link'>
                    Sorel
                </Link>
            </div>
            

            <div className='ultra'>
                <img src={Adidas} alt="" />
                <Link className='nav-link'>
                    Nike
                </Link>
            </div>

            <div className='usa'>
                 <img src={Newbalance} alt="" />
                 <Link className='nav-link'>
                    Sorel
                </Link>
            </div>

            <div className='new-balance'>
                <img src={NewBalance} alt="" />
                <Link className='nav-link'>
                    9971
                </Link>
            </div>

            </div>
        </SalesContainer>
    )
}

export default Sales;