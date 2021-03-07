import React from 'react';
import { SorelContainer } from './sorel-new-arrival.styles';
import { Route } from 'react-router-dom';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import SorelText from '../../components/sorel-arrival-text/sorel-arrival-text.component';
import SorelCategories from '../../components/sorel-new-arrival-categories/sorel-new-arrival-categories.component';
import WomenSorelPage from '../women-sorel/women-sorel.component';
import MenSorelPage from '../men-sorel/men-sorel.component';
import WomenSorelOut from '../women-sorel-out/women-sorel-out.component';
import SorelJackets from '../sorel-jackets/sorel-jackets.component';
import Footer from '../../components/footer/footer.component';

const SorelPage = ({match}) => {

	return ( 
         <SorelContainer>
           <div className='overall-container'>
              <br />
              <MenLink />
              <SorelText />
              <br />
              <br />
              <div className='sub-container'>
                 {/* <SorelCategories /> */}
                 <Route exact path={`${match.path}`} component={SorelCategories} />
                 <Route path={`${match.path}/:womens-sorel-caribou-boots-buff`} component={WomenSorelPage} />
                 <Route path={`${match.path}/:men-sorel`} component={MenSorelPage} />
                 <Route path={`${match.path}/:womens-sorel-out-n-about-plus-felt-boots-quarry`} component={WomenSorelOut} />
                 <Route path={`${match.path}/:sorel-jackets`} component={SorelJackets} />
              </div>
            </div>
            <div className='footer'>
              <Footer />
            </div>
            </SorelContainer>
           
	);
}; 


export default SorelPage;