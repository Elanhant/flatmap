import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './itemPoint.scss';

const ItemPoint = props => {
    return (
        <circle cx={0} cy={0} r={5} stroke="white" strokeWidth="2" fill="#f00" />
    )
};

export default CSSModules(ItemPoint, styles);