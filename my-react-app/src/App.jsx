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
  /* we can't use conditionals like in js 
  conditionals in jsx should be in one single line */
  const logged = false;
  /*if (logged) {
    return <h1>hello member</h1>
  }*/
  /* the problem is now we can't load the rest of the code
  so we need to put if statement somewehere else 
  in single line of code ( use ternary operator)*/
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
      {/*{logged ? <h1>hello member</h1>: <h1>hello guest</h1> }*/}
      {/*{logged ? <h1>hello member</h1>:""}*/} 
      {logged && <h1>hello member</h1>}
    </div>
  ) 
}
export default App;












