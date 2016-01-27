import React from 'react';

export default class Storage extends React.Component {
    //static defaultProps = { multiplier: 20 };

    prepareData() {
        let collector = this.props.data.map(chunk => {
            let xNext = chunk.x;
            let yNext = chunk.y;
            return `${xNext},${yNext}`;
        });

        return collector.join(' ');
    }

    render() {
        let d = this.prepareData();
        return(
            <polygon points={d}
                  stroke={this.props.color}
                  strokeWidth={1}
                  fill={this.props.color}
            />
        )
    }
}
