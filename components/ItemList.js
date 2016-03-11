import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './itemList.scss';

import Item from './Item.js';

const ItemList = props => {
    return (
        <ul styleName="list">
            {Object.keys(props.data).map( key => {
                return (
                    <Item key={key} styleName="item" data={props.data[key]}>
                    </Item>
                );
            })}
        </ul>
    )
};

export default CSSModules(ItemList, styles);