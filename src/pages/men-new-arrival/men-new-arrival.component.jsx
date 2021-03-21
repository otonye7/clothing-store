import React from 'react';
import { Route } from 'react-router-dom';
import { MenContainer } from './men-new-arrival.styles';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import MenText from '../../components/men-new-arrival-text/men-new-arrival-text.component';
import MenCategories from '../../components/men-arrival-categories/men-arrival-categories.component';
import Footer from '../../components/footer/footer.component';
import GazellePage from '../men-adidas-originals-gazelle-shoes-burgundy/men-adidas-originals-gazelle-shoes-burgundy.component';
import StrapbackPage from '../mens-adidas-originals-tri-color-strapback-hat-black/mens-adidas-originals-tri-color-strapback-hat-black.component';
import TreyfoilGreyPage from '../trefoil-grey/treyfoil-grey.component';
import TreyfoilWhitePage from '../trefoil-white/trefoil-white.component';
import JordanMulticolorPage from '../jordan-multicolor/jordan-multicolor.component';
import NorthfaceGoldPage from '../north-face-gold/north-face-gold.component';
import PumaRsPage from '../puma-rs/puma-rs.component';
import BugabooNinetyPage from '../bugaboo-ninety/bugaboo-ninety.component';
import TimberlandTreePage from '../timberland-tree/timberland-tree.component';
import TimberlandBlackPage from '../timberland-tree-black/timberland-tree-black.component';
import TimberTanPage from '../timber-tan/timber-tan.component';
import TimberlandBlacPage from '../timberland-hoodie-black/timberland-hoodie-black.component';
import NewBalanceShandoPage from '../new-balance-shando/new-balance-shando.component';
import LacosteGeographicalPage from '../lacoste-geographical/lacoste-geographical.component';
import LacosteNavyPage from '../lacoste-navy/lacoste-navy.component';
import ConverseProPage from '../converse-pro/converse-pro.component';
import ConverseTaylorPage from '../converse-taylor/converse-taylor.component';
import NikeMaxPage from '../nike-max/nike-max.component';
import ChampionLifePage from '../champion-life/champion-life.component';

const MenPage = ({match}) => {
 
	return ( 
         <MenContainer>
           <div className='overall-container'>
              <br />
              <MenLink />
              <MenText />
              <br />
              <br />
              <div className='sub-container'>
                  {/* <MenCategories />  */}
                  <Route exact path={`${match.path}`} component={MenCategories} />
                  <Route path={`${match.path}/:men-adidas-originals-gazelle-shoes-burgundy`} component={GazellePage} />
                  <Route path={`${match.path}/:mens-adidas-Originals-Tri-Color-Strapback-Hat-Black`} component={StrapbackPage} />
                  <Route path={`${match.path}/:mens-adidas-Essentials-Trefoil-Hoodie-Grey-Five`} component={TreyfoilGreyPage} />
                  <Route path={`${match.path}/:mens-adidas-Essentials-Trefoil-Hoodie-White`} component={TreyfoilWhitePage} />
                  <Route path={`${match.path}/:mens-jordan-delta-breathe-multicolor`} component={JordanMulticolorPage} />
                  <Route path={`${match.path}/:mens-the-north-face-1996-retro-nuptse-jacket-summit-gold`} component={NorthfaceGoldPage} />
                  <Route path={`${match.path}/:mens-puma-rs-2.0-winterized-black`} component={PumaRsPage} />
                  <Route path={`${match.path}/:mens-columbia-bugaboo-1986-interchange-jacket-green`} component={BugabooNinetyPage} />
                  <Route path={`${match.path}/:mens-timberland-tree-logo-hoodie-wheat`} component={TimberlandTreePage} />
                  <Route path={`${match.path}/:mens-timberland-tree-logo-hoodie-black`} component={TimberlandBlackPage} />
                  <Route path={`${match.path}/:mens-the-north-face-1996-retro-nuptse-jacket-timber-tan`} component={TimberTanPage} />
                  <Route path={`${match.path}/:mens-timberland-boot-logo-hoodie-black`} component={TimberlandBlacPage} />
                  <Route path={`${match.path}/:mens-newbalance-shando-shoes-black`} component={NewBalanceShandoPage} />
                  <Route path={`${match.path}/:mens-lacoste-x-national-geographic-organic-sweatshirt-grey`} component={LacosteGeographicalPage} />
                  <Route path={`${match.path}/:mens-lacoste-x-national-geographic-organic-sweatshirt-navy`} component={LacosteNavyPage} />
                  <Route path={`${match.path}/:mens-converse-pro-leather-sneakers-white-ice`} component={ConverseProPage} />
                  <Route path={`${match.path}/:mens-converse-chuck-taylor-all-star-cx-sneakers-white-ice`} component={ConverseTaylorPage} />
                  <Route path={`${match.path}/:mens-nike-air-max-270-react-shoes`} component={NikeMaxPage} />
                  <Route path={`${match.path}/:mens-champion-life-hoodie-chenille-big-c-carefree-teal`} component={ChampionLifePage} />
              </div>
            </div>
             <div className='footer'>
              <Footer />
            </div> 
            </MenContainer>
           
	);
}; 


export default MenPage;