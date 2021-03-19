import React  from 'react';
import { SubHeaderContainer } from './subheader.styles';
import { Link } from 'react-router-dom';


const SubHeader = ({open}) => {
  
    return(
        <SubHeaderContainer open={open} >
            
              <div className={open ? "nav-menus" : "nav-menu"}>
                <li className='nav-items'>
                    <Link exact activeClassName='active' to='/new-arrival' className='links'>NEW ARRIVAL</Link>
                </li>

                 <li className='nav-items'>
                    <Link activeClassName='active' className='links'>MEN</Link>
                </li>

                <li className='nav-items'>
                    <Link activeClassName='active' className='links'>WOMEN</Link>
                </li>

                <li className='nav-items'>
                    <Link activeClassName='active' className='links'>KIDS</Link>
                </li>

                <li className='nav-items'>
                    <Link activeClassName='active' className='links'>SALES</Link>
                </li>

                <li className='nav-items'>
                    <Link activeClassName='active' className='links'>BRANDS</Link>
                </li>

                <li className='nav-items'>
                    <Link activeClassName='active' className='links'>LAUNCHES</Link>
                </li>

                <li className='nav-items'>
                    <Link activeClassName='active' className='links'>IN STORE ONLY</Link>
                </li> 
         </div>
            
        </SubHeaderContainer>
    )
}


export default SubHeader;