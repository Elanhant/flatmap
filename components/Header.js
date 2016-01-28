import React from 'react';
import CSSModules from 'react-css-modules';
import bem from '../decorators/bem';
import styles from './header.scss';

const Header = (props) => {
    return (
        <div styleName="header">
            {props.children}
        </div>
    )
};

export default CSSModules(Header, styles);