import React from 'react';
import { connect } from 'react-redux';
import { selectStorage, deselectStorage } from '../actions/storage.js';
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

    handleSelect(storage) {
        this.props.dispatch(
            storage.name === this.props.storage.name ? deselectStorage() : selectStorage(storage)
        );
    }

    render() {
        const {
            storageList: { entries = [], filtered = [], filterBy = null },
            storage
            } = this.props;
        const storages = filterBy ? filtered : entries;

        return (
            <section>
                <SearchField placeholder="Filter storages..." onChange={this.handleSearch.bind(this)} />
                <StorageList
                    data={storages}
                    activeStorage={storage}
                    onNewItem={this.handleNewItem.bind(this)}
                    onSelect={this.handleSelect.bind(this)}
                />
            </section>
        );
    }
}