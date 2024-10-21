import { useState } from "react";

function Datachange() {
    const [data, setData] = useState("Aniket")

    function change() {
        setData("Bunty")
    }
    return (
        <>
            <h1>{data}</h1>
            <button onClick={change}>Click me</button>
        </>
    )
}


export default Datachange;

// ------------------------------------------------------------------------------------------

