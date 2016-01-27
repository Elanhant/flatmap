/**
 * Get storages
 */
export const STORAGE_LIST_GET = 'STORAGE_LIST_GET';

export function getStorages() {
    return function (dispatch, getState) {
        let storageList = localStorage.getItem('storages');
        storageList = storageList ? JSON.parse(storageList) : {};

        dispatch({
            type: STORAGE_LIST_GET,
            payload: {
                storageList
            }
        })
    }
}