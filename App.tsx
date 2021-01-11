import React from "react";
export  default function App(){

const [counter, setCounter] = React.useState(0);

const incrementar = () => setCounter(counter + 1);
const decrementar = () => setCounter(counter - 1);


  return <div style ={{display:"flex", flexDirection:"column", alignItems:"center"}}>
     <h1>counter</h1>
     <h2>{counter}</h2>
     <div style = {{flexDirection: "row"}}>
     <button onClick={decrementar}>-</button>
     <button onClick={incrementar}>+</button>
     </div>
         </div>
}