import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  function changeColor(color){
    setColor(color)
  }
  return (
    <div>
      <div className='w-full h-screen duration-200' style = {{backgroundColor: color}}> 
      <h1 className=' text-2xl text-white '>Background changer with Vite</h1>
      <div className='fixed flex flexwrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='fixed flex flexwrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>
          <button
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-dull shadow-lg text-red-500 '>Red </button>
          <button 
          onClick={() => setColor('blue')}
          className='outline-none px-4 py-1 rounded-dull shadow-lg text-blue-500'>Blue </button>
          <button 
          onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-dull shadow-lg text-green-500'>Green</button>

        </div>

        </div>
        </div>
    </div>
  )
}

export default App
