import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function increase() {
    if (counter<9) {
      setCounter(prev => prev + 1);
    }
  }

  function decrease() {
    if (counter>0) {
      setCounter(prev => prev - 1);
    }
    
  }

  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default App;
