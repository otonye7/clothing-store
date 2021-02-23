import React from 'react';
import Header from '../../components/header/header.component';
import { MenContainer } from './men-new-arrival.styles';
import SubHeader from '../../components/subheader/subheader.component';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import MenText from '../../components/men-new-arrival-text/men-new-arrival-text.component';
import MenCategories from '../../components/men-arrival-categories/men-arrival-categories.component';
import Footer from '../../components/footer/footer.component';

const MenPage = () => {

	return ( 
         <MenContainer>
           <div className='overall-container'>
             <div className='headers'>
               <Header />
               <SubHeader />
             </div>
              <br />
              <MenLink />
              <MenText />
              <br />
              <br />
              <div className='sub-container'>
                <MenCategories />
              </div>
            </div>
            <div className='footer'>
              <Footer />
            </div>
            </MenContainer>
           
	);
}; 


export default MenPage;