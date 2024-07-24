import { useState } from 'react'
import './App.css'

function App() {
  let [cnt,updateCounter] = useState(10);
  const addNumber = () => {
    if(cnt<20)
      updateCounter(++cnt)
  }
  const removeNumber = () => {
    if(cnt>0)
      updateCounter(--cnt);
  }
  return (
    <>
      <h1>Chai Or Code {cnt}</h1>
      <button onClick={addNumber}>Add Number </button><br />
      <button onClick={removeNumber}>Remove Button </button>

    </>
  )
}

export default App
