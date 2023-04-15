import { useState } from 'react'

import Home from './pages/Home'

import './App.css'

const AppLayout = () => {
  return (
    <>
    </>
  )
}

function App() {
  return (
    <div className="App">
      {/* <Routes> */}
        {/* <Route path="/" element={<AppLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="create" element={<CreateCrewmate/>}/>
          <Route path="gallery" element={<CrewmateGallery/>}/>
          <Route path="edit/:id" element={<EditCrewmate/>}/>
        </Route> */}
      {/* </Routes> */}
      <Home/>
    </div>
  )
}

export default App
