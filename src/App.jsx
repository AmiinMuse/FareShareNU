import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { supabase } from '../supabaseClient'

// Layouts
import HomeLayout from './layouts/HomeLayout'

// Pages
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Help from './pages/Help'
import Dashboard from './pages/Dashboard'

// Components
import Accordion from './components/Accordian'

// Styling
import './App.css'
import preline from 'preline'

function App() {
  const [session, setSession] = useState()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    
    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    console.log(session)
  }, [session])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
        <Route path="login" element={<LogIn setSession={setSession}/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="help" element={<Help/>}/>
        <Route path="dashboard" element={<Dashboard session={session}/>}/>
      </Routes>
    </div>
  )
}

export default App
