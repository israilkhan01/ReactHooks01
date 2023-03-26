import React, { useReducer } from 'react'
import Comment from './Comment';

const initialLoad = {
    filesCount:0
}
const reducer = (state,action) => {
    
    console.log("actions - ",action);
    switch(action.type){
        case 'getloaded':
            return {
                filesCount:state.filesCount +1
            }
        case 'notloaded':
            return  {
                filesCount:state.filesCount -1
            }
        default:
            return {
                ...state
            }
}

}
let depth = 0;
function CounterRed({data}) {
  const [filesCount,dispatch] = useReducer( reducer , initialLoad)
//   console.log("values- ",Object.values(data).map((val)=>{return Object.values}))

  
  return (
    <div>
        <h1>
        CounterRed
        </h1>
        <h2>Show the nested comments - </h2>
        {/* {recFun(data.comments) } */}
       <div style={{"border": "0.1px solid black"}}>
        {
            data.comments.map((vals,key)=>{return <Comment key={key} comment = {vals} depth = {depth} />})
        }
        </div>
       {/* <span>
       <h3>{filesCount.filesCount}</h3>
       </span>
        <button onClick={() => dispatch({type:'getloaded'})}>
            getloaded
        </button>
        {"  "}
        <button onClick={() => dispatch({type:'notloaded'})}>
        notloaded
        </button> */}
        

    </div>
  )
}

export default CounterRed