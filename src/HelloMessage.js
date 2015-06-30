import React from 'react';

import MessageDisplay from './MessageDisplay';

export default class HelloMessage extends React.Component {
    // es7.functionBind, es7.classProperties
    updateModel = ::this.updateModel;
    reset = ::this.reset;

    constructor(props) {
        super(props);
        this.state = {greeting: this.props.greeting};
    }
    reset() {
        this.setState({greeting: ""});
        React.findDOMNode(this.refs.in).focus();
    }
    updateModel(event) {
        this.setState({greeting: event.target.value});
    }
    render() {
        return (
        <div>
            <input ref="in"
                   onChange={this.updateModel}
                   value={this.state.greeting} />
            <MessageDisplay
                {...this.state} // es7.objectRestSpread
                />
            <button
                   onClick={this.reset}>Clear</button>
        </div>);
    }
}