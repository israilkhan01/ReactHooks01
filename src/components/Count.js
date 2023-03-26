import React from 'react'

function Count({text,count}) {
    console.log('count for ' + text)
  return (
    <div>
        {text} Count is {count}
    </div>
  )
}

export default React.memo(Count)
//component will only be rerender if there is only change in props or in state