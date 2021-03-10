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

                <div className='sub-links'>

                 <div className='links-container'>
                     <ul>
                        <div  className='nav-link'>MEN'S ARRIVALS</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>WOMEN'S ARRIVALS</div>
                    </ul>
                    <ul>
                        <div  className='nav-link'>SHOES</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>APPAREL</div>
                    </ul>
                 </div>
                 
                <div className='image-container'>
                     <div className='image'></div>
                </div>

                </div>
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
                           <div>MEN'S NEW ARRIVAL</div>
                           <div>WOMEN'S NEW ARIVAL</div>
                           <div>SHOE'S</div>
                           <div></div>
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