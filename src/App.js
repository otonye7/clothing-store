import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import MenPage from './pages/men-new-arrival/men-new-arrival.component';
import WomenPage from './pages/women-new-arrival/women-new-arrival.component';
import SorelPage from './pages/sorel-new-arrival/sorel-new-arrival.component';
import NewBalancePage from './pages/new-balance-arrival/new-balance-arrival.component';
import RomanticCrownPage from './pages/romantic-crown/romantic-crown.component';
import ColumbiaPage from './pages/columbia/columbia.component';
import SignIn from './pages/sign-in/sign-in.component';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Switch>
					<Route  path={'/'} exact={true}  component={Homepage} />
          <Route path={'/men-new-arrival'} component={MenPage} />
          <Route path={'/women-new-arrival'} component={WomenPage} />
          <Route path={'/sorel-new-arrival'} component={SorelPage} />
          <Route path={'/new-balance-arrival'} component={NewBalancePage} />
          <Route path={'/romantic-crown'} component={RomanticCrownPage} />
          <Route path={'/columbia'} component={ColumbiaPage} />
          <Route path={'/signin'} component={SignIn} />
			</Switch>
    </div>
  );
}

export default App;
