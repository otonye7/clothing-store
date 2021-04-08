import React from 'react';
import { NewArrivalContainer } from './new-arrival.styles';
import { Route } from 'react-router-dom';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import NewText from '../../components/new-arrival-text/new-arrival-text.component';
import NewCategories from '../../components/new-arrival-categories/new-arrival-categories.component';
import NlacostePage from '../n-lacoste/n-lacoste.component';
import NjordanPage from '../n-jordan/n-jordan.component';
import NtimberlandPage from '../n-timberland/n-timberland.component';
import NtrefoilPage from '../n-trefoil/n-trefoil.component';
import NdeltaPage from '../n-delta/n-delta.component';
import NretroPage from '../n-retro/n-retro.component';
import Footer from '../../components/footer/footer.component';



const NewArrivalPage = ({match}) => {
    return(
        <NewArrivalContainer>
              <div className=''>
                  <br/>
                  <MenLink />
                  <NewText />
                  <br />
                  <br />
                  {/* <NewCategories /> */}
                  <Route exact path={`${match.path}`} component={NewCategories} />
                  <Route path={`${match.path}/:mens-lacoste-sport-hooded-fleece-sweatshirt-grey-chine`} component={NlacostePage} />
                  <Route path={`${match.path}/:mens-air-jordan-1-mid-se-turf-orange`} component={NjordanPage} />
                  <Route path={`${match.path}/:mens-timberland-boot-logo-hoodie-black`} component={NtimberlandPage} />
                  <Route path={`${match.path}/:mens-adidas-Essentials-Trefoil-Hoodie-White`} component={NtrefoilPage} />
                  <Route path={`${match.path}/:mens-jordan-delta-breathe-multicolor`} component={NdeltaPage} />
                  <Route path={`${match.path}/:mens-the-north-face-1996-retro-nuptse-jacket-summit-gold`} component={NretroPage} />
              </div>
              <br />
            <br />
             <div className='footer'>
              <Footer />
            </div> 
        </NewArrivalContainer>
    )
}

export default NewArrivalPage;