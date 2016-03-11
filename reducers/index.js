import { combineReducers } from 'redux';
import item from './item'
import itemList from './itemList'
import storage from './storage'
import storageList from './storageList'

const rootReducer = combineReducers({
    item,
    itemList,
    storage,
    storageList
});

export default rootReducer;