import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(15)
  //let counter=5;
  const addValue=()=>{
    setCounter((counter)=>counter+1);
    setCounter((counter)=>counter+1);
    setCounter((counter)=>counter+1);
    setCounter((counter)=>counter+1);
  }
  const decValue = () => {
    if(counter==0){
      alert("no negetive val allowed")
    }
    else
      setCounter(counter-1);
  }
  return (
    <>
      <h1>chai aur counter</h1>
      <h2>current count: {counter}</h2>
      <button
      onClick={addValue}
      >add count</button>
      <br />
      <button
      onClick={decValue}
      >decrease count</button>
    </>
  )
}

export default App
