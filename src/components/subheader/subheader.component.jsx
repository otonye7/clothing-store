import React from 'react';
import { SubHeaderContainer } from './subheader.styles';
import { Link } from 'react-router-dom';

const SubHeader = () => {
   
    return(
        <SubHeaderContainer>
                 
                 <div className ='new-arrival'>
                     <Link className='nav-links'>
                          NEW ARRIVAL
                     </Link>
                     <ul className='sub-links'>
                         <Link>men</Link>
                        <Link>women</Link>
                    </ul>
                 </div>

                 <div className ='new-arrival' >
                     <Link className='nav-links'>
                          MEN
                     </Link>
                     <ul className='sub-links'>
                           <Link>men</Link>
                           <Link>women</Link>
                    </ul>
                 </div>

                 <div className ='new-arrival'>
                     <Link value = 'WOMEN' className='nav-links'>
                          WOMEN
                     </Link>
                     <ul className='sub-links'>
                           <Link>men</Link>
                           <Link>women</Link>
                    </ul>
                 </div>

                 <div className ='new-arrival' >
                     <Link value = 'KIDS' className='nav-links'>
                          KIDS
                     </Link>
                     <ul className='sub-links'>
                           <Link>men</Link>
                           <Link>women</Link>
                    </ul>
                 </div>

                 <div className ='new-arrival' >
                     <Link className='nav-links'>
                          LIFESTYLES
                     </Link>
                     <ul className='sub-links'>
                           <Link>men</Link>
                           <Link>women</Link>
                    </ul>
                 </div>

                 <div className ='new-arrival'>
                     <Link className='nav-links'>
                          SALES
                     </Link>
                 </div>

                 <div className ='new-arrival' >
                     <Link className='nav-links'>
                          BRANDS
                     </Link>
                     <ul className='sub-links'>
                           <Link>men</Link>
                           <Link>women</Link>
                    </ul>
                    
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


        </SubHeaderContainer>
    )
}


export default SubHeader;