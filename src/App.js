import './App.css';
import Classc from './Components/Classc.js';
import First from './Components/First.js';
import ClickEvent from './Components/ClickEvent.js';
import Datachange from './Components/Datachange.js';
import Classstate from './Components/Classstate.js';
import Propfunc from './Components/Propfunc.js';
import { useState } from 'react';
import ClassPops from './Components/ClassPops.js';
import InputGet from './Components/InputGet.js';
import HideShow from './Components/HideShow.js';
import FormData from './Components/FormData.js';
import IfElseCond from './Components/IfElseCond.js';
import LoginHandle from './Components/LoginHandle.js';
import PropsFxn from './Components/PropsFxn.js'
import LifeCycleMethod from './Components/LifeCycleMethod.js';
import Willmount from './Components/Willmount.js'
import Effectjs from './Components/Effectjs.js'
import ForStyle from './Components/ForStyle.js';
import BootstrapReact from './Components/BootstrapReact.js';
import ArrayMap from './Components/ArrayMap.js';
import NestedMap from './Components/NestedMap.js'
import Frpart from './Components/Frpart.js';
import LiftStateUp from './Components/LiftStateUp.js';
import PureComp from './Components/PureComp.js';

function App() {

  // const [name, setName] = useState("Anil")

  // function getSet() {
  //   alert("right")
  // }


  function get(e) {
    // alert(e)
    console.log(e)
  }

  return (
    <div style={{ textAlign: "center" }}>
      {/* <First /> */}
      {/* <Classc /> */}
      {/* <ClickEvent /> */}
      {/* <Datachange /> */}
      {/* <Classstate /> */}
      {/* <Propfunc name={name} email="kanha@432991" other={{ add: "Vashi", year: "2000" }} /> */}
      {/* <Propfunc name="aniket" email="ani@432991" other={{ add: "Mumbai", year: "2001" }} /> */}
      {/* <Propfunc name="Rahul" email="peter@432991" other={{ add: "delhi", year: "2001" }} /> */}
      {/* <ClassPops name="Aniket"/> */}

      {/* <InputGet /> */}
      {/* <button onClick={() => { setName("ANIKET") }}>Update name</button> */}

      {/* <HideShow/> */}

      {/* <FormData/> */}

      {/* <IfElseCond /> */}

      {/* <LoginHandle/> */}

      {/* <PropsFxn data={getSet} /> */}

      {/* <LifeCycleMethod name={name} /> */}
      {/* <button onClick={() => setName("sidhu")} >Update</button> */}

      {/* <Willmount /> */}

      {/* <Effectjs /> */}

      {/* <ForStyle/> */}

      {/* <BootstrapReact/> */}

      {/* <ArrayMap/> */}

      {/* <NestedMap/> */}

      {/* <Frpart /> */}

      {/* <LiftStateUp john={get} /> */}

      <PureComp/>

    </div>
  );
}

export default App;
