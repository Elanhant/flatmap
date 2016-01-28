/**
 * Get storages
 */
export const STORAGE_LIST_GET = 'STORAGE_LIST_GET';

export function getStorages() {
    return function (dispatch, getState) {
        let storageList = localStorage.getItem('storages');
        storageList = storageList ? JSON.parse(storageList) : [];

        dispatch({
            type: STORAGE_LIST_GET,
            payload: {
                storageList
            }
        })
    }
}

/**
 * Filter storages
 */
export const STORAGE_LIST_FILTER = 'STORAGE_LIST_FILTER';

export function filterStorages(needle) {
    return {
        type: STORAGE_LIST_FILTER,
        payload: {
            needle
        }
    };
}