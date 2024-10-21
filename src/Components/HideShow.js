import { useState } from "react"

function HideShow() {
    const [status, setStatus] = useState(true)
    return (
        <>
            {
                status ?
                    <h1>hello</h1>
                    :
                    null
            }
            <button onClick={() => setStatus(false)}>HIde</button>
            <button onClick={() => setStatus(true)}>Show</button>
            <button onClick={() => setStatus(!status)}>Toggle</button>

        </>
    )
}

export default HideShow;