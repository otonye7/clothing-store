import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import menReducer from './men-arrival/men-arrival.reducer';
import womenReducer from './women-arrival/women-arrival.reducer';
import sorelReducer from './sorel-arrival/sorel-arrival.reducer';
import newBalanceReducer from  './new-balance-arrival/new-balance-arrival.reducer';
import romanticCrownReducer from './romantic-crown-arrival/romantic-crown-arrival.reducer';
import columbiaReducer from './columbia-arrival/collumbia-arrival.reducer';
import menCollectionReducer from './men/men.reducer';
import womenCollectionReducer from './women/women.reducer';
import cartReducer from './cart/cart.reducer';
import newReducer from './new-arrival/new-arrival.reducer';
import salesReducer from './sales/sales.reducer';

const persistConfig  = {
    key: 'root',
    storage,
    whitelist: ['header']
}

const rootReducer = combineReducers({
    mens: menReducer,
    womens: womenReducer,
    sorel: sorelReducer,
    newBalance: newBalanceReducer,
    romanticCrown: romanticCrownReducer,
    columbia: columbiaReducer,
    news: newReducer,
    menCollection: menCollectionReducer,
    womenCollection: womenCollectionReducer,
    cart: cartReducer,
    sales: salesReducer
});

export default persistReducer(persistConfig, rootReducer)