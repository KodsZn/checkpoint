import React from 'react'

const Hello = ({firstName}) => {
  return (
    <div style={{color: 'orange'}}>
        {firstName ?<div>
            <img style={{borderRadius:90}} width={150} src='https://lh3.googleusercontent.com/a/ACg8ocJaWQBjRMZY1pnhBL-Y98S9m6rnpkQDGbPkkN2vRzHbc1Q=s360-c-no'alt={"hello"}/>
            <h1>Hello {firstName} !</h1></div>:<h1>Hello, there</h1>}
     </div>   
  )
}

export default Hello