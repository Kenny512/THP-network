import React from 'react'
import {Routes, Route}  from "react-router-dom"

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import HomePage from './pages/HomePage'

import './App.css'
 
function App() {

  return (
   <>
      <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/Register" element={ <Register /> } />
            <Route path="/Login" element={ <Login /> } />
            <Route path="/HomePage" element={ <HomePage /> } />
      </Routes>
   </>
  )
}

export default App
