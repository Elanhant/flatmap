import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './searchField.scss';

const SearchField = props => {
    return (
        <div styleName="wrapper">
            <input
                styleName="input"
                type="text"
                {...props}
                onChange={ e => props.onChange(e.target.value) }
            />
            <i styleName="icon"></i>
        </div>
    )
};

export default CSSModules(SearchField, styles);