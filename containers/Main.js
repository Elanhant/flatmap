import React from 'react';
import { connect } from 'react-redux';
import * as StorageListActions from '../actions/storageList.js';
import Map from './Map.js';
import SearchField from '../components/SearchField.js';
import StorageListContainer from './StorageList.js';

@connect()
export default class Main extends React.Component {
    componentDidMount() {
        this.props.dispatch(StorageListActions.getStorages());
    }

    render() {
        return (
            <section style={{display: 'table'}}>
                <div style={{width: '50%', display: 'table-cell'}}>
                    <SearchField />
                    <Map />
                </div>
                <div style={{width: '50%', display: 'table-cell'}}>
                    <StorageListContainer />
                </div>
            </section>
        )
    }
}