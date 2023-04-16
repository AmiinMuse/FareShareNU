import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { supabase } from '../supabaseClient'

// Layouts
import HomeLayout from './layouts/HomeLayout'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Help from './pages/Help'

import Dashboard from './pages/Dashboard'
import GroupSearch from './pages/GroupSearch'
import GroupsOverview from './pages/GroupsOverview'
import Profile from './pages/Profile'

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
          <Route path="help" element={<Help/>}/>
          <Route path="about" element={<About/>}/>
        </Route>
        <Route path="signin" element={<SignIn/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="dashboard" element={<Dashboard session={session}/>}>
          <Route index element={<GroupSearch/>}/>
          <Route path="groups" element={<GroupsOverview/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
