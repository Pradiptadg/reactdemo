import { useState } from "react";




const Counter = (props) => {
    //let countState = 77



    const [countState, setCountState] = useState(77)

    function incCount()
{
    //countState++
     setCountState(countState + props.incBy)

}
    return (
        <div>
            <div>{countState}</div>
            <button onClick={incCount}>+{props.incBy}</button>

        </div>
    )
}
export default Counter;