import React from "react";


function FunctionClick(){

    function clickHandler(){
        console.log('Button clicked in function component!');
        alert('Button clicked in function component!');
    }
    return(
       <div>
        <p>This is FunctionClick EventHandling in React</p>
        <button onClick={clickHandler}>Click here</button>
       </div>
    )
}

export default FunctionClick