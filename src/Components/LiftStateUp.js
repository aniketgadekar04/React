// lifting state up means child se parent me data transfer karna.

function LiftStateUp(pro) {
    const data = "Anil sidhu"
    return (
        <>
            <h1>Name is {data}</h1>
            <button onClick={() => pro.john(data)}>Sub</button>
        </>
    )
}

export default LiftStateUp;


// ye component child component hai aur App.js parent component hai is component se us component me hamne data pass kiya.

