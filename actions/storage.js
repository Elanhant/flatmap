/**
 * Declare a new storage
 */
export const STORAGE_NEW = 'STORAGE_NEW';

export function newStorage() {
    return {
        type: STORAGE_NEW
    };
}

/**
 * Cancel new storage
 */
export const STORAGE_CANCEL = 'STORAGE_CANCEL';

export function cancelStorage() {
    return {
        type: STORAGE_CANCEL
    };
}

/**
 * Add storage point
 */
export const STORAGE_PUSH_POINT = 'STORAGE_PUSH_POINT';

export function pushStoragePoint(x, y) {
    return {
        type: STORAGE_PUSH_POINT,
        payload: {
            x, y
        }
    };
}

/**
 * Remove last added storage point
 */
export const STORAGE_POP_POINT = 'STORAGE_POP_POINT';

export function popStoragePoint() {
    return {
        type: STORAGE_POP_POINT
    };
}

/**
 * Update storage
 */
export const STORAGE_UPDATE = 'STORAGE_UPDATE';

export function updateStorage(data) {
    return function (dispatch, getState) {
        dispatch({
            type: STORAGE_UPDATE,
            payload: {
                data
            }
        })
    }
}

/**
 * Save storage
 */
export const STORAGE_SAVE = 'STORAGE_SAVE';

export function saveStorage() {
    return function (dispatch, getState) {
        let storageList = localStorage.getItem('storages');
        storageList = storageList ? JSON.parse(storageList) : [];

        const storage = getState().storage;
        storageList.push(storage);

        localStorage.setItem('storages', JSON.stringify(storageList));

        dispatch({
            type: STORAGE_SAVE,
            payload: {
                storage
            }
        })
    }
}

/**
 * Select storage
 */
export const STORAGE_SELECT = 'STORAGE_SELECT';

export function selectStorage(storage) {
    return {
        type: STORAGE_SELECT,
        payload: {
            storage
        }
    };
}

/**
 * Deselect storage
 */
export const STORAGE_DESELECT = 'STORAGE_DESELECT';

export function deselectStorage() {
    return {
        type: STORAGE_DESELECT,
        payload: {}
    };
}