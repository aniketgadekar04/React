import { useState } from "react";

function InputGet() {
    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)
    function getinput(val) {
        // console.log(val.target.value)

        setData(val.target.value)
        // val.target.value se hame hit hone vali keys milti hai.

        setPrint(false)
        // false se show hona band hota hai..
    }
    return (
        <>
            {
                print ?
                    <h1>{data}</h1>
                    :
                    null
            }
            <input type="text" onChange={getinput}></input>
            {/* onchange se hum function ke dvara keys ko get kar sakte hai. */}

            <button onClick={() => setPrint(true)}>Print</button>
        </>
    )
}

export default InputGet;