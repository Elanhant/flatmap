import { default as ActionTypes } from '../actions'

const initialState = {
    entries: {},
    size: 0
};

export default function storageList(state = initialState, action) {
    let entries, storage;
    switch (action.type) {
        case ActionTypes.STORAGE_LIST_GET:
            entries = action.payload.storageList;
            return Object.assign({}, state, {
                entries,
                size: Object.keys(entries).length
            });
        case ActionTypes.STORAGE_SAVE:
            storage = action.payload.storage;
            return Object.assign({}, state, {
                entries: Object.assign({
                    [storage.name]: storage
                }, state.entries()),
                size: state.size + 1
            });
        default:
            return state;
    }
}