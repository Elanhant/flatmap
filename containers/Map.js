import React from 'react';
import Storage from '../components/Storage.js';

export default class Map extends React.Component {
    state = {
        newStorage: false,
        newStorageCoords: [],
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
        this.setState({
            newStorage: true,
            newStorageCoords: []
        });
    }

    cancelNewStorage() {
        this.setState({
            newStorage: false,
            newStorageCoords: []
        });
    }

    addStorageCoords(e) {
        if (!this.state.newStorage) {
            return;
        }
        const { newStorageCoords, step } = this.state;

        if (e.ctrlKey) {
            let newCoords = [].concat(newStorageCoords);
            newCoords.pop();
            this.setState({
                newStorageCoords: newCoords
            });
            return;
        }
        const
            el = e.target,
            dim = el.getBoundingClientRect();
        let
            x = e.clientX - dim.left,
            y = e.clientY - dim.top;
        if (e.shiftKey && newStorageCoords.length > 0) {
            const lastAddedCoord = newStorageCoords[newStorageCoords.length - 1];
            let tg = Math.abs(lastAddedCoord[1] - y) / Math.abs(lastAddedCoord[0] - x);
            if (tg > Math.sqrt(2) / 2) {
                x = lastAddedCoord[0];
            } else {
                y = lastAddedCoord[1];
            }
        }

        const modX = x % step;
        x = modX <= step / 2 ? x - modX : x + 20 - modX;

        const modY = y % step;
        y = modY <= step / 2 ? y - modY : y + 20 - modY;

        this.setState({
            newStorageCoords: [].concat(this.state.newStorageCoords).concat([[x, y]])
        });
    }

    renderLastPoint() {
        const { newStorageCoords, step } = this.state;
        if (newStorageCoords.length === 0) {
            return null;
        }
        const lastCoords = newStorageCoords[newStorageCoords.length - 1];
        return (
            <circle cx={lastCoords[0]} cy={lastCoords[1]} r={step / 2} fill="purple" />
        );
    }

    render() {
        const { newStorage, newStorageCoords, gridCoords } = this.state;
        const { width = 800, height = 600 } = this.props;

        return (
            <section>
                <div>
                    { !newStorage && <button onClick={this.startNewStorage.bind(this)}>Add new Storage</button> }
                    { newStorage && <button onClick={this.cancelNewStorage.bind(this)}>Cancel</button> }
                </div>
                <svg width={width} height={height} onClick={this.addStorageCoords.bind(this)}>
                    {gridCoords.map( ({ x1, y1, x2, y2 }) =>
                        <line key={`${x1} ${y1} ${x2} ${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} style={{stroke: "rgba(181, 181, 181, .7)", strokeWidth: 1}} />
                    )}
                    <Storage data={newStorageCoords} color="purple" />
                    {this.renderLastPoint()}
                </svg>
            </section>
        );
    }
}