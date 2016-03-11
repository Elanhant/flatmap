import React from 'react';
import { connect } from 'react-redux';
import { cancelItem, saveItem, updateItem } from '../actions/item.js';

import Button from '../components/Button.js';

@connect(
    state => ({
        item: state.item
    })
)
export default class ItemForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.dispatch(saveItem());
    }

    handleCancel(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.dispatch(cancelItem());
    }

    handleChange(name, value) {
        this.props.dispatch(updateItem({
            [name]: value
        }));
    }

    render() {
        const {
            item
            } = this.props;

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <h4>{item.storage}</h4>
                <input
                    type="text"
                    placeholder="Name"
                    value={item.name}
                    onChange={e => this.handleChange('name', e.target.value)}
                />
                <textarea
                    rows="5"
                    placeholder="Description"
                    value={item.description}
                    onChange={e => this.handleChange('description', e.target.value)}
                />
                <textarea
                    rows="5"
                    placeholder="Placement details"
                    value={item.details}
                    onChange={e => this.handleChange('details', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Placement date"
                    value={item.date}
                    onChange={e => this.handleChange('date', e.target.value)}
                />
                <input type="submit" value="Save" />
                <button onClick={this.handleCancel.bind(this)}>Cancel</button>
            </form>
        )
    }
}