import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);
  const obj = {
    name:"satani",
    age:90
  }
  const arr = [1,2,3]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-2">Hello world!</h1>
      <Card user="Sahaj" stock="in stock" someObj={arr}/>
      <Card user="dhrul" stock="out of stock" someObj={arr}/>
    </>
  );
}

export default App;
