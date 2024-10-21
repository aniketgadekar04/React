import React, { Fragment } from "react"
import { Table } from "react-bootstrap";

function FragmentUse(props) {
    return (
        // there are three types to declare Fragment. 
        //    1. <React.Fragment></React.Fragment>
        //    2. <Fragment></Fragment>
        //    3. <></>

        <>
           <td>{props.gam}</td>
        </>
    )
}

export default FragmentUse;