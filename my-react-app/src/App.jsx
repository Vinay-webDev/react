import React from 'react'

const App = () => {
  /* you can only retun once, 
  but you wrap as much code you want
  to within the single element */
  //////////////////////////////////////
  /* you can even add expressions and variables,
  just put it inside the {} */
  
  /* you can't have "string" inside the {} */

  const x = 10;
  const y = 20;

  return  (
    <div>
      <h1>Hello</h1>
      <p>hello bro this is my react app</p>
      <p>sum of {x} and {y} is equal to {x+y}  </p>
    </div>
  ) 
}

export default App;


