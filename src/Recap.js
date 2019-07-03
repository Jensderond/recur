import React, { Component } from 'react';
import Tooltip from './Tooltip';

class Recap extends Component {
    render() {
        return (
            <div className="inline-block pb-4">
                <Tooltip placement="right" content="Totale maandelijkse uitgave">
                  <p className="text-3xl text-blue-600">{this.props.currency + this.props.value}</p>
                </Tooltip>
            </div>
        );
    }
}

export default Recap;
