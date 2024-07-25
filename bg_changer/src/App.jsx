import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState("#212121");
  return (
    <div className='w-full h-screen m-0 p-0 duration-300' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2 w-90'>
        <div className='flex flex-wrap gap-3 justify-center bg-white shadow-lg px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg' onClick={() => setColor('green')} style={{backgroundColor: 'green'}}>Green</button>
          <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg' onClick={() => setColor('red')} style={{backgroundColor: 'red'}}>Red</button>
          <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg' onClick={() => setColor('blue')} style={{backgroundColor: 'blue'}}>Blue</button>
        </div>
      </div>
    </div>
  );
}

export default App
