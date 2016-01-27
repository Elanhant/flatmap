import { combineReducers } from 'redux';
import storage from './storage'
import storageList from './storageList'

const rootReducer = combineReducers({
    storage,
    storageList
});

export default rootReducer;