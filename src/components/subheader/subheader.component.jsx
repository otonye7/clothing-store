import React  from 'react';
import { SubHeaderContainer } from './subheader.styles';
import { Link } from 'react-router-dom';


const SubHeader = ({open}) => {
  
    return(
        <SubHeaderContainer open={open} >
            
            <div className='wrapper'>
              <ul className='nav-links'>
                <li className='list'>
                    <Link className='links'>NEW ARRIVAL</Link>
                <ul className='drop-down'>
                    <li className='list'><Link className='drop-links'>MEN</Link></li>
                    <li className='list'><Link className='drop-links'>WOMEN ARRIVAL</Link></li>
                    <li className='list'><Link className='drop-links'>SHOES</Link></li>
                    <li className='list'><Link className='drop-links'>APPARELS</Link></li>
                    <li className='list'><Link className='drop-link'>SHOP NOW</Link></li>
                </ul>
                </li>
                <li className='list'>
                    <Link className='links'>MEN</Link>
                </li>
                <li className='list'>
                    <Link className='links'>WOMEN</Link>
                </li>
                <li className='list'>
                    <Link className='links'>KIDS</Link>
                </li>
                <li className='list'>
                    <Link className='links'>SALES</Link>
                </li>
                <li className='list'>
                    <Link className='links'>BRANDS</Link>
                </li>
                <li className='list'>
                    <Link className='links'>LAUNCHES</Link>
                </li>
                <li className='list'>
                    <Link className='links'>IN STORE ONLY</Link>
                </li>
                </ul>
            </div>
            
        </SubHeaderContainer>
    )
}


export default SubHeader;