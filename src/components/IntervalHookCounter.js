import React,{useState,useEffect,useContext} from 'react'

import { UserContext } from '../App'

function IntervalHookCounter() {
  const [count,setcount] =  useState(0)
  const user = useContext(UserContext);

  const counterfun = ()=>{
    // console.log("counter fun")
    setcount(precount => precount+1)
  }

  useEffect(() =>{
    console.log("Added counter")
    const interval =   setInterval(counterfun,1000)
    return () =>{
        clearInterval(interval)
    }
  },[])
  return (
    <div>
        <h1>{count}</h1>
        {/* <UserContext.Consumer>
          {
            user => { */}
              {/* return  */}
              <div> This is {user} </div>
            {/* }
           }
        </UserContext.Consumer> */}
    </div>
  )
}

export default IntervalHookCounter