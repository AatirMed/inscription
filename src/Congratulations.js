import React from "react";

const Congratulations = (props)=>{
    
return(
    <div>
        user is create !!!<br/>
        <button onClick={()=>props.changeValue()}>New Create</button>
    </div>
)
}

export default Congratulations;