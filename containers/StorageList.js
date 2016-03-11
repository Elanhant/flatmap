import React from 'react';
import { connect } from 'react-redux';
import { filterStorages } from '../actions/storageList.js';
import { newItem } from '../actions/item.js';

import SearchField from '../components/SearchField.js';
import StorageList from '../components/StorageList.js';

@connect(
    state => ({
        storage: state.storage,
        storageList: state.storageList
    })
)
export default class StorageListContainer extends React.Component {
    handleSearch(needle) {
        this.props.dispatch(filterStorages(needle));
    }

    handleNewItem(storage) {
        this.props.dispatch(newItem(storage));
    }

    render() {
        const {
            storageList: { entries = [], filtered = [], filterBy = null },
            } = this.props;
        const storages = filterBy ? filtered : entries;

        return (
            <section>
                <SearchField placeholder="Filter storages..." onChange={this.handleSearch.bind(this)} />
                <StorageList data={storages} onNewItem={this.handleNewItem.bind(this)} />
            </section>
        );
    }
}