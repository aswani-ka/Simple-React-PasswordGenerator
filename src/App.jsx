import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) {
      str+="0123456789"
    }
    if(charAllowed) {
      str+="!@#$%^&*()_+"
    }
    for(let i = 1; i <= length; i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed]) 

   useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])
  
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='grid gap-7 max-w-md mx-auto shadow-md rounded-lg px-8 py-10 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-4xl font-bold text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden bg-white mb-4'>
          <input 
          type="text" 
          placeholder='Password'
          value={password}
          className='outline-none w-full py-1 px-3'
          readOnly
          />
          <button className='outline-none text-white bg-blue-700  px-3 py-0.5 shrink-0 cursor-pointer'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-1'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              name="" 
              id="" 
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="characters">Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
