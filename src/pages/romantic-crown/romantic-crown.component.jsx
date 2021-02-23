import React from 'react';
import Header from '../../components/header/header.component';
import { RomanticCrownContainer } from './romantic-crown.styles';
import SubHeader from '../../components/subheader/subheader.component';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import RomanticCrownText from '../../components/romantic-crown-text/romantic-crown-text.component';
import RomanticCrownCategories from '../../components/romantic-crown-categories/romantic-crown-categories.component';
import Footer from '../../components/footer/footer.component';

const RomanticCrownPage = () => {

	return ( 
         <RomanticCrownContainer>
           <div className='overall-container'>
             <div className='headers'>
               <Header />
               <SubHeader />
             </div>
              <br />
              <MenLink />
              <RomanticCrownText />
              <br />
              <br />
              <div className='sub-container'>
                 <RomanticCrownCategories />
              </div>
            </div>
            <div className='footer'>
               <Footer />
            </div>
            </RomanticCrownContainer>
           
	);
}; 


export default RomanticCrownPage;