import React from 'react';
import { MenContainer } from './men-link-hero.styles';
import  { Link} from 'react-router-dom';

const MenLink = () => {
    return(
        <MenContainer>
             <div className='link-container'>
              <div className='men-container'>
                  <Link to='/' className='home'>
                      Home
                  </Link>
              </div>
              
              <div className='arrow'>&#10095;</div>

              <div className='men-container'>
                  <Link className='home'>
                      MENS NEW ARRIVAL
                  </Link>
              </div>
              </div>
        </MenContainer>
    )
}

export default MenLink;