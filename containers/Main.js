import React from 'react';
import { connect } from 'react-redux';
import * as StorageListActions from '../actions/storageList.js';
import Map from './Map.js';
import SearchField from '../components/SearchField.js';

@connect()
export default class Main extends React.Component {
    componentDidMount() {
        this.props.dispatch(StorageListActions.getStorages());
    }

    render() {
        return (
            <section>
                <Map />
                <SearchField />
            </section>
        )
    }
}