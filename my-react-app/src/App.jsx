import React from 'react'

const App = () => {
  /* you can only retun once, 
  but you wrap as much code you want
  to within the single element */
  //////////////////////////////////////
  /* you can even add expressions and variables,
  just put it inside the {} */
  
  /* you can't have "string" inside the {} */
  const name = "dude";
  const x = 10;
  const y = 20;
  const names = ['dude','bro','pal','homie','mate'];
  return  (
    <div>
      <h1>Hello</h1>
      <h2> {name} </h2>
      <p>hello bro this is my react app</p>
      <p>sum of {x} and {y} is equal to {x+y}  </p>
      <div>
        <ul> {names.map((name ,index)=>(<li key={index}>
          {name}
        </li>))} </ul>
      </div>
    </div>
  ) 
}
export default App;


