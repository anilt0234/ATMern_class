import React from 'react'
import Card1 from './Card1';

const App = () => {
  // const btn = document.getElementById('btn');
  // //console.log(btn);
  // btn.addEventListener('click', () => { 
  //   console.log('Button clicked!');
  // });

  return (
    <div>
      {/* <button onClick={() => console.log('Button clicked!')}>Click</button> */}
      <Card1 fullname='John Doe' /> 
      <Card1 fullname='Anil Thakur' /> 
    </div>
    // <Card1 />
  )
}

export default App