import React from 'react';
import ReactMarkdown from 'react-markdown';
import CSSModules from 'react-css-modules';
import styles from './item.scss';

class Item extends React.Component {
    constructor() {
        super();
        this.state = {
            fullView: false
        };
    }

    toggleView() {
        this.setState({
            fullView: !this.state.fullView
        });
    }

    render() {
        const { data = {} } = this.props;
        return (
            <div className={this.props.className} styleName="main">
                <h4 styleName="name" onClick={() => this.toggleView()}>{data.name}</h4>
                <div styleName={this.state.fullView ? "full" : "hidden"}>
                    <ReactMarkdown source={data.description || 'No description'} styleName="desc" />
                    <ReactMarkdown source={data.details || 'No details'} styleName="details" />
                    <div styleName="date">{data.date}</div>
                </div>
            </div>
        );
    }
}

export default CSSModules(Item, styles);