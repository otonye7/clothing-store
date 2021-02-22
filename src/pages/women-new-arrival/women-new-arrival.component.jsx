import React from 'react';
import Header from '../../components/header/header.component';
import { WomenContainer } from './women-new-arrival.styles';
import SubHeader from '../../components/subheader/subheader.component';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import WomenText from '../../components/women-new-arrival-text/women-new-arrival-text.component';
import WomenCategories from '../../components/women-new-arrival-categories/women-new-arrival-categories.component';
import Footer from '../../components/footer/footer.component';

const WomenPage = () => {

	return ( 
         <WomenContainer>
           <div>
             <div className='headers'>
               <Header />
               <SubHeader />
             </div>
              <br />
              <MenLink />
              <WomenText />
              <br />
              <br />
             <WomenCategories />
            </div>
            <div className='footer'>
              <Footer />
            </div>
            </WomenContainer>
           
	);
}; 


export default WomenPage;