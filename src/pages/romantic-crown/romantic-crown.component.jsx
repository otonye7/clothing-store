import React from 'react';
import { RomanticCrownContainer } from './romantic-crown.styles';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import RomanticCrownText from '../../components/romantic-crown-text/romantic-crown-text.component';
import RomanticCrownCategories from '../../components/romantic-crown-categories/romantic-crown-categories.component';
import Footer from '../../components/footer/footer.component';

const RomanticCrownPage = () => {

	return ( 
         <RomanticCrownContainer>
           <div className='overall-container'>
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