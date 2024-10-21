import { useState } from "react";


function IfElseCond() {
    const [cond, setCond] = useState(9)
    return (
        <>
            {cond == 1 ? <h1>Welcome user 1</h1> : cond == 2 ? <h1>Welcome user 2</h1> : <h1>Welcome user 3</h1>}

            {/* if else elseif in react. */}
        </>
    )
}

export default IfElseCond;