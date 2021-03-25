import React  from 'react';
import { SubHeaderContainer } from './subheader.styles';
import { Link } from 'react-router-dom';


const SubHeader = ({open}) => {
    console.log(open)
  
    return(
        <SubHeaderContainer open={open} >
            
              <div className="nav-menu" >
                <li className='nav-items'>
                    <Link exact activeClassName='active' to='/new-arrival' className='links'>NEW ARRIVAL</Link>
                </li>

                 <li className='nav-items'>
                    <Link activeClassName='active' to='/men' className='links'>MEN</Link>
                </li>

                <li className='nav-items'>
                    <Link activeClassName='active' to='/women' className='links'>WOMEN</Link>
                </li>

                <li className='nav-items'>
                    <Link activeClassName='active' to='/kids' className='links'>KIDS</Link>
                </li>

                <li className='nav-items'>
                    <Link activeClassName='active' className='links'>SALES</Link>
                </li>

                <li className='nav-items'>
                    <Link activeClassName='active' to='/brands' className='links'>BRANDS</Link>
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