import React, { Component } from 'react';

class Recap extends Component {
    render() {
        return (
            <div>
                <p className="text-3xl mb-4 text-blue-600">{this.props.currency + this.props.value}</p>
            </div>
        );
    }
}

export default Recap;