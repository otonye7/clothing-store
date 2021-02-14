import React from 'react';
import { SubHeaderContainer } from './subheader.styles';
import { Link } from 'react-router-dom';

const SubHeader = () => {
    return(
        <SubHeaderContainer>
            <div className='overall-container'>
             <div className='nav-containers'>
                 <div className ='new-arrival'>
                     <Link className='nav-links'>
                          NEW ARRIVAL
                     </Link>
                 </div>

                 <div className ='new-arrival'>
                     <Link className='nav-links'>
                          MEN
                     </Link>
                 </div>

                 <div className ='new-arrival'>
                     <Link className='nav-links'>
                          WOMEN
                     </Link>
                 </div>

                 <div className ='new-arrival'>
                     <Link className='nav-links'>
                          KIDS
                     </Link>
                 </div>

                 <div className ='new-arrival'>
                     <Link className='nav-links'>
                          LIFESTYLES
                     </Link>
                 </div>

                 <div className ='new-arrival'>
                     <Link className='nav-links'>
                          SALES
                     </Link>
                 </div>

                 <div className ='new-arrival'>
                     <Link className='nav-links'>
                          BRANDS
                     </Link>
                 </div>

                 <div className ='new-arrival'>
                     <Link className='nav-links'>
                          LAUNCHES
                     </Link>
                 </div>

                 <div className ='new-arrival'>
                     <Link className='nav-links'>
                          IN STORE ONLY
                     </Link>
                 </div>

             </div>
             </div>
        </SubHeaderContainer>
    )
}

export default SubHeader;