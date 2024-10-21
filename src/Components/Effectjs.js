import { useState, useEffect } from "react";

function Datachange() {
    const [data, setData] = useState(10)
    const [count, setCount] = useState(100)


    // ye useEffect sab pe chalega.
    useEffect(() => {
        alert("alert")
    })

    // ye useEffect sirf data keliye chalega.
    useEffect(() => {
        alert("alert")
    }, [data])


    // ye useEffect sirf count keliye chalega.
    useEffect(() => {
        console.log("count")
    }, [count])

    // ,[] ye jo likha hai usme ham condition ko rakhte hai ke kis state pe chalega ye ham decide karenge.

    // useEffect apne aap me ek function ko accept karta hai..
    // useEffect har bar chalega jab state update hogi ya jab component start hoga tab.

    return (
        <>
            <h1>{data}</h1>
            <h1>{count}</h1>
            <button onClick={() => setData(data + 1)}>data</button >
            <button onClick={() => setCount(count + 1)}>count</button >
        </>
    )
}


export default Datachange;


