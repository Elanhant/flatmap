import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './storage.scss';

class Storage extends React.Component {
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
            <g>
                {this.props.isCurrent && (
                    <polygon points={d}
                             styleName="pulse"
                             stroke={this.props.color}
                             strokeWidth={20}
                             fill="#fff"
                    />
                )}
                <polygon points={d}
                         stroke={this.props.color}
                         strokeWidth={1}
                         fill={this.props.color}
                />
            </g>
        )
    }
}

export default CSSModules(Storage, styles);