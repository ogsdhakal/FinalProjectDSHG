import React from 'react'
import './index.css';
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'



function App() {

  const {user} = useAuthContext()
  return (
    <div className='App'>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={user? <Home/> : <Navigate to= "/"/>}/>
                <Route path='/login' element={!user ? <Login/> : <Navigate to = "/"/>}/>
                <Route path='/signup' element={!user ? <SignUp/> : <Navigate to = "/"/>}/>      
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App