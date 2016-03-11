import React from 'react';
import { connect } from 'react-redux';
import { filterItems } from '../actions/itemList.js';

import SearchField from '../components/SearchField.js';
import ItemList    from '../components/ItemList.js';

@connect(
    state => ({
        itemList: state.itemList
    })
)
export default class ItemsListContainer extends React.Component {
    handleSearch(needle) {
        this.props.dispatch(filterItems(needle));
    }

    render() {
        const {
            itemList: { entries = [], filtered = [], filterBy = null },
            } = this.props;
        const items = filterBy ? filtered : entries;

        return (
            <section>
                <SearchField placeholder="Filter items..." onChange={this.handleSearch.bind(this)} />
                <ItemList data={items} />
            </section>
        );
    }
}