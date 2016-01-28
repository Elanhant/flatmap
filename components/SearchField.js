import React from 'react';
import bem from '../decorators/bem';

const SearchField = (bem, props) => {
    return (
        <div className={bem.block()}>
            <input
                className={bem.element('input')}
                type="text"
                {...props}
                onChange={ e => props.onChange(e.target.value) }
            />
            <i className={bem.element('icon')}></i>
        </div>
    )
};

export default bem({
    block: 'searchField'
})(SearchField);