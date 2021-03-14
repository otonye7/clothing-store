import React from 'react';
// import Header from '../../components/header/header.component';
import { HomepageContainer } from './homepage.styles';
import Hero from '../../components/hero/hero.component';
import SubHero from '../../components/sub-hero/sub-hero.component';
import SubHeroRight from '../../components/sub-hero-right/sub-hero-right.component';
import Sponsors from '../../components/sponsors/sponsors.component';
import Sorel from '../../components/sorel/sorel.component';
import SorelRight from '../../components/sorel-right/sorel-right.component';
import Crown from '../../components/crown/crown.component';
import CrownRight from '../../components/crown-right/crown-right.component';
import Collectibles from '../../components/collectibles/collectibles.component';
import CollectiblesRight from '../../components/collectibles-right/collectibles-right.component';
import FeatureTitle from '../../components/featured-title/featured-title.component';
import Featured from '../../components/featured/featured.component';
import SocialMedia from '../../components/social-media-text/social-media.component';
import Sales from '../../components/sales/sales.component';
import About from '../../components/about/about.component';
import Footer from '../../components/footer/footer.component';

const Homepage = () => {

	return ( 
         <HomepageContainer>
           <div className='others'>
              {/* <Header /> */}
              <br />
              <Hero />
              <br />
              <div className='sub-hero'>
                <SubHero />
                <SubHeroRight />
              </div>
               <br />
              <Sponsors />
              <div className='sorel'>
                <Sorel />
                <SorelRight />
              </div>
              <br />
              <div className='crown'>
                <Crown />
                <CrownRight />
              </div>
              <br />
              <div className='collectibles'>
                 <Collectibles />
                 <CollectiblesRight />
              </div>
             
              <br />
              <FeatureTitle />
               <br />
              <div className='feature'>
                 <Featured />
              </div>
              <br />
              <SocialMedia />
              <br />
              <Sales /> 
              <About/>
              <br /> 
              <br />
            </div>
            <div className='footer'>
                <Footer />
              </div>
            </HomepageContainer>
           
	);
}; 


export default Homepage;