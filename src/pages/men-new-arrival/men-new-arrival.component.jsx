import React from 'react';
import Header from '../../components/header/header.component';
import { MenContainer } from './men-new-arrival.styles';
import SubHeader from '../../components/subheader/subheader.component';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import MenText from '../../components/men-new-arrival-text/men-new-arrival-text.component';
import Refine from '../../components/refine/refine.component';
import Color from '../../components/color/color.component';

const MenPage = () => {

	return ( 
         <MenContainer>
           <div>
             <div className='headers'>
               <Header />
               <SubHeader />
             </div>
              <br />
              <MenLink />
              <MenText />
              <br />
              <br />
              <Refine />
              <Color />
            </div>
            </MenContainer>
           
	);
}; 


export default MenPage;