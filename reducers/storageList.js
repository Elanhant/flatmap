import { default as ActionTypes } from '../actions'

const initialState = {
    entries: [],
    size: 0,
    filtered: [],
    filterBy: null,
    filterSize: 0
};

export default function storageList(state = initialState, action) {
    let entries, storage, needle;
    switch (action.type) {
        case ActionTypes.STORAGE_LIST_GET:
            entries = action.payload.storageList;
            return Object.assign({}, state, {
                entries,
                size: entries.length
            });
        case ActionTypes.STORAGE_SAVE:
            storage = action.payload.storage;
            return Object.assign({}, state, {
                entries: [].concat(state.entries).concat([storage]),
                size: state.size + 1
            });
        case ActionTypes.STORAGE_LIST_FILTER:
            needle = action.payload.needle;

            const cancelFilter = !needle;
            const filtered = cancelFilter ? state.entries : state.entries.filter(
                entry => entry.name.toLowerCase().indexOf(needle.toLowerCase()) !== -1
            );

            return Object.assign({}, state, {
                filtered,
                filterBy: cancelFilter ? null : needle,
                filterSize: filtered.length
            });
        default:
            return state;
    }
}