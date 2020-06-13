import React , { useState } from 'react';

function Room(){
    const [islit,setlit]=useState(true);
    let [age,setAge]=useState(10);
   
    function updatelit()
    {
        setlit(!islit);
        //console.log("udpated called");
    }
    function AddAge()
    {
        setAge(++age);
        //console.log("udpated called");
    }
    function SubtractAge()
    {
        setAge(--age);
        //console.log("udpated called");
    }
    //const status=useState(true);
   // console.log(status);
return <div  className={islit?'lit':'Dark'}>from Room lit:
<br></br>
<button onClick={updatelit}>Update Room</button>
<br></br>
<div>{age}</div>
<button onClick={AddAge}>+</button><button onClick={SubtractAge}>-</button>
</div>

}


export default Room;