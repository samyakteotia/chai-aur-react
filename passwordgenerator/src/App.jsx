import { useState,useCallback,useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [password,setPassword]=useState("")
  const [number,setNumber]=useState(false)
  const [character,setCharacter]=useState(false)
  const generatepassword= useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number)  str+="1234567890"
    if(character) str+="!@#$%^&*(){}[]"
    for(let i=1;i<=length;i++){
      let charc=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(charc)
    }
    setPassword(pass)
  },[length,number,character,setPassword])
  const passref=useRef(null)
  useEffect(()=>{generatepassword()},[length,number,character,generatepassword])
  const copypass=useCallback(()=>{
    passref.current?.select
      window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-1 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-5'> Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passref}/>
          <button className='outline-non bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copypass}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 '>
          <div className='flex item-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/> <label> Length:{length}</label>
          </div>
          <div className='flex text-sm gab-x-2'>
            <input type="checkbox" defaultChecked={number} onChange={()=>{setNumber((prev)=>!prev)}} /> <label> Number</label>
          </div>
          <div className='flex text-sm gab-x-2'>
            <input type="checkbox" defaultChecked={character} onChange={()=>{setCharacter((prev)=>!prev)}} /> <label> Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
