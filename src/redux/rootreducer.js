import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import headerReducer from './header/header.reducer';
import menReducer from './men-arrival/men-arrival.reducer';
import womenReducer from './women-arrival/women-arrival.reducer';
import sorelReducer from './sorel-arrival/sorel-arrival.reducer';
import newBalanceReducer from  './new-balance-arrival/new-balance-arrival.reducer';

const persistConfig  = {
    key: 'root',
    storage,
    whitelist: ['header']
}

const rootReducer = combineReducers({
    header: headerReducer,
    mens: menReducer,
    womens: womenReducer,
    sorel: sorelReducer,
    newBalance: newBalanceReducer
});

export default persistReducer(persistConfig, rootReducer)