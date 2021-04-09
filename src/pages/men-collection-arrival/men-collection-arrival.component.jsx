import React from 'react';
import { NewArrivalContainer } from './men-collection-arrival.styles';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import MenText from '../../components/men-text/men-text.component';
import { Route } from 'react-router-dom';
import MensCollections from '../../components/men-collections/men-collection-categories.component';
import MgshockPage from '../m-gshock/m-gshock.component';
import McamoPage from '../m-camo/m-camo.component';
import MtrackPage from '../m-track/m-track.component';
import MnavyPage from '../m-navy/m-navy.component';
import MsplatterPage from '../m-splatter/m-splatter.component';
import MbalancePage from '../m-balance/m-balance.component';
import Footer from '../../components/footer/footer.component';



const MenCollectionPage = ({match}) => {
    return(
        <NewArrivalContainer>
              <div className=''>
                  <br/>
                  <MenLink />
                  <MenText />
                  <br />
                  <br />
                  {/* <MensCollections /> */}
                  <Route exact path={`${match.path}`} component={MensCollections} />
                  <Route path={`${match.path}/:men-G-shock-analog-digital-watch-ga700sk-1a`} component={MgshockPage} />
                  <Route path={`${match.path}/:mens-adidas-originals-camo-tongue-label-tee-wild-pine`} component={McamoPage} />
                  <Route path={`${match.path}/:mens-adidas-originals-sportive-track-pants-collegiate-navy`} component={MtrackPage} />
                  <Route path={`${match.path}/:mens-adidas-navy`} component={MnavyPage} />
                  <Route path={`${match.path}/:mens-adidas-originals-superstar-shoes-white-splatter`} component={MsplatterPage} />
                  <Route path={`${match.path}/:mens-new-balance-997h-shoes-team-away-grey`} component={MbalancePage} />
              </div> 
              <br />
            <br />
             <div className='footer'>
              <Footer />
            </div> 
        </NewArrivalContainer>
    )
}

export default MenCollectionPage;