// props ka use components me data pass karne ke liye hota haii..
// props is just like parameter of functions..
// props mean properties.

function Propfunc(pro) {
    return (
        < >
            <h1 style={{ backgroundColor: "red", color: "white", margin: "22px", textAlign: "center" }}>Hello {pro.name}</h1>
            <h3 style={{ backgroundColor: "skyblue", color: "red", margin: "22px", textAlign: "center" }}>Email is {pro.email}</h3>
            <h3 style={{ backgroundColor: "skyblue", color: "red", margin: "22px", textAlign: "center" }}>Adress is {pro.other.add}</h3>
            <h3 style={{ backgroundColor: "skyblue", color: "red", margin: "22px", textAlign: "center" }}>Year is {pro.other.year}</h3>
        </>
    )
}

export default Propfunc;