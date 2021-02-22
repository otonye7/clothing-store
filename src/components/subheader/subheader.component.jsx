import React from 'react';
import { SubHeaderContainer } from './subheader.styles';
import {toggleArrivalHidden, toggleMenHidden, toggleWomenHidden, toggleKidHidden, toggleLifestyleHidden, toggleBrandHidden} from '../../redux/header/header.action';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import NewArrival from '../new-arrival-dropdown/new-arrival-dropdown.component';
import Men from '../men/men.component';
import Women from '../women/women.component';
import Kid from '../kids/kids.component';
import LifeStyle from '../lifestyle/lifestyle.component';
import Brand from '../brands/brands.component';

const SubHeader = ({hidden, menhidden, womenhidden, kidhidden, lifestylehidden,  brandshidden, toggleArrivalHidden, toggleMenHidden, toggleWomenHidden, toggleKidHidden, toggleLifestyleHidden, toggleBrandHidden}) => {
    return(
        <SubHeaderContainer>
            <div className='overall-container'>
             <div className='nav-containers'>
                 
                 <div className ='new-arrival' onClick={toggleArrivalHidden}>
                     <Link value = 'NEW ARRIVAL'  className='nav-links'>
                          NEW ARRIVAL
                     </Link>
                     {
                         
                     }
                 </div>

                 <div className ='new-arrival' onClick={toggleMenHidden}>
                     <Link  value = 'MEN' className='nav-links'>
                          MEN
                     </Link>
                     {
                        menhidden  === 'MEN' ? <Men /> : menhidden
                     }
                 </div>

                 <div className ='new-arrival' onClick={toggleWomenHidden}>
                     <Link value = 'WOMEN' className='nav-links'>
                          WOMEN
                     </Link>
                     {
                         womenhidden  === 'WOMEN' ? <Women /> : womenhidden
                     }
                 </div>

                 <div className ='new-arrival' onClick={toggleKidHidden} >
                     <Link value = 'KIDS' className='nav-links'>
                          KIDS
                     </Link>
                     {
                         kidhidden ? null : <Kid />
                     }
                 </div>

                 <div className ='new-arrival' onClick={toggleLifestyleHidden}>
                     <Link className='nav-links'>
                          LIFESTYLES
                     </Link>
                     {
                         lifestylehidden ? null : <LifeStyle />
                     }
                 </div>

                 <div className ='new-arrival'>
                     <Link className='nav-links'>
                          SALES
                     </Link>
                 </div>

                 <div className ='new-arrival' onClick={toggleBrandHidden}>
                     <Link className='nav-links'>
                          BRANDS
                     </Link>
                     {
                         brandshidden ? null : <Brand />
                     }
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

const mapDispatchToProps = dispatch => ({
    toggleArrivalHidden : () =>  dispatch(toggleArrivalHidden()),
    toggleMenHidden : () =>  dispatch(toggleMenHidden()),
    toggleWomenHidden : () =>  dispatch(toggleWomenHidden()),
    toggleKidHidden : () =>  dispatch(toggleKidHidden()),
    toggleLifestyleHidden : () =>  dispatch(toggleLifestyleHidden()),
    toggleBrandHidden : () =>  dispatch(toggleBrandHidden()),
})

const mapStateToProps =  ({header : {hidden, menhidden, womenhidden, kidhidden, lifestylehidden,  brandshidden}}) => ({
    hidden,
    menhidden,
    womenhidden,
    kidhidden,
    lifestylehidden,
    brandshidden,
})


export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);