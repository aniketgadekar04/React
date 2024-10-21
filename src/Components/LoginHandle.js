import { useState } from "react";

function LoginHandle() {
    const [data, setData] = useState("")
    const [pass, setPass] = useState("")
    const [useErr, setUseErr] = useState(false)
    const [passErr, setPassErr] = useState(false)

    // console.log(data)
    // console.log(pass)

    function userhand(e) {
        let item = e.target.value;

        if (item.length <= 4) {
            // console.warn("Plz enter more than 8 character")
            setUseErr(true)
        }
        else {
            setUseErr(false)
        }
        // console.log(e.target.value.length)

        setData(item)
    }

    function passhand(e) {
        let item = e.target.value;

        if (item.length <= 4) {
            // console.warn("Plz enter more than 8 character")
            setPassErr(true)
        }
        else {
            setPassErr(false)
        }
        // console.log(e.target.value.length)

        setPass(item)

    }

    // console.log(userhand)

    function loghand(e) {
        e.preventDefault()

        if (data.length < 5 || pass.length < 5) {
            alert("Not Submited")
        }
        else {
            alert("Submitted")
        }
    }
    return (
        <>
            <form onSubmit={loghand}>
                <h1>Login</h1>
                <input placeholder="username" type="text" onChange={userhand}></input>
                {useErr ? <span>Plz enter More than 4 char</span> : ""}
                <br></br>
                <input placeholder="password" type="password" onChange={passhand} ></input>
                {passErr ? <span>Plz enter More than 4 char</span> : ""}
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default LoginHandle;