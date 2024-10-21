import React from "react";

class LifeCycleMethod extends React.Component {
    constructor() {
        super();
        this.state = {
            count: true
        }
    }

    componentWillUnmount() {
        alert("hey")
    }
    render() {
        return (
            <>
                {
                    this.state.count ? <h1>Child add</h1> : <h1>Child remove</h1>
                }
                <button onClick={() => this.setState({ count: !this.state.count })}>toggle</button>
            </>
        )
    }
}

export default LifeCycleMethod;
