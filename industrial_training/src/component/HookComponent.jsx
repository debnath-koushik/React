import React, { useState } from 'react'

const HookComponent = (props) => {
  
  const [name, setName] = useState(props.name);
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={ ()=>setName(name + "d")}>Click me</button>
    </div>
  )
}

export default HookComponent
