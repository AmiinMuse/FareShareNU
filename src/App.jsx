import { useState } from 'react'

import Home from './pages/Home'

import './App.css'
import Help from './pages/help'

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
          <Route index element={<Help/>}/>
          <Route path="create" element={<CreateCrewmate/>}/>
          <Route path="gallery" element={<CrewmateGallery/>}/>
          <Route path="edit/:id" element={<EditCrewmate/>}/>
        </Route> */}
      {/* </Routes> */}
      <Help/>
    </div>
  )
}

export default App
