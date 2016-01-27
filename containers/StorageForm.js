import React from 'react';
import CompactPicker from 'react-color/lib/components/CompactPicker';
import { connect } from 'react-redux';
import * as StorageActions from '../actions/storage.js';

@connect(
    state => ({
        storage: state.storage,
        storageList: state.storageList
    })
)
export default class StorageForm extends React.Component {

    startNewStorage() {
        this.props.dispatch(StorageActions.newStorage());
    }

    cancelNewStorage() {
        this.props.dispatch(StorageActions.cancelStorage());
    }

    handleChange(name, value) {
        this.props.dispatch(StorageActions.updateStorage({
            [name]: value
        }));
    }

    handleSubmit(e) {
        e.preventDefault();

        const { storage: { points = [] } } = this.props;
        if (points.length < 3) {
            alert("The storage needs at least 3 points");
            return;
        }
        this.props.dispatch(StorageActions.saveStorage());
    }

    render() {
        const {
            storage
            } = this.props;

        return storage.newStorage ? (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input
                    type="text"
                    name="name"
                    placeholder="Storage name..."
                    value={storage.name}
                    onChange={e => this.handleChange('name', e.target.value)}
                />
                <CompactPicker
                    type="swatches"
                    color={storage.color}
                    onChangeComplete={color => this.handleChange('color', color.hex)}
                />
                <input type="submit" value="Save" />
                <button onClick={this.cancelNewStorage.bind(this)}>Cancel</button>
            </form>
        ) : (
            <div>
                <button onClick={this.startNewStorage.bind(this)}>Add new Storage</button>
            </div>
        );
    }
}