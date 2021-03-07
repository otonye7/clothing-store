import React from 'react';
import { NewBalanceContainer } from './new-balance-arrival.styles';
import { Route } from 'react-router-dom';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import NewBalanceText from '../../components/new-balance-arrival-text/new-balance-arrival-text.component';
import NewBalanceCategories from '../../components/new-balance-arrival-categories/new-balance-arrival-categories.component';
import ShandoShoesPage from '../shando-shoes/shando-shoes.component';
import SeaSaltPage from '../sea-salt-shoes/sea.salt-shoes.component';
import NewBalancePhantomPage from '../new-balance-phantom/new-balance-phantom.component';
import NewBalanceAluminumPage from '../new-balance-aluminum/new-balance-aluminum.component';
import ForestGreenPage from '../forest-green/forest-green.component';
import Footer from '../../components/footer/footer.component';

const NewBalancePage = ({match}) => {

	return ( 
         <NewBalanceContainer>
           <div className='overall-container'>
              <br />
              <MenLink />
              <NewBalanceText />
              <br />
              <br />
              <div className='sub-container'>
                {/* <NewBalanceCategories /> */}
                <Route exact path={`${match.path}`} component={NewBalanceCategories} />
                <Route path={`${match.path}/:mens-new-balance-shando-shoes-black`} component={ShandoShoesPage} />
                <Route path={`${match.path}/:mens-new-balance-all-coasts-sea-salt`} component={SeaSaltPage} />
                <Route path={`${match.path}/:men-new-balance-xrct-shoes-black-with-phantom`} component={NewBalancePhantomPage} />
                <Route path={`${match.path}/:mens-new-balance-aluminum`} component={NewBalanceAluminumPage} />
                <Route path={`${match.path}/:mens-new-balance-574-shoes-team-forest-green`} component={ForestGreenPage} />
              </div>
            </div>
            <div className='footer'>
              <Footer />
            </div>
            </NewBalanceContainer>
           
	);
}; 


export default NewBalancePage;