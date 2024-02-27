import React, { useState } from 'react'

function App() {

  const [input, setInput] = useState("")

  return (
    <div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <h2>Change Title or Toggle</h2>
      <br />
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  )
}

export default App;