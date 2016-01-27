import { default as ActionTypes } from '../actions'

const initialState = {
    name: '',
    points: [],
    saved: false,
    newStorage: false
};

export default function storage(state = initialState, action) {
    let points;
    switch (action.type) {
        case ActionTypes.STORAGE_NEW:
            return Object.assign({}, initialState, {
                name: 'New storage',
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
        case ActionTypes.STORAGE_SAVE:
            return Object.assign({}, initialState, {
                saved: true
            });
        default:
            return state;
    }
}