import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import headerReducer from './header/header.reducer';
import menReducer from './men-arrival/men-arrival.reducer';

const persistConfig  = {
    key: 'root',
    storage,
    whitelist: ['header']
}

const rootReducer = combineReducers({
    header: headerReducer,
    mens: menReducer
});

export default persistReducer(persistConfig, rootReducer)