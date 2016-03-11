/**
 * Declare a new item
 */
export const ITEM_NEW = 'ITEM_NEW';

export function newItem(storage) {
    return {
        type: ITEM_NEW,
        payload: {
            storage
        }
    };
}

/**
 * Cancel new item
 */
export const ITEM_CANCEL = 'ITEM_CANCEL';

export function cancelItem() {
    return {
        type: ITEM_CANCEL
    };
}

/**
 * Update item
 */
export const ITEM_UPDATE = 'ITEM_UPDATE';

export function updateItem(data) {
    return function (dispatch, getState) {
        dispatch({
            type: ITEM_UPDATE,
            payload: {
                data
            }
        })
    }
}

/**
 * Save item
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