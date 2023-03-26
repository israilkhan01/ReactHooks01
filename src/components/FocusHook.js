import React, { useEffect, useRef } from 'react'

function FocusHook() {
    const inpRef = useRef();
    useEffect(()=>{
        console.log("Focus On input Element")
        inpRef.current.focus()
    },[])
  return (
    <div>
        <h1>
        FocusHook
        </h1>
        <input ref={inpRef} type='text' />
    </div>
  )
}

export default FocusHook