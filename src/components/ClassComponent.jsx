import React, { Component } from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0, // Состояние count
        };
    }

    increment = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    decrement = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    };

    render() {
        return (
            <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
                <h2>Class Component</h2>
                <p>Current count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}

export default ClassComponent;