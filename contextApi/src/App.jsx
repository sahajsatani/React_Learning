import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Login'
import Profile from './Profile'

function App() {
  return (
    <UserContextProvider className="bg-slate-950">
      <h1 className='text-white'>React Context Api</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
