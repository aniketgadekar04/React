import React, { Component } from "react";

class Classstate extends Component {

    constructor() {
        super()
        this.state = {
            data: 1
        }
    }

    content() {
        this.setState({ data: this.state.data + 1 })
    }
    render() {
        return (
            <>
                <h1>{this.state.data}</h1>
                <button onClick={() => this.content()}>Click</button>
            </>
        )
    }
}


export default Classstate;