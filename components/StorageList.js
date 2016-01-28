import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './storageList.scss';

const StorageList = props => {
    return (
        <ul styleName="list">
            {Object.keys(props.data).map( key => {
                return (
                    <li key={key} styleName="item">
                        {props.data[key].name}
                    </li>
                );
            })}
        </ul>
    )
};

export default CSSModules(StorageList, styles);