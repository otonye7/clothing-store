import React from 'react';
import { RomanticCrownContainer } from './romantic-crown.styles';
import { Route } from 'react-router-dom';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import RomanticCrownText from '../../components/romantic-crown-text/romantic-crown-text.component';
import RomanticCrownCategories from '../../components/romantic-crown-categories/romantic-crown-categories.component';
import RcSweatShirtNavyPage from '../rc-sweatshirt-navy/rc-sweatshirt-navy.component';
import RcSweatShirtCreamPage from '../rc-sweatshirt-cream/rc-sweatshirt-cream.component';
import RcCreamPage from '../rc-cream/rc-cream.component';
import RcSweatShirtGreyPage from '../rc-sweatshirt-grey/rc-sweatshirt-grey.component';
import RcBluePage from '../rc-blues/rc-blues.component';
import TrooperHatPage from '../trooper-hat/trooper-hat.component';
import RcMilkPage from '../rc-milk/rc-milk.component';
import RcPurplePage from '../rc-purple/rc-purple.component';
import RcBlackPage from '../rc-black/rc-black.component';
import Footer from '../../components/footer/footer.component';

const RomanticCrownPage = ({match}) => {

	return ( 
         <RomanticCrownContainer>
           <div className='overall-container'>
              <br />
              <MenLink />
              <RomanticCrownText />
              <br />
              <br />
              <div className='sub-container'>
                 {/* <RomanticCrownCategories /> */}
                 <Route exact path={`${match.path}`} component={RomanticCrownCategories} />
                 <Route path={`${match.path}/:unisex-romantic-crown-rmtc-logo-pocket-sweatshirt-navy`} component={RcSweatShirtNavyPage} />
                 <Route path={`${match.path}/:unisex-romantic-crown-logo-sweatshirt-cream`} component={RcSweatShirtCreamPage} />
                 <Route path={`${match.path}/:mens-romantic-crown-cream`} component={RcCreamPage} />
                 <Route path={`${match.path}/:unisex-romantic-crown-logo-sweatshirt-grey`} component={RcSweatShirtGreyPage} />
                 <Route path={`${match.path}/:romantic-crown-blue`} component={RcBluePage} />
                 <Route path={`${match.path}/:unisex-romantic-crown-corduroy-trooper-hat-yellow`} component={TrooperHatPage} />
                 <Route path={`${match.path}/:mens-romantic-crown-milk`} component={RcMilkPage} />
                 <Route path={`${match.path}/:unisex-romantic-crown-color-logo-sweatshirt-purple`} component={RcPurplePage} />
                 <Route path={`${match.path}/:romantic-crown-black`} component={RcBlackPage} />
              </div>
            </div>
            <div className='footer'>
               <Footer />
            </div>
            </RomanticCrownContainer>
           
	);
}; 


export default RomanticCrownPage;