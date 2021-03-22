import React from 'react';
import { WomenContainer } from './women-new-arrival.styles';
import { Route } from 'react-router-dom';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import WomenText from '../../components/women-new-arrival-text/women-new-arrival-text.component';
import WomenCategories from '../../components/women-new-arrival-categories/women-new-arrival-categories.component';
import NewBalanceFivePage from '../womens-new-balance-five/womens-new-balance-five.component';
import HeritageJoggersPage from '../heritage-joggers/heritage-joggers.component';
import SportsWearHeritagePage from '../sportswear-heritage/sportswear-heritage.component';
import EssentialFleecePage from '../essential-fleece/essential-fleece.component';
import LoungeWearPage from '../lounge-wear/lounge-wear.component';
import UtilityBackPackPage from '../utility-backpack/utility-backpack.component';
import ModularBackPackPage from '../modular-backpack/modular-backpack.component';
import WomenBugabooPage from '../women-bugaboo/women-bugaboo.component';
import SuperstarGoldPage from '../superstar-gold/superstar-gold.component';
import Footer from '../../components/footer/footer.component';


const WomenPage = ({match}) => {

	return ( 
         <WomenContainer>
           <div>
              <br />
              <MenLink />
              <WomenText />
              <br />
              <br />
             {/* <WomenCategories /> */}
             <Route exact path={`${match.path}`} component={WomenCategories} />
             <Route path={`${match.path}/:womens-new-balance-574-shoes-white`} component={NewBalanceFivePage} />
             <Route path={`${match.path}/:womens-nike-sportswear-heritage-joggers`} component={HeritageJoggersPage} />
             <Route path={`${match.path}/:womens-nike-sportswear-heritage-crew`} component={SportsWearHeritagePage} />
             <Route path={`${match.path}/:womens-nike-sportswear-essential-fleece-hoodie`} component={EssentialFleecePage} />
             <Route path={`${match.path}/:womens-adidas-essential-loungewear-3-stripes-leggings`} component={LoungeWearPage} />
             <Route path={`${match.path}/:adidas-utility-backpack-black`} component={UtilityBackPackPage} />
             <Route path={`${match.path}/:adidas-modular-backpack-black`} component={ModularBackPackPage} />
             <Route path={`${match.path}/:womens-columbia-bugaboo-1986-interchange-jacket-green`} component={WomenBugabooPage} />
             <Route path={`${match.path}/:womens-adidas-originals-superstar-shoes-white-gold`} component={SuperstarGoldPage} />
            </div>
            <br />
            <br />
            <div className='footer'>
              <Footer />
            </div>
            </WomenContainer>
           
	);
}; 


export default WomenPage;