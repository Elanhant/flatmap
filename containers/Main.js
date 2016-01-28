import React from 'react';
import { connect } from 'react-redux';
import * as StorageListActions from '../actions/storageList.js';
import Map from './Map.js';
import Header from '../components/Header.js';
import SearchField from '../components/SearchField.js';
import StorageListContainer from './StorageList.js';

@connect()
export default class Main extends React.Component {
    componentDidMount() {
        this.props.dispatch(StorageListActions.getStorages());
    }

    render() {
        return (
            <main>
                <Header>
                    <SearchField placeholder="Find" />
                </Header>
                <section style={{display: 'table', width: '100%'}}>
                    <div style={{width: '50%', display: 'table-cell'}}>
                        <Map />
                    </div>
                    <div style={{width: '25%', display: 'table-cell'}}>
                        <StorageListContainer />
                    </div>
                    <div style={{width: '25%', display: 'table-cell'}}>
                    </div>
                </section>
            </main>
        )
    }
}