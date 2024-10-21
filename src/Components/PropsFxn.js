function PropsFxn(Props){
    return(
        <>
            <h1>Data get info</h1>
            <button onClick={()=>Props.data()}>Submit</button>
        </>
    )
}

export default PropsFxn;


// this program is passing props as a fucntion.