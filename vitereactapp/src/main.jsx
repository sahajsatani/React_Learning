import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

// function TempChai(){
//   return (
//     <h1>Temp Chai Function</h1>
//   );
// }

// const Obj = (
//   <a href="Google.com" target="_blank">Google</a>
// );

// const elm = React.createElement("a",{
//   href: "google.com",
//   target: "_blank",
// },
// "Link")

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
    <TempChai />
    <App />
    <Chai/>
    {/* // Obj
    // elm */}
    </React.StrictMode>
    </>
)
