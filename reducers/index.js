import { combineReducers } from 'redux';
import itemList from './itemList'
import storage from './storage'
import storageList from './storageList'

const rootReducer = combineReducers({
    itemList,
    storage,
    storageList
});

export default rootReducer;