import { default as ActionTypes } from '../actions'

const initialState = {
    name: '',
    points: [],
    color: 'black',
    saved: false,
    newStorage: false
};

export default function storage(state = initialState, action) {
    let points;
    switch (action.type) {
        case ActionTypes.STORAGE_NEW:
            return Object.assign({}, initialState, {
                newStorage: true
            });
        case ActionTypes.STORAGE_CANCEL:
            return Object.assign({}, initialState, {
                newStorage: false
            });
        case ActionTypes.STORAGE_PUSH_POINT:
            const { x, y } = action.payload;
            points = [].concat(state.points);
            points.push({x, y});
            return Object.assign({}, state, {
                points
            });
        case ActionTypes.STORAGE_POP_POINT:
            points = [].concat(state.points);
            points.pop();
            return Object.assign({}, state, {
                points
            });
        case ActionTypes.STORAGE_UPDATE:
            return Object.assign({}, state, action.payload.data);
        case ActionTypes.STORAGE_SAVE:
            return Object.assign({}, initialState, {
                saved: true
            });
        case ActionTypes.STORAGE_SELECT:
            return Object.assign({}, state, action.payload.storage);
        case ActionTypes.STORAGE_DESELECT:
            return initialState;
        default:
            return state;
    }
}