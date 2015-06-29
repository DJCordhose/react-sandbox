import React from 'react';

export default class MessageDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <p>{this.props.greeting}, World</p>;
    }
}
