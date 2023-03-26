import React, { useMemo, useState } from 'react'

function MemoPr() {
    const [counterOne,setCounterOne] = useState(0);
    const [counterTwo,setCounterTwo] = useState(0);

    const incrOne  = ()=>{
        console.log("one")
        setCounterOne(counterOne+1);
    }
    const incrTwo  = ()=>{
        console.log("two")
        setCounterTwo(counterOne+1);
    }

    const isEven = useMemo( ()=>{
        console.log("checking even..")
        let i=0
        while(i<20000000) i++;
        console.log("checked..")
        return counterOne%2 ===0;
    },[counterOne])
     
  return (
    <div>
         <h1>MemoPr</h1>
         <div>
            {counterOne} is {isEven ? 'Even' : "Odd"}
         
            <div>
            <button  onClick={incrOne} > Increase One</button>
            </div>
         </div>
         <div>
            {counterTwo} <button onClick={incrTwo} > Increase Two</button>
         </div>

    </div>
  )
}

export default MemoPr