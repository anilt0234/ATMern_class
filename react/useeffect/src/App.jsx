import React from 'react'
import { useState, useEffect } from 'react';

const App = () => {
// let count= 0;
//   const handleClick=() => {
//    count = count + 1;
//    console.log(count);
//   }
  const [count, setCount] = useState(0);
  
  
  
  useEffect(() => {
    console.log("i am a costly api");
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h1>the value of count is: {count}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App