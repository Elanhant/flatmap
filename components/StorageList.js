import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './storageList.scss';

const StorageList = props => {
    const onNewItem = (e, storage) => {
        e.preventDefault();
        e.stopPropagation();
        props.onNewItem && props.onNewItem(storage);
    };

    return (
        <ul styleName="list">
            {Object.keys(props.data).map( key => {
                return (
                    <li key={key} styleName={props.activeStorage.name === props.data[key].name ? 'active' : 'item'} onClick={() => props.onSelect && props.onSelect(props.data[key])}>
                        {props.data[key].name}
                        <button onClick={(e) => onNewItem(e, props.data[key].name)}>
                            Add item
                        </button>
                    </li>
                );
            })}
        </ul>
    )
};

export default CSSModules(StorageList, styles);