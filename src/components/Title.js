import React from 'react'

function Title() {
    console.log("Redering for title...")
  return (
    <div>
       <h1>
            Optimizing React Rendering!
       </h1>
    </div>
  )
}

export default React.memo(Title)