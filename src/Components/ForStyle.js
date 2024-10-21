import './Stylec.css';
import style from './custom.module.css'

function ForStyle() {
    return (
        <>
            {/* There are 3 types of styling in react. */}

            <h1 className='Ap'>Hey, My name is Antheni Gonjai.</h1>
            <h1 style={{ backgroundColor: "yellow" }}>Hey, My name is Antheni Gonjai.</h1>
            <h1 className={style.goldclass}>Hey, My name is Antheni Gonjai.</h1>
        </>
    )
}

export default ForStyle;