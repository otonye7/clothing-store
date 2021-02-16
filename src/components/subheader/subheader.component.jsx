import React from 'react';
import { SubHeaderContainer } from './subheader.styles';
import {toggleNavHidden} from '../../redux/header/header.action';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import NewArrival from '../new-arrival-dropdown/new-arrival-dropdown.component';

const SubHeader = ({hidden, toggleNavHidden}) => {
    return(
        <SubHeaderContainer>
            <div className='overall-container'>
             <div className='nav-containers'>
                 <div className ='new-arrival' onClick={toggleNavHidden}>
                     <Link className='nav-links'>
                          NEW ARRIVAL
                     </Link>
                  {
                      hidden ? null : <NewArrival />
                  }
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

const mapDispatchToProps = dispatch => ({
    toggleNavHidden : () =>  dispatch(toggleNavHidden())
})

const mapStateToProps =  ({header : {hidden}}) => ({
    hidden
})


export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);