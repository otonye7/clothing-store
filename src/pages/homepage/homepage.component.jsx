
import React from 'react';
import Header from '../../components/header/header.component';
import SubHeader from '../../components/subheader/subheader.component';
import Hero from '../../components/hero/hero.component';
import SubHero from '../../components/sub-hero/sub-hero.component';
import Sponsors from '../../components/sponsors/sponsors.component';
import Sorel from '../../components/sorel/sorel.component';

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
            </div>
           
	);
}; 


export default Homepage;