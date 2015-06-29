import React from 'react';

// if you forget export, you might get Uncaught TypeError: type.toUpperCase is not a function
// if you forget default, you might get Uncaught TypeError: Cannot read property 'toUpperCase' of undefined
export default class HelloMessage extends React.Component {
    updateModel = ::this.updateModel;
    reset = ::this.reset;

    constructor(props) {
        super(props);
        this.state = {greeting: this.props.greeting};
    }
    reset() {
        this.setState({greeting: ""});
        this.refs.in.getDOMNode().focus();
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
            <p>{this.state.greeting}, World</p>
            <button
                   onClick={this.reset}>Clear</button>
        </div>);
    }
}