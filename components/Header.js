import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './header.scss';

const Header = (props) => {
    return (
        <div styleName="header">
            {props.children}
        </div>
    )
};

export default CSSModules(Header, styles);