import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      {show && <h2 className="web">Change Title or Toggle</h2>}

      <br />
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}

export default App;
