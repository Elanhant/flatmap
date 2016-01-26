import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map.js';
import SearchField from '../components/SearchField.js';

ReactDOM.render(
    <section>
        <Map />
        <SearchField />
    </section>
    , document.getElementById('app'));
