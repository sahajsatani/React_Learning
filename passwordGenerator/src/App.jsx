import { useRef, useState } from "react";
import "./App.css";
// import Nav from './Nav.jsx'
import { useCallback } from "react";
import { useEffect } from "react";
function App() {
  {
    // const [length,setLength] = useState(8);
    // const[count,setCount] = useState(10);
    // function len(){
    //   console.log(length);
    //   setLength(length+1);
    // }
    // const tryFun = () => {
    //   console.log("Another Function call"+length);
    //   return "Another"+length;
    // };
    // const tryFun = useCallback(() => {
    //   console.log("Another Function call"+length);
    //   return "Another"+length;
    // },[length]);
  }

  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*(){}_+|[]:;<>?/.,`~";
    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(idx);
    }
    setPassword(pass);
  }, [length, number, character, setPassword]);

  //run on every render
  // useEffect(() => {
  //   passwordGenerator();
  // })

  //run only on first render
  // useEffect(() => {
  //   passwordGenerator();
  // },[])

  //run only on certain value change
  useEffect(() => {
    passwordGenerator();
  },[length, number, character,passwordGenerator])

  const CopyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);

    // window.nevigator.clipboard.writeText(password);
  },[password]);
  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-md px-4 py-3 my-8 text-green-500 bg-slate-600">
        <h1 className="text-white font-medium my-3">Password Generator</h1>
        <div className="flex overflow-hidden mb-4 rounded-lg">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none w-full py-1 p-3"
            ref={passwordRef}
            readOnly
          />
          <button
            className="text-white bg-blue-600 p-3"
            onClick={CopyPassword}
          >
            Copy
          </button>
        </div>
        <div className="flex flex-wrap gap-x-2">
          <div className="flex flex-wrap gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length :{length}</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              className="cursor-pointer"
              onChange={(e) => {
                setNumber((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              className="cursor-pointer"
              onChange={(e) => {
                setCharacter((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      <button className='text-white bg-blue-600 mt-3 px-3 py-2 rounded-lg shadow-2xl' onClick={passwordGenerator}>Create</button>
      </div>

      {/* <Nav adjective={"sahaj"} tryFun={tryFun}/>
      <button className='text-white bg-gray-600 p-3 rounded-lg shadow-2xl' onClick={len}>Click For Rerender By Stat</button> */}
    </>
  );
}

export default App;
