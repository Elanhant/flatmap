import { default as ActionTypes } from '../actions'

const initialState = {
    entries: [],
    size: 0,
    filtered: [],
    filterBy: null,
    filterSize: 0
};

export default function itemList(state = initialState, action) {
    let entries, item, needle;
    switch (action.type) {
        case ActionTypes.ITEM_LIST_GET:
            entries = action.payload.itemList;
            return Object.assign({}, state, {
                entries,
                size: entries.length
            });
        case ActionTypes.ITEM_SAVE:
            item = action.payload.item;
            return Object.assign({}, state, {
                entries: [].concat(entries).concat([item]),
                size: state.size + 1
            });
        case ActionTypes.ITEM_LIST_FILTER:
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