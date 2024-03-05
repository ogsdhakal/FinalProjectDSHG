import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'



function App() {
  return (
    <div className='App'>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App