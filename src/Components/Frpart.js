import FragmentUse from "./FragmentUse";
import { Table } from "react-bootstrap";
function Frpart() {

    const users = [
        { name: "aniket", age: "44", contact: "353" },
        { name: "bunty", age: "32", contact: "23" },
        { name: "kita", age: "74", contact: "655" },
        { name: "maddy", age: "21", contact: "33" },
    ]

    // const users = { name: "aniket", age: "44", contact: "353" }


    // let users = [1, 3, 4, 5]
    return (
        <>
            <Table>
                <tboday>
                    {users.map((e) =>
                        <tr>
                            <FragmentUse gam={e.name} />
                            <FragmentUse gam={e.age} />
                            <FragmentUse gam={e.contact} />
                        </tr>
                    )}
                </tboday>
            </Table>
        </>
    )
}

export default Frpart;

