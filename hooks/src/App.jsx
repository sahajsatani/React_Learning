import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  let a = useRef(0);

  useEffect(()=>{
    a.current++;
    console.log("Rerendering... "+a.current);
  });

  const [todos,setTodos] = useState([
      {
        title:"This is first",
        desc:"First desc"
      },
      {
        title:"This is second",
        desc:"second desc"
      },
      {
        title:"This is Third",
        desc:"Third desc"
      }]
  );
    function Todo({i}){
    return(
      <>
      <div className='border-2 p-1 border-purple-400 mb-2'>
      <div>{i.title}</div>
      <div>{i.desc}</div>
      </div>
      </>
    );
  }
  const heading = useRef();
  return (
    <>
      <h1 ref={heading}>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1);
          heading.current.style.color = 'green';
          }}>
          count is {count}
        </button>
        {todos.map(todo => <Todo i={todo}/>)}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
