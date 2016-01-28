import React from 'react';
import bem from '../decorators/bem';

const StorageList = (bem, props) => {
    return (
        <ul className={bem.block()}>
            {Object.keys(props.data).map( key => {
                return (
                    <li key={key} className={bem.element('entry')}>
                        {props.data[key].name}
                    </li>
                );
            })}
        </ul>
    )
};

export default bem({
    block: 'storageList'
})(StorageList);