import React from 'react';
import Header from '../../components/header/header.component';
import { SorelContainer } from './sorel-new-arrival.styles';
import SubHeader from '../../components/subheader/subheader.component';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import SorelText from '../../components/sorel-arrival-text/sorel-arrival-text.component';
import SorelCategories from '../../components/sorel-new-arrival-categories/sorel-new-arrival-categories.component';
import Footer from '../../components/footer/footer.component';

const SorelPage = () => {

	return ( 
         <SorelContainer>
           <div className='overall-container'>
             <div className='headers'>
               <Header />
               <SubHeader />
             </div>
              <br />
              <MenLink />
              <SorelText />
              <br />
              <br />
              <div className='sub-container'>
                 <SorelCategories />
              </div>
            </div>
            <div className='footer'>
              <Footer />
            </div>
            </SorelContainer>
           
	);
}; 


export default SorelPage;