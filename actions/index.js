import * as Item from './item';
import * as ItemList from './itemList';
import * as Storage from './storage';
import * as StorageList from './storageList';

export default {
    ...Item,
    ...ItemList,
    ...Storage,
    ...StorageList
}