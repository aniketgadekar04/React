
// function ArrayMap() {

//     // react me ham looping ke liye map fucntion ka use karte hai. 

//     const students = ["Anil", "Rahul", "siddhu", "peter"]

//     students.map((e) => {
//         console.log(e)
//     })

//     // for loop return support nahi karta. sirf map function se looping karenge.
//     return (
//         <>
//             {students.map((e) => {
//                 return <h1>boys name is {e}</h1>
//             })}
//         </>
//     )
// }

// export default ArrayMap;

// -------------------------------------------------------------------------------

// Array of object.

// import { Table } from 'react-bootstrap'

// function ArrayMap() {

//     const students = [{ name: "aniket", contact: "8976", email: "abc@gamil" },
//     { name: "Sidhu", contact: "8976", email: "abc@gamil" },
//     { name: "Rahul", contact: "1571", email: "pqr@gamil" },
//     { name: "Sachin", contact: "4651", email: "xyz@gamil" },

//     ]

//     return (
//         <>

//             {/* {
//                 students.map((e, ind) =>

//                     <div key={ind}><h1 >{e.name}</h1></div>

//                 )} */}

//             <Table striped>
//                 <thead>
//                     <tr>
//                         <th>name</th>
//                         <th> contact</th>
//                         <th>email</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         students.map((e, ind) =>
//                             <tr key={ind}>
//                                 <td > {e.name}</td>
//                                 <td>{e.contact}</td>
//                                 <td> {e.email}</td>
//                             </tr>
//                         )}
//                 </tbody>
//             </Table >
//         </>
//     )
// }

// export default ArrayMap;

// ----------------------------------------------------------------------------------------------------------

import { Table } from 'react-bootstrap'

function ArrayMap() {

    const students = [{ name: "aniket", contact: "8976", email: "abc@gamil" },
    { name: "Sidhu", contact: "8976", email: "abc@gamil" },
    { name: "Rahul", contact: "1571", email: "pqr@gamil" },
    { name: "Sachin", contact: "4651", email: "xyz@gamil" },

    ]

    return (
        <>

            {/* {
                students.map((e, ind) =>

                    <div key={ind}><h1 >{e.name}</h1></div>

                )} */}

            <Table striped>
                <thead>
                    <tr>
                        <th>name</th>
                        <th> contact</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* yaha hamne if else ka use kiya hai ?: as a filter */}
                    {
                        students.map((e, ind) =>
                            e.contact === "1571" ?
                                <tr key={ind}>
                                    <td > {e.name}</td>
                                    <td>{e.contact}</td>
                                    <td> {e.email}</td>
                                </tr>
                                :
                                null
                        )}
                </tbody>
            </Table >
        </>
    )
}

export default ArrayMap;
