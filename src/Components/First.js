function First() {
    const data = ['a', 'b', 'c', 'd', 'e', 'f'];

    function Second() {
        return <h2>Hello from Second Component</h2>
    }
    return (
        <>
            {data.map((value, index) => <h1 key={index}>{value}</h1>)}

            {/* {Second()} */}
            {/* <Second /> */}
            {/* isme hamne component ke andar second coponent banake use kiya hai. 
            par hum ise bahar use nahi kar sakte. */}

            
        </>
    )
}

export default First;