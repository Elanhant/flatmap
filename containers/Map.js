import React from 'react';
import { connect } from 'react-redux';
import * as StorageActions from '../actions/storage.js';

import Storage from '../components/Storage.js';
import StorageForm from './StorageForm.js';

@connect(
    state => ({
        storage: state.storage,
        storageList: state.storageList
    })
)
export default class Map extends React.Component {
    state = {
        newStorage: false,
        gridCoords: [],
        step: 20
    };

    componentDidMount() {
        this.recalculateGrid();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.width != this.props.width || nextProps.height != this.props.height) {
            this.recalculateGrid(nextProps.width, nextProps.height);
        }
    }

    recalculateGrid(width = 800, height = 600) {
        const { step } = this.state;

        let gridCoords = [];
        for (let i = 0; i <= width; i += step) {
            gridCoords.push({
                x1: i,
                y1: 0,
                x2: i,
                y2: height
            })
        }
        for (let j = 0; j <= height; j += step) {
            gridCoords.push({
                x1: 0,
                y1: j,
                x2: width,
                y2: j
            })
        }

        this.setState({
            gridCoords
        });
    }

    startNewStorage() {
        this.props.dispatch(StorageActions.newStorage());
    }

    cancelNewStorage() {
        this.props.dispatch(StorageActions.cancelStorage());
    }

    addStoragePoint(e) {
        if (!this.props.storage.newStorage) {
            return;
        }
        const { storage: { points = [] } } = this.props;
        const { step } = this.state;

        if (e.ctrlKey) {
            this.props.dispatch(StorageActions.popStoragePoint());
            return;
        }
        const
            el = e.target,
            dim = el.getBoundingClientRect();
        let
            x = e.clientX - dim.left,
            y = e.clientY - dim.top;
        if (e.shiftKey && points.length > 0) {
            const lastAddedPoint = points[points.length - 1];
            let tg = Math.abs(lastAddedPoint.y - y) / Math.abs(lastAddedPoint.x - x);
            if (tg > Math.sqrt(2) / 2) {
                x = lastAddedPoint.x;
            } else {
                y = lastAddedPoint.y;
            }
        }

        const modX = x % step;
        x = modX <= step / 2 ? x - modX : x + 20 - modX;

        const modY = y % step;
        y = modY <= step / 2 ? y - modY : y + 20 - modY;

        this.props.dispatch(StorageActions.pushStoragePoint(x, y));
    }

    saveNewStorage() {
        const { storage: { points = [] } } = this.props;
        if (points.length < 3) {
            alert("The storage needs at least 3 points");
            return;
        }
        this.props.dispatch(StorageActions.saveStorage());
    }

    renderLastPoint() {
        const { storage: { points = [], color } } = this.props;
        const { step } = this.state;

        if (points.length === 0) {
            return null;
        }
        const lastPoint = points[points.length - 1];
        return (
            <circle cx={lastPoint.x} cy={lastPoint.y} r={step / 2} stroke="white" strokeWidth="2" fill={color} />
        );
    }

    render() {
        const { gridCoords } = this.state;
        const {
            storage: { points = [], newStorage, color },
            storageList: { entries = [], filtered = [], filterBy = null },
            width = 800,
            height = 600
            } = this.props;

        const storages = filterBy ? filtered : entries;

        return (
            <section>
                <StorageForm />
                <svg width={width} height={height} onClick={this.addStoragePoint.bind(this)}>
                    {gridCoords.map( ({ x1, y1, x2, y2 }) =>
                        <line key={`${x1} ${y1} ${x2} ${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} style={{stroke: "rgba(181, 181, 181, .7)", strokeWidth: 1}} />
                    )}
                    {storages.map( (entry, idx) => <Storage key={idx} data={entry.points} color={`#${entry.color}`} /> )}
                    <Storage data={points} color={color} />
                    {this.renderLastPoint()}
                </svg>
            </section>
        );
    }
}