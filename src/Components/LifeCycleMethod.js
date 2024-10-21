// functional components ke sath ham directly life cycle method nahi use kar sakte. isme hame hooks use karne padte hai.
// class component me ham directly lifecycle method ko use kar sakte hai.

// -----------------------------------------------------------------------------------------

// CONSTRUCTOR LIFE CYCLE METHOD.

// jaisehe ham class ko call karte hai constructor apne aap call ho jata hai.
// isliye jaisehe class banega vaise hee constructor apne aap call ho jayega.
// class component me html render hone se pehle constructor ready ho jata hai isliye ye important hai.
// agar apko aisi koi chij karni hai jo component define hone se pehle bane jaise state define, events to aap constructor me kar sakte ho.
// constructor ka parent jo component hai usko call karne ke liye super() lagate hai. aur super javascript ka part hota hai..
// constructor me ham api ko call nahi karte.

// import React from "react";

// class LifeCycleMethod extends React.Component {
//     constructor() {
//         super();
//         console.log("constructor")

//         this.state = {
//             data: "anil"
//         }
//     }
//     render() {
//         console.log("render")
//         return (
//             <>
//                 <h1>Hello world {this.state.data}</h1>
//                 {console.log("return")}
//             </>
//         )
//     }
// }

// export default LifeCycleMethod;


// -----------------------------------------------------------------------------------------


// RENDER LIFE CYCLE METHOD.

// render ka matlab hota hai prastut karna
// sara html render method ke andar likha jata haii..
// html me ham kuch bhi change karte hai to render method firse chalta hai.. rerender hota hai.
// jab bhi koi state or props update hota hai to render method firse run hota haii..

// render method component ready ho tab second jab bhi state ya props update hoga tab aur html me change hoga tab render method firse call hoga.

// Props and state update ke bad RErender hota hai example.
// import React from "react";

// class LifeCycleMethod extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             email: "ani@3211"
//         }
//     }

//     render() {
//         console.log(this.state.email)
//         return (
//             <>
//                 <button onClick={() => this.setState({ email: "kaka@4332" })}>update</button>
//             </>
//         )
//     }
// }

// export default LifeCycleMethod;

// -----------------------------------------------------------------------------------------

// COMPONENT DID MOUNT LIFE CYCLE METHOD.

// ISKA matlab sabkuch ready hota hai. isme ham api ko call karte hai  ye iska use hai. jo chije html par depend hoti hai vo ham compound did mount me call karte hai jaise hide show karna.

// props and state update ke bad render firse chalta hai lekin componentDidMount nahi chalta. uske badle componentDidUpdate chalta hai.

// ye bar bar call nahi hota isliye isme api ko call karte hai.

// kab use hota hai
// compunddidmount :- jab sab html ready ho.
// compounddidupdate :- jab state ya props update ho tab.


// import React from "react";

// class LifeCycleMethod extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             email: "ani@3211"
//         }
//     }
//     componentDidMount() {
//         console.log("compoundDidMount")
//     }
//     render() {
//         console.log("render")
//         return (
//             <>
//                 <button onClick={() => this.setState({ email: "kaka@4332" })}>update</button>
//             </>
//         )
//     }
// }

// export default LifeCycleMethod;

// -----------------------------------------------------------------------------------------


// COMPONENT DID UPDATE LIFE CYCLE METHOD.

// name same hai but call honeka tarika different hai..

// jab kuch update hoga tab ye chalega uske pehle nahi chalega.

// isme 3 parameter hote hai

// componentDidUpdate(preProps, preState, snapshot)


// import React from "react";

// class LifeCycleMethod extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         }
//         // console.log("constructor")

//     }

//     componentDidUpdate(preProps, preState, snapshot) {

//         console.log("pre state is ", preState)
//         // console.log("compoundDidUpdate")

//         if (preState.count === 3) {
//             alert("3 is already there")
//         }

//         // compountdidupdate me state update karoge to ye infinite bar update hogi isliye yaha update karna ho to condition lagake update kare.
//     }

//     render() {
//         console.log("render")
//         return (
//             <>
//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}>update</button>
//             </>
//         )
//     }
// }

// export default LifeCycleMethod;

// Render ke andar apko kabhi bhi state update nahi karvani.

// ComponentShouldUpdate() ko false karke ham componentDidUpdate() ko call hone se rok sakte hai.

// ---------------------------------------------------------------------------------------------


// SHOULD COMPONENT UPDATE


// LIFE CYCLE METHOD YA RENDERING FIRSE CALL HONE SE ROKTA HAII

// YE UPDATING FASE ME HOTA HAI. YE STATE YA PROPS UPDATE HONE KE BAD CALL HOTA HAI.

// RENDERING STOP KAR SAKTE HAI KISI CONDITION PE.

// import React from "react";

// class LifeCycleMethod extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         }
//         // console.log("constructor")

//     }

//     shouldComponentUpdate() {
//         if (this.state.count < 5) {
//             return true
//         }
//         // by default shouldComponentUpdate() false hota hai..
//         // shouldComponentUpdate() me return false karne se rendering stop ho jati haii..

//     }

//     render() {
//         console.log("render")
//         return (
//             <>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}>update</button>
//             </>
//         )
//     }
// }

// export default LifeCycleMethod;


// --------------------------------------------------------------------------------------------------------------------


// COMPONENTWILLUNMOUNT()

// ye method unmounting phase me hota hai.. jab bhi hamara component dom se remove hoga tab hamara componentwillunmount() method call hoga.


import React from "react";

class LifeCycleMethod extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <>
                <button>update</button>
            </>
        )
    }
}

export default LifeCycleMethod;








