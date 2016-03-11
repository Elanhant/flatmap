/**
 * Save storage
 */
export const ITEM_SAVE = 'ITEM_SAVE';

export function saveItem(itemData) {
    return function (dispatch, getState) {
        let itemsList = localStorage.getItem('items');
        itemsList = itemsList ? JSON.parse(itemsList) : [];

        const item = getState().item;
        itemsList.push(item);

        localStorage.setItem('items', JSON.stringify(itemsList));

        dispatch({
            type: ITEM_SAVE,
            payload: {
                item
            }
        })
    }
}