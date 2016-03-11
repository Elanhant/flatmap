/**
 * Get items
 */
export const ITEM_LIST_GET = 'ITEM_LIST_GET';

export function getItems() {
    return function (dispatch, getState) {
        let itemList = localStorage.getItem('items');
        itemList = itemList ? JSON.parse(itemList) : [];

        dispatch({
            type: ITEM_LIST_GET,
            payload: {
                itemList
            }
        })
    }
}

/**
 * Filter items
 */
export const ITEM_LIST_FILTER = 'ITEM_LIST_FILTER';

export function filterItems(needle) {
    return {
        type: ITEM_LIST_FILTER,
        payload: {
            needle
        }
    };
}