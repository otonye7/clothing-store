import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import MenPage from './pages/men-new-arrival/men-new-arrival.component';
import WomenPage from './pages/women-new-arrival/women-new-arrival.component';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Switch>
					<Route  path={'/'} exact={true}  component={Homepage} />
          <Route path={'/men-new-arrival'} component={MenPage} />
          <Route path={'/women-new-arrival'} component={WomenPage} />
			</Switch>
    </div>
  );
}

export default App;
