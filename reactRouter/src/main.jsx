import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Component/Home";
import About from "./Component/About.jsx";
import Contact from "./Component/ContactUs.jsx";
import User from "./Component/User.jsx";
import Github, { getFollower } from "./Component/Github.jsx";
import Sahaj from "./Component/Sahaj.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       }
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>

      <Route path="/home" element={<Home/>}/>

      <Route path="/about/" element={<About/>}>

        <Route path="/about/sahaj" element={<Sahaj/>}/>
        
      </Route>

      <Route path="/contact" element={<Contact/>}/>

      <Route path="/user/:userid" element={<User/>}/>

      <Route loader={getFollower} path="/github" element={<Github/>}/>
    
    </Route>

  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
