import { Table } from 'react-bootstrap'

function ArrayMap() {

    const students = [{
        name: "aniket", contact: "8976", address: [
            { city: "Mumbai", state: "MH", country: "india" },
            { city: "Mumbai", state: "MH", country: "india" },
            { city: "Mumbai", state: "MH", country: "india" },
        ]
    },
    {
        name: "Sidhu", contact: "8976", address: [
            { city: "Mumbai", state: "MH", country: "india" },
            { city: "Mumbai", state: "MH", country: "india" },
            { city: "Mumbai", state: "MH", country: "india" }]
    },
    {
        name: "Rahul", contact: "1571", address: [
            { city: "Mumbai", state: "MH", country: "india" },
            { city: "Mumbai", state: "MH", country: "india" },
            { city: "Mumbai", state: "MH", country: "india" }]
    },
    {
        name: "Sachin", contact: "4651", address: [
            { city: "Mumbai", state: "MH", country: "india" },
            { city: "Mumbai", state: "MH", country: "india" },
            { city: "Mumbai", state: "MH", country: "india" }]
    },

    ]

    return (
        <>
            <Table striped variant='dark'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Addresses</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((e, ind) =>
                            <tr key={ind}>
                                <td > {e.name}</td>
                                <td>{e.contact}</td>
                                <td>
                                    <Table striped variant='dark'>
                                        <tbody> {e.address.map((a) =>
                                            <tr>
                                                <td>{a.city}</td>
                                                <td>{a.state}</td>
                                                <td>{a.country}</td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </Table >
                                </td>
                            </tr>
                        )}
                </tbody>
            </Table >
        </>
    )
}

export default ArrayMap;
