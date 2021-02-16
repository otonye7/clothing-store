import React from 'react';
import Header from '../../components/header/header.component';
import { HomepageContainer } from './homepage.styles';
import SubHeader from '../../components/subheader/subheader.component';
import Hero from '../../components/hero/hero.component';
import SubHero from '../../components/sub-hero/sub-hero.component';
import Sponsors from '../../components/sponsors/sponsors.component';
import Sorel from '../../components/sorel/sorel.component';
import Crown from '../../components/crown/crown.component';
import Collectibles from '../../components/collectibles/collectibles.component';
import Featured from '../../components/featured/featured.component';
import Sales from '../../components/sales/sales.component';
import About from '../../components/about/about.component';
import Footer from '../../components/footer/footer.component';

const Homepage = () => {

	return ( 
         <HomepageContainer>
           <div>
              <Header />
              <SubHeader />
              <br />
              <Hero />
              <SubHero />
              <Sponsors />
              <Sorel />
              <Crown />
              <Collectibles />
              <br />
              <Featured />
              <Sales />
              <About/>
              <Footer />
            </div>
            </HomepageContainer>
           
	);
}; 


export default Homepage;