import { default as ActionTypes } from '../actions'

const initialState = {
    name: '',
    description: null,
    details: null,
    date: null,
    storage: null,
    newItem: false,
    saved: false
};

export default function item(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ITEM_NEW:
            return Object.assign({}, initialState, {
                newItem: true,
                storage: action.payload.storage
            });
        case ActionTypes.ITEM_CANCEL:
            return Object.assign({}, initialState, {
                newItem: false
            });
        case ActionTypes.ITEM_UPDATE:
            return Object.assign({}, state, action.payload.data);
        case ActionTypes.ITEM_SAVE:
            return Object.assign({}, initialState, {
                saved: true
            });
        default:
            return state;
    }
}