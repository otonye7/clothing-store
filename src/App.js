import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import MenPage from './pages/men-new-arrival/men-new-arrival.component';
import WomenPage from './pages/women-new-arrival/women-new-arrival.component';
import SorelPage from './pages/sorel-new-arrival/sorel-new-arrival.component';
import NewBalancePage from './pages/new-balance-arrival/new-balance-arrival.component';
import RomanticCrownPage from './pages/romantic-crown/romantic-crown.component';
import ColumbiaPage from './pages/columbia/columbia.component';
import NewArrivalPage from './pages/new-arrival/new-arrival.component';
import MenCollectionPage from './pages/men-collection-arrival/men-collection-arrival.component';
import WomenCollectionPage from './pages/women-collection-arrival/women-collection-arrival.component';
import SalesPage from './pages/sales-arrival/sales-arrival.component';
import KidsPage from './pages/kids/kids.component';
import BrandsArrivalPage from './pages/brands/brands.component';
import SignIn from './pages/sign-in/sign-in.component';
import SignUp from './pages/sign-up-page/sign-up-page.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import BurgerIcon from './components/subheader/subheader.component';
import { Switch, Route } from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils.js';
import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef =  await createUserProfileDocument(userAuth) 
          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
          })
      }
      this.setState({currentUser: userAuth})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
    <div className="App">
    <div className='headers'>
        <Header currentUser={this.state.currentUser}/>
    </div>

     <div className='sub-headers'>
         <BurgerIcon />
     </div>
     
      
        <Switch>
					<Route  path={'/'} exact={true}  component={Homepage} />
          <Route path={'/men-new-arrival'} component={MenPage} />
          <Route path={'/women-new-arrival'} component={WomenPage} />
          <Route path={'/sorel-new-arrival'} component={SorelPage} />
          <Route path={'/new-balance-arrival'} component={NewBalancePage} />
          <Route path={'/romantic-crown'} component={RomanticCrownPage} />
          <Route path={'/columbia'} component={ColumbiaPage} />
          <Route path={'/new-arrival'} component={NewArrivalPage} />
          <Route path={'/men'} component={MenCollectionPage} />
          <Route path={'/women'} component={WomenCollectionPage} />
          <Route path={'/kids'} component={KidsPage} />
          <Route path={'/brands'} component={BrandsArrivalPage} />
          <Route path={'/sales'} component={SalesPage} />
          <Route path={'/signin'} component={SignIn} />
          <Route path={'/signup'} component={SignUp} />
          <Route exact path={'/checkout'} component={CheckoutPage} />
			</Switch>
    </div>
  );
  }
  
}

export default App;
