// pure component apke component ki same data ke rerendering ko rokta hai. ye sirf class component me use hota hai. functional component me use karne ke liye useMemo hook hota hai.

import React from "react";

class PureComp extends React.PureComponent {

    // pure component likhne se same value par rendering nahi hogi agr kuch change nahi hua to.
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }
    render() {
        console.log("check rendering")
        return (
            <>
                <h1>Hello count is {this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button >

                {/* +1 karne se value badhegi to rerendering hogi. par agar value badi nahi to rerendering stop hogi pureComponent use karne se. */}
            </>
        )
    }
}

export default PureComp;

