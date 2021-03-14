import React, {useState} from 'react';
import { SubHeaderContainer } from './subheader.styles';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

const SubHeader = () => {
    const [showLinks, setShowLinks] = useState(false);
   
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
                        <div className='nav-link'>SOREL ARRIVAL</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>BUGABOO ARRIVAL</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>NIKE ARRIVAL</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>COLUMBIA ARRIVAL</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>ADIDAS ARRIVAL</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>CONVERSE ARRIVAL</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>PUMA ARRIVAL</div>
                    </ul>
                 </div>
                 
                <div className='image-container'>
                     <div className='image'></div>

                <div className='shop'>
                   <Link  to='/new-arrival' className='shop-links'>SHOP NOW</Link>
                </div>

                </div>
                </div>
                </div>

                 <div className ='new-arrival' >
                     <Link className='nav-links'>
                          MEN
                     </Link>
                     
                <div className='sub-links'>

                 <div className='links-container'>
                     <ul>
                        <div  className='nav-link'>HERITAGE</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>LIFESTYLE</div>
                    </ul>
                    <ul>
                        <div  className='nav-link'>SKATES</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>BASKETBALL</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>TENNIS</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>SOCCER</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>BOOTS</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>TRACKSUITS</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>SHORTS</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>SHIRTS</div>
                    </ul>
                 </div>
                 
                <div className='image-container'>
                     <div className='second-image'></div>

                <div className='shop'>
                   <Link className='shop-links'>SHOP NOW</Link>
                </div>
                
                </div>
                </div>
              </div>

                 <div className ='new-arrival'>
                     <Link value = 'WOMEN' className='nav-links'>
                          WOMEN
                     </Link>
                     
                       <div className='sub-links'>

                 <div className='links-container'>
                     <ul>
                        <div  className='nav-link'>HERITAGE</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>LIFESTYLE</div>
                    </ul>
                    <ul>
                        <div  className='nav-link'>SKATES</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>BASKETBALL</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>TENNIS</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>SOCCER</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>BOOTS</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>TRACKSUITS</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>SHORTS</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>SHIRTS</div>
                    </ul>
                 </div>
                 
                <div className='image-container'>
                     <div className='third-image'></div>

                <div className='shop'>
                   <Link className='shop-links'>SHOP NOW</Link>
                </div>
                
                </div>
                </div>
                </div>

                 <div className ='new-arrival' >
                     <Link value = 'KIDS' className='nav-links'>
                          KIDS
                     </Link>
                       <div className='sub-links'>

                 <div className='links-container'>
                     <ul>
                        <div  className='nav-link'>HERITAGE</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>LIFESTYLE</div>
                    </ul>
                    <ul>
                        <div  className='nav-link'>SKATES</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>BASKETBALL</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>TENNIS</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>SOCCER</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>BOOTS</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>TRACKSUITS</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>SHORTS</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>SHIRTS</div>
                    </ul>
                 </div>
                 
                <div className='image-container'>
                     <div className='fourth-image'></div>

                <div className='shop'>
                   <Link className='shop-links'>SHOP NOW</Link>
                </div>
                
                </div>
                </div>
                 </div>

                 <div className ='new-arrival' >
                     <Link className='nav-links'>
                          LIFESTYLES
                     </Link>
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
                       <div className='sub-links'>

                 <div className='links-container'>
                     <ul>
                        <div  className='nav-link'>GUCCI</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>ADIDAS</div>
                    </ul>
                    <ul>
                        <div  className='nav-link'>LACOSTE</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>ROYAL CROWN</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>BUGABOO</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>PUMA</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>NIKE</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>JORDAN</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>NEW BALANCE</div>
                    </ul>
                    <ul>
                        <div className='nav-link'>CONVERSE</div>
                    </ul>
                 </div>
                 
                <div className='image-container'>
                     <div className='fifth-image'></div>

                <div className='shop'>
                   <Link className='shop-links'>SHOP NOW</Link>
                </div>
                
                </div>
                </div>
                    
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

                 <div className='menu-icon'>
                      <MenuIcon />
                 </div>


        </SubHeaderContainer>
    )
}


export default SubHeader;