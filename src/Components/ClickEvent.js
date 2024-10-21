function ClickEvent() {

    let data = "andy"
    // agar hamne is tarah ke variables used kare to use update karne me problem hogi isliye hum states aur props ka use karte hai.

    function apple() {
        alert(data);
    }
    return (
        <>
            <div>
                {/* <button onClick={apple()}>Click me</button> */}
                {/* isme function ko onclik ke andar call karte vakt () mat do. */}

                {/* <button onClick={apple}>Click me</button> */}
                {/* to dhyan rakhna hai jab bhi function define kare to is tarah use kar. */}


                <button onClick={() => apple()}>Click me</button>
                <button onClick={() => alert('Apple clicked!')}>Click me</button>
                {/* agar direct fuction call karna ho to arrow function use karo. */}
            </div>
        </>
    )
}

export default ClickEvent;