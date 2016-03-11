import React from 'react';
import createFragment from 'react-addons-create-fragment';
import { connect } from 'react-redux';
import * as ItemListActions from '../actions/itemList.js';
import * as StorageListActions from '../actions/storageList.js';
import Map from './Map.js';
import Header from '../components/Header.js';
import SearchField from '../components/SearchField.js';
import ItemForm from '../forms/ItemForm.js';
import ItemsListContainer from './ItemsList.js';
import StorageListContainer from './StorageList.js';

@connect(
    state => ({
        item: state.item
    })
)
export default class Main extends React.Component {
    componentDidMount() {
        this.props.dispatch(ItemListActions.getItems());
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
                        <ItemsListContainer />
                        {this.props.item.newItem && <ItemForm />}
                    </div>
                </section>
            </main>
        )
    }
}