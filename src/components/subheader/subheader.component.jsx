import React  from 'react';
import { SubHeaderContainer } from './subheader.styles';
import { Link } from 'react-router-dom';


const SubHeader = ({open}) => {
  
    return(
        <SubHeaderContainer open={open} >
            
              <div className='container'>
                <li className='list'>
                    <Link to='/new-arrival' className='links'>NEW ARRIVAL</Link>
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
         </div>
            
        </SubHeaderContainer>
    )
}


export default SubHeader;