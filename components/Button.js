import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './button.scss';

const Button = props => {
    return (
        <div>
            <button {...props} styleName="button" />
        </div>
    );
};

export default CSSModules(Button, styles);