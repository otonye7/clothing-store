
import React from 'react';
import Header from '../../components/header/header.component';
import SubHeader from '../../components/subheader/subheader.component';
import Hero from '../../components/hero/hero.component';
import SubHero from '../../components/sub-hero/sub-hero.component';
import Sponsors from '../../components/sponsors/sponsors.component';
import Sorel from '../../components/sorel/sorel.component';
import Crown from '../../components/crown/crown.component';
import Collectibles from '../../components/collectibles/collectibles.component';
import Featured from '../../components/featured/featured.component';

const Homepage = () => {

	return ( 
         
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
            </div>
           
	);
}; 


export default Homepage;