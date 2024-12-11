import React, { Component } from 'react'

class ExampleClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }

    changeName = () => {
        this.setState({name: this.state.name+"d"})
    }

    render() {
        return(
            <div>
                <h1>name {this.state.name}</h1>
                <button onClick={this.changeName}>Click Me</button>
            </div>

        )
    }
}

export default ExampleClassComponent;