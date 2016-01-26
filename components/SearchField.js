import React from 'react';
import bem from '../decorators/bem';

const SearchField = (bem, props) => {
    return (
        <div className={bem.block()}>
            <input className={bem.element('input')} type="text" {...props} />
            <i className={bem.element('icon')}></i>
            <div className={bem.element('results')}></div>
        </div>
    )
};

export default bem({
    block: 'searchField'
})(SearchField);