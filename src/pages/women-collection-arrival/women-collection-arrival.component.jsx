import React from 'react';
import { NewArrivalContainer } from './women-collection-arrival.styles';
import { Route } from 'react-router-dom';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import WomenText from '../../components/women-text/women-text.component';
import WomenCollections from '../../components/women-collections/women-collection-categories.component';
import WadidasPage from '../w-adidas/w-adidas.component';
import WnorthfacePage from '../w-northface/w-northface.component';
import WfilaPage from '../w-fila/w-fila.component';
import WhempesPage from '../w-hempes/w-hempes.component';
import WdustPage from '../w-dust/w-dust.component';
import WlondonPage from '../w-london/w-london.component';
import Footer from '../../components/footer/footer.component';



const WomenCollectionPage = ({match}) => {
    return(
        <NewArrivalContainer>
              <div className=''>
                  <br/>
                  <MenLink />
                  <WomenText />
                  <br />
                  <br />
                  {/* <WomenCollections /> */}
                  <Route exact path={`${match.path}`} component={WomenCollections} />
                  <Route path={`${match.path}/:womens-adidas-originals-adicolor-classics-cropped-track-jacket-black`} component={WadidasPage} />
                  <Route path={`${match.path}/:womens-the-north-face-95-retro-denali-jacket-black`} component={WnorthfacePage} />
                  <Route path={`${match.path}/:womens-fila-doro-puffer-jacket-white`} component={WfilaPage} />
                  <Route path={`${match.path}/:womens-adidas-originals-windbreaker-hemp`} component={WhempesPage} />
                  <Route path={`${match.path}/:adidas-originals0shopper-bag-dust-pearl`} component={WdustPage} />
                  <Route path={`${match.path}/:womens-adidas-originals-her-studio-london-biker-pants`} component={WlondonPage} />
              </div> 
              <br />
            <br />
             <div className='footer'>
              <Footer />
            </div> 
        </NewArrivalContainer>
    )
}

export default WomenCollectionPage;