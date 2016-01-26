import React from 'react';

export default class Storage extends React.Component {
    //static defaultProps = { multiplier: 20 };

    prepareData() {
        let collector = this.props.data.map(chunk => {
            let xNext = chunk[0];
            let yNext = chunk[1];
            return `${xNext},${yNext}`;
        });

        return collector.join(' ');
    }

    render() {
        let d = this.prepareData();
        console.log(d);
        return(
            <polygon points={d}
                  stroke={this.props.color}
                  strokeWidth={1}
                  fill={this.props.color}
            />
        )
    }
}
