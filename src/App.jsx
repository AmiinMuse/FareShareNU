import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// Layouts
import HomeLayout from './layouts/HomeLayout'
import AuthLayout from './layouts/AuthLayout'

// Pages
import Home from './pages/Home'
import About from './pages/about'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Help from './pages/Help'

// Components
import Accordion from './components/Accordian'

// Styling
import './App.css'
import preline from 'preline'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
        <Route path="login" element={<LogIn/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="help" element={<Help/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
